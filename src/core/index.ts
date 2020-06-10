import container from './container';
import config from '../config';

const main = async () => {
	const crawler = await container.cradle.crawler;
	const emailService = await container.cradle.emailService;
	const newsService = await container.cradle.newsService;

	await crawler.start();

	const notifiedNews = await newsService.getAllNotNotifiedEmail();
	if (notifiedNews.length) {
		const notifiedNewsHtmlList = notifiedNews
			.map((item) => `<li><a href="${item.link}">${item.title}</a></li>`)
			.join('');
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
		} else {
			console.log(`Error send email: ${JSON.stringify(emailResponse)}`);
		}
	} else {
		console.log('Not found new posts.');
	}
};

export default main;
