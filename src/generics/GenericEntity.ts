import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BeforeUpdate,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';
import * as dayjs from 'dayjs';

@Entity()
export class GenericEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn({
		name: 'created_at',
		type: 'datetime',
		default: () => `datetime()`,
	})
	createdAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
		type: 'datetime',
		nullable: true,
	})
	updatedAt: Date;
}
