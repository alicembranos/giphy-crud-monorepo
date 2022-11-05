import { Types } from "mongoose";

export {};

declare global {
	namespace Express {
		interface Request {
			user: string | Types.ObjectId;
		}
	}
}
