import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import { authRouter } from "./routes/auth-routes";
import { gifRouter } from "./routes/gif-routes";

dotenv.config();

export default async (app: Express) => {
	app.use(morgan("dev"));
	app.use(helmet());
	app.use(cors());
	app.use(express.json());

	app.use("/auth", authRouter);
	app.use("/gif", gifRouter);

	app.use("/", (_req: Request, res: Response) => {
		res.status(200).send("Hello from Server");
	});
};
