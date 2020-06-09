import { News } from '../entity/News';
import { Repository } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const newsRepository = async ({ dbService }): Promise<Repository<News>> => {
	const connection = await dbService.connection();
	const repository = await connection.getRepository(News);
	return repository;
};

export default newsRepository;
