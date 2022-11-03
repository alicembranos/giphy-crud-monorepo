import express, { Express } from "express";
import config from "./config/config";
import connect from "./database/connect";
import initServer from "./server";

const StartServer = async () => {
	const app: Express = express();

	connect()
		.then(async function onServerInit() {
			config.logger.info("DB Connected!");

			initServer(app);

			app.listen(() => {
				config.logger.info(`Server is listening at port ${config.app.PORT}`);
			});
		})
		.catch((error: unknown) => {
			config.logger.error(`Error connecting to the DB: ${error}`);
		});
};

StartServer();
