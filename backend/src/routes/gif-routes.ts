import { Router } from "express";
import Controller from "../controllers/index";
import database from "../models/index";
import authenticate from "../middlewares/auth.middleware";

const gifRouter = Router();
const controller = new Controller.Gif();

gifRouter.get("", () => controller.readAll(database.Gif));
gifRouter.get("/:id", () => controller.readById(database.Gif));
gifRouter.get("/user", () => controller.readByField(database.Gif));

gifRouter.use(authenticate);
gifRouter.post("", () => controller.create(database.Gif));
gifRouter.delete("/:id", () => controller.delete(database.Gif));

export { gifRouter };
