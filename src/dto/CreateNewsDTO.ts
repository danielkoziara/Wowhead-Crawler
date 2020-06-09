import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateNewsDTO {
	@IsNotEmpty()
	@IsString()
	title: string;

	@IsNotEmpty()
	@IsString()
	excerpt: string;

	@IsNotEmpty()
	@IsString()
	link: string;

	@IsNotEmpty()
	@IsString()
	poster: string;

	@IsNotEmpty()
	@IsDate()
	published: Date;
}
