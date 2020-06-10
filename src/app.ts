import 'reflect-metadata';
import container from './core/container';
import * as cron from 'node-cron';
import config from './config';

const main = async () => {
	const crawler = await container.cradle.crawler;
	const emailService = await container.cradle.emailService;
	const newsService = await container.cradle.newsService;

	// await crawler.start();

	const notifiedNews = await newsService.getAllNotNotifiedEmail();
	const notifiedNewsHtmlList = notifiedNews.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`);

	const emailResponse = await emailService.send({
		from: config.noreply_email,
		to: config.info_email,
		subject: 'New crawled posts',
		html: `
			<h1>New crawled posts</h1>
			<ul>${notifiedNewsHtmlList}</ul>`,
	});
	if (emailResponse.messageId) {
		console.log(`Send email is success => ${emailResponse.messageId}`);
	}
};

const args = process.argv.slice(2);
if (args[0] === '--start') {
	main();
}

cron.schedule('0 0 * * *', async () => {
	main();
});
