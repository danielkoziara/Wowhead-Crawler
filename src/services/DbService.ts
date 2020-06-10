import { createConnection, Connection, getConnectionManager } from 'typeorm';

export default class DbService {
	async connection(): Promise<Connection> {
		try {
			const connection: Connection = await createConnection();
			return connection;
		} catch (e) {
			const existentConn = getConnectionManager().get('default');
			return existentConn;
		}
	}
}
