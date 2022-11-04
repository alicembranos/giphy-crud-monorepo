"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gifRouter = void 0;
const express_1 = require("express");
const index_1 = __importDefault(require("../controllers/index"));
const index_2 = __importDefault(require("../models/index"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const gifRouter = (0, express_1.Router)();
exports.gifRouter = gifRouter;
const controller = new index_1.default.Gif();
gifRouter.get("", () => controller.readAll(index_2.default.Gif));
gifRouter.get("/:id", () => controller.readById(index_2.default.Gif));
gifRouter.get("/user", () => controller.readByField(index_2.default.Gif));
gifRouter.use(auth_middleware_1.default);
gifRouter.post("", () => controller.create(index_2.default.Gif));
gifRouter.delete("/:id", () => controller.delete(index_2.default.Gif));
