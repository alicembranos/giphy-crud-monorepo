import { Router } from "express";
import Controllers from "../controllers/index";

const authRouter = Router();
const controller = new Controllers.Auth();

authRouter.post("/signUp", controller.signUpUser);
authRouter.post("/signIn", controller.signInUser);

export { authRouter };
