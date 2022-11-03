import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import IUser from "../../interfaces/user.interface";

const UserSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			default: "",
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform(_doc, ret) {
				delete ret.password;
			},
		},
	}
);


const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
