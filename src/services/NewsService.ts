import { News } from './../entity/News';
import { CreateNewsDTO } from '../dto/CreateNewsDTO';
import { validateOrReject } from 'class-validator';
import { ICradle } from '../core/container';

export default class NewsService {
	private newsRepository;

	constructor(opts: ICradle) {
		this.newsRepository = opts.newsRepository;
	}

	async create(data: CreateNewsDTO): Promise<News> {
		try {
			// valid object
			await validateOrReject(data);

			const newsRepository = await this.newsRepository;

			const isExsistNews = await newsRepository.findOne({ title: data.title, link: data.link });
			if (isExsistNews) {
				throw new Error(`News "${data.title}" exsist in database with ID: ${isExsistNews.id}`);
			}

			const news = new News();
			news.title = data.title;
			news.excerpt = data.excerpt;
			news.link = data.link;
			news.poster = data.poster;
			news.published = data.published;

			const result = await newsRepository.save(news);

			return result;
		} catch (e) {
			console.log(e);
		}
	}
}
