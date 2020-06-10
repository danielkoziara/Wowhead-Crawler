import 'reflect-metadata';
import container from './core/container';
import * as cron from 'node-cron';

const main = async () => {
	// const crawler = await container.cradle.crawler;
	// await crawler.start();
	const emailService = await container.cradle.emailService;
	console.log(await emailService.send({ from: '', to: '', subject: '', html: '' }));
};

main();

// cron.schedule('0 0 * * *', async () => {
// 	const crawler = await container.cradle.crawler;
// 	await crawler.start();
// });
