import { Entity, Column } from 'typeorm';
import { GenericEntity } from '../generics/GenericEntity';
@Entity()
export class News extends GenericEntity {
	@Column()
	title: string;

	@Column()
	excerpt: string;

	@Column()
	link: string;

	@Column()
	poster: string;

	@Column()
	published: Date;

	@Column({
		default: false,
	})
	notifiedEmail: boolean;
}
