import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import IPayload from "interfaces/payload.interface";
import config from "../config/config";

const generateSalt = async (): Promise<string> => {
	return await bcrypt.genSalt(12);
};

const generatePassword = async (password: string): Promise<string> => {
	const salt = await generateSalt();
	return await bcrypt.hash(password, salt);
};

const validatePassword = async (entryPassword: string, hashPassword: string): Promise<boolean> => {
	return await bcrypt.compare(entryPassword, hashPassword);
};

const generateSignature = (payload: IPayload): Promise<string | undefined> => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			config.app.PRIVATE_KEY as Secret,
			{ expiresIn: config.app.PRIVATE_EXPIRATION_TIME },
			(error, token) => {
				if (error) return reject(error);
				resolve(token);
			}
		);
	});
};

const validateSignature = (auth: string): Promise<IPayload> => {
	return new Promise((resolve, reject) => {
		jwt.verify(auth.split(" ")[1], config.app.PRIVATE_KEY as Secret, (error, payload) => {
			if (error) return reject(error);
			resolve(payload as IPayload);
		});
	});
};

const handleError = (error) => {
	if (error instanceof Error) {
		return error.message;
	}
	return error;
};

export {
	generateSalt,
	generatePassword,
	validatePassword,
	generateSignature,
	validateSignature,
	handleError,
};
