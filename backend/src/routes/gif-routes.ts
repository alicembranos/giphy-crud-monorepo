import { Router } from "express";
import authenticate from "../middlewares/auth.middleware";
import {
	create,
	readById,
	readByField,
	readAll,
	deleteDoc,
} from "../controllers/baseController/base.controller";
const gifRouter = Router();

gifRouter.get("", readAll);
gifRouter.get("/:id", readById);
gifRouter.get("/user", readByField);

gifRouter.use(authenticate);
gifRouter.post("", create);
gifRouter.delete("/:id", deleteDoc);

export { gifRouter };
