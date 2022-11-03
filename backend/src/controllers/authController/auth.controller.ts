import { NextFunction, Request, Response } from "express";
import IPayload from "interfaces/payload.interface";
import { generatePassword, generateSignature, validatePassword, handleError } from "../../utils/index";
import database from "../../models/index";

class AuthController {
	async signInUser(req: Request, res: Response, _next: NextFunction) {
		const { email, password } = req.body;

		if (!email || !password)
			return res.status(400).json({ ok: false, msg: "All files are required" });

		try {
			const user = await database.User.findOne({ email: email }).exec();
			if (!user)
				return res.status(401).json({ ok: false, msg: "User not registered. Please sign up" });

			const isValidPassword = await validatePassword(password, user.password);
			if (!isValidPassword)
				return res.status(401).json({ ok: false, msg: "Email or password are not valid" });

			const tokenPayload: IPayload = {
				sub: user.id,
				username: user.username,
			};

			const token = await generateSignature(tokenPayload);

			return res
				.status(200)
				.send({ ok: true, data: { jwt: token, id: user._id, username: user.username } });
		} catch (error: unknown) {
			res.status(500).json({ ok: false, msg: handleError(error) });
		}
	}

	async signUpUser(req: Request, res: Response, _next: NextFunction) {
		const { email, password, username, image } = req.body;

		if (!email || !password || username)
			return res.status(400).json({ ok: false, msg: "All files are required" });

		try {
			const user = await database.User.findOne({ email: email }).exec();
			if (user) return res.status(401).json({ ok: false, msg: "User already exists." });

			const usernameExist = await database.User.findOne({ username: username }).exec();
			if (usernameExist) throw new Error("Username is already used. Please select a new one.");

			const hashPassword = await generatePassword(password);
			const newUser = await database.User.create({
				email,
				username,
				password: hashPassword,
				image,
			});
			const tokenPayload: IPayload = {
				sub: newUser.id,
				username: newUser.username,
			};

			const token = await generateSignature(tokenPayload);

			return res
				.status(200)
				.send({ ok: true, data: { jwt: token, id: newUser._id, username: newUser.username } });
		} catch (error: unknown) {
			res.status(500).json({ ok: false, msg: handleError(error) });
		}
	}
}

export default AuthController;
