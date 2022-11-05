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

// gifRouter.use(authenticate);
gifRouter.get("/user",authenticate, readByField(database.Gif));
gifRouter.post("", authenticate,create(database.Gif));
gifRouter.delete("/:id", authenticate, deleteDoc(database.Gif));
gifRouter.get("/:id", readById(database.Gif));
gifRouter.get("", readAll(database.Gif));

export { gifRouter };
