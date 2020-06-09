import { ICradle } from './container';
import HttpService from '../services/HttpService';
import { CreateNewsDTO } from '../dto/CreateNewsDTO';
import config from '../config';
import * as $ from 'cheerio';
import NewsService from '../services/NewsService';

export interface ICrawler {
	start(): void;
	getAllNewsFromPage(page: CheerioStatic): Promise<CreateNewsDTO[]>;
	getMaxPaginationNumber(): Promise<number>;
	extractNewsDataFromElement(element: CheerioElement): CreateNewsDTO;
}

export default class Crawler implements ICrawler {
	private httpService: HttpService;
	private newsService: NewsService;

	constructor(opts: ICradle) {
		this.httpService = opts.httpService;
		this.newsService = opts.newsService;
	}

	async start(): Promise<void> {
		const maxPaginationNumber = await this.getMaxPaginationNumber();
		for (let index = 1; index <= maxPaginationNumber; index++) {
			const URL = `${config.base_url}news&p=${index}`;
			const pagePlainHTML = await this.httpService.request(URL);
			const pageDOM = await this.httpService.plainHtmlToCheerio(pagePlainHTML);
			const pageResults = await this.getAllNewsFromPage(pageDOM);

			for await (const item of pageResults) {
				await this.newsService.create(item);
			}
		}
	}

	async getAllNewsFromPage(page: CheerioStatic): Promise<CreateNewsDTO[]> {
		const list = page('.news-list .news-post');
		const newsList: CreateNewsDTO[] = [];
		list.each((index: number, element: CheerioElement) => {
			const news: CreateNewsDTO = this.extractNewsDataFromElement(element);
			if (news) {
				newsList.push(news);
			}
		});
		return newsList;
	}

	extractNewsDataFromElement(element: CheerioElement): CreateNewsDTO {
		const news: CreateNewsDTO = new CreateNewsDTO();
		news.title = $(element).find('h1 a').text().trim();
		news.link = $(element).find('h1 a').attr('href');
		news.excerpt = $(element).find('.news-post-content noscript').text().trim();
		news.published = new Date(
			$(element).find('.news-post-header-byline span.date-tip').attr('title').replace('at', ''),
		);
		news.poster = String($(element).find('.news-post-teaser-image').attr('style'))
			.replace(/.*\(/g, '')
			.replace(/\?.*/g, '');
		return news;
	}

	async getMaxPaginationNumber(): Promise<number> {
		const homepage = await this.httpService.request(config.base_url);
		const homepageDOM = await this.httpService.plainHtmlToCheerio(homepage);
		const dirtyNumber = homepageDOM('.nav-pagination td a[rel="last"]').attr('href');
		const maxNumberPaginationPage = this.extractFirstNumber(dirtyNumber);
		return maxNumberPaginationPage;
	}

	private extractFirstNumber(dirtyURL: string) {
		const pattern = /([0-9]+)/g;
		const execRegex = dirtyURL.match(pattern);
		const foundNumbers: number[] = execRegex
			.map((item: string) => +item)
			.filter((item: number) => Number.isInteger(item));
		if (foundNumbers.length) {
			return foundNumbers[0];
		}
		throw new Error('Not found numbers.');
	}
}
