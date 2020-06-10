import 'reflect-metadata';
import * as cron from 'node-cron';
import app from './core';

(async () => {
	const args = process.argv.slice(2);
	if (args[0] === '--start') {
		await app();
	}
})();

// cron tasks
cron.schedule('0 0 * * *', async () => {
	await await app();
});
