import { createContainer, asClass, InjectionMode, asFunction } from 'awilix';
// services
import DbService from '../services/DbService';
import NewsService from '../services/NewsService';
import HttpService from '../services/HttpService';
import Crawler from './crawler';
// repositories
import newsRepository from '../repositories/newsRepository';
import { Repository } from 'typeorm';
import { News } from '../entity/News';

export interface ICradle {
	dbService: DbService;
	newsService: NewsService;
	httpService: HttpService;
	crawler: Crawler;
	newsRepository: Promise<Repository<News>>;
}

const container = createContainer<ICradle>({
	injectionMode: InjectionMode.PROXY,
});

container.register({
	httpService: asClass(HttpService),
	dbService: asClass(DbService),
	newsService: asClass(NewsService),
	crawler: asClass(Crawler),
	newsRepository: asFunction(newsRepository),
});

export default container;
