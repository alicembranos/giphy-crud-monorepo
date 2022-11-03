import {NextFunction, Request, Response } from 'express';
import { handleError, validateSignature } from '../utils/index';
  
export default async (req: Request, res: Response, next: NextFunction) => {
	const authorization = req.headers["authorization"];
	try {
		if (!authorization)
			return res.status(401).json({ ok: false, msg: "Not authorized" });

		const payload = await validateSignature(authorization);
        req.user = payload;
		next();
	} catch (error) {
		res.status(401).json({ ok: false, msg: handleError(error) });
	}
};