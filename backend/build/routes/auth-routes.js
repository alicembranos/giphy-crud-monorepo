"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const index_1 = __importDefault(require("../controllers/index"));
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
const controller = new index_1.default.Auth();
authRouter.post("/signUp", controller.signUpUser);
authRouter.post("/signIn", controller.signInUser);
