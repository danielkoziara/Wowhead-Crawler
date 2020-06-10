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
		const transporter = nodemailer.createTransport(config.mail);
		const email = await transporter.sendMail(data);
		return email;
	}
}
