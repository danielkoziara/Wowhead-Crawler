import fetch, { Response } from 'node-fetch';
import * as $ from 'cheerio';

export default class HttpService {
	async plainHtmlToCheerio(response: Response): Promise<CheerioStatic> {
		const plainHTML: string = await response.text();
		const dom: CheerioStatic = $.load(plainHTML);
		if (dom) {
			return dom;
		}
		throw new Error('Wrong syntax HTML');
	}

	async request(url: string): Promise<Response> {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Connection is broken.`);
			}
			return response;
		} catch (e) {
			console.log(e);
		}
	}
}
