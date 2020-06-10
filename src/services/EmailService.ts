import * as nodemailer from 'nodemailer';
import config from '../config';

interface IEmailParams {
	from: string;
	to: string;
	subject: string;
	html: string;
}

export default class EmailService {
	async send(data: IEmailParams): Promise<any> {
		const testAccount = await nodemailer.createTestAccount();
		const transporter = nodemailer.createTransport(config.mail);
		const email = await transporter.sendMail({
			from: config.noreply_email,
			to: 'daniel@danielkoziara.pl',
			subject: 'Hello ✔', // Subject line
			text: 'Hello world?', // plain text body
			html: '<b>Hello world?</b>', // html body
		});
		return [email, transporter, testAccount];
	}
}
