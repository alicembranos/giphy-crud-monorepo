import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { handleError } from "../../utils";

const create = async <T>(model: Model<T>) => {
	async (req: Request, res: Response, _next: NextFunction) => {
		const body = { ...req.body } as T;
		try {
			const doc = await model.create(body);
			res.status(200).send({ ok: true, data: doc });
		} catch (error: unknown) {
			res.status(500).json({ ok: false, msg: handleError(error) });
		}
	};
};

const readById = async <T>(model: Model<T>) => {
	async (req: Request, res: Response, _next: NextFunction) => {
		const { id } = req.params;
		try {
			const doc = await model.findById(id).populate("user").lean();
			//!check this
			if (!doc)
				return res.status(400).send({ ok: false, msg: "Cannot read a document that not exist" });

			res.status(200).send({ ok: true, data: doc });
		} catch (error) {
			res.status(500).json({ ok: false, msg: handleError(error) });
		}
	};
};

const readByField = async <T>(model: Model<T>) => {
	async (req: Request, res: Response, _next: NextFunction) => {
		const { user } = req.body;
		try {
			const doc = await model
				.findOne({ ...user })
				.populate("user")
				.lean();

			res.status(200).send({ ok: true, data: doc });
		} catch (error) {
			res.status(500).json({ ok: false, msg: handleError(error) });
		}
	};
};

const readAll = async <T>(model: Model<T>) => {
	async (_req: Request, res: Response, _next: NextFunction) => {
		try {
			const doc = await model.find().populate("user").lean();

			res.status(200).send({ ok: true, data: doc });
		} catch (error) {
			res.status(500).json({ ok: false, msg: handleError(error) });
		}
	};
};

const deleteDoc = async <T>(model: Model<T>) => {
	async (req: Request, res: Response, _next: NextFunction) => {
		const { id } = req.params;
		try {
			const doc = await model.findByIdAndDelete(id);
			//!check this
			if (!doc)
				return res.status(400).send({ ok: false, msg: "Cannot read a document that not exist" });

			res.status(200).send({ ok: true, msg: "Element deleted succesfully" });
		} catch (error) {
			res.status(500).json({ ok: false, msg: handleError(error) });
		}
	};
};

export { create, readById, readByField, readAll, deleteDoc };
