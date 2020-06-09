import { createConnection, Connection } from 'typeorm';

export default class DbService {
	async connection(): Promise<Connection> {
		const connection: Connection = await createConnection();
		return connection;
	}
}
