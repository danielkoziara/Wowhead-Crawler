import 'reflect-metadata';
import container from './core/container';
const main = async () => {
	const crawler = await container.cradle.crawler;
	await crawler.start();
};

main();
