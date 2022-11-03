import { Types } from "mongoose";

export default interface IPayload {
	sub: Types.ObjectId | string;
	username: string;
}
