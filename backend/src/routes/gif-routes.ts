import { Router } from "express";
import authenticate from "../middlewares/auth.middleware";
import {
	create,
	readById,
	readByField,
	readAll,
	deleteDoc,
} from "../controllers/baseController/base.controller";
import database from "../models/index";
const gifRouter = Router();

gifRouter.get("", readAll(database.Gif));
gifRouter.get("/:id", readById(database.Gif));
gifRouter.get("/user", readByField(database.Gif));

gifRouter.use(authenticate);
gifRouter.post("", create(database.Gif));
gifRouter.delete("/:id", deleteDoc(database.Gif));

export { gifRouter };
