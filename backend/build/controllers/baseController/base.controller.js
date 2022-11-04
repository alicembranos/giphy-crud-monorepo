"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class BaseController {
    create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
                const body = Object.assign({}, req.body);
                try {
                    const doc = yield model.create(body);
                    res.status(200).send({ ok: true, data: doc });
                }
                catch (error) {
                    res.status(500).json({ ok: false, msg: (0, utils_1.handleError)(error) });
                }
            });
        });
    }
    readById(model) {
        return __awaiter(this, void 0, void 0, function* () {
            (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                try {
                    const doc = yield model.findById(id).populate("user").lean();
                    //!check this
                    if (!doc)
                        return res.status(400).send({ ok: false, msg: "Cannot read a document that not exist" });
                    res.status(200).send({ ok: true, data: doc });
                }
                catch (error) {
                    res.status(500).json({ ok: false, msg: (0, utils_1.handleError)(error) });
                }
            });
        });
    }
    readByField(model) {
        return __awaiter(this, void 0, void 0, function* () {
            (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
                const { user } = req.body;
                try {
                    const doc = yield model.findOne(Object.assign({}, user)).populate("user").lean();
                    res.status(200).send({ ok: true, data: doc });
                }
                catch (error) {
                    res.status(500).json({ ok: false, msg: (0, utils_1.handleError)(error) });
                }
            });
        });
    }
    readAll(model) {
        return __awaiter(this, void 0, void 0, function* () {
            (_req, res, _next) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const doc = yield model.find().populate("user").lean();
                    res.status(200).send({ ok: true, data: doc });
                }
                catch (error) {
                    res.status(500).json({ ok: false, msg: (0, utils_1.handleError)(error) });
                }
            });
        });
    }
    delete(model) {
        return __awaiter(this, void 0, void 0, function* () {
            (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                try {
                    const doc = yield model.findByIdAndDelete(id);
                    //!check this
                    if (!doc)
                        return res.status(400).send({ ok: false, msg: "Cannot read a document that not exist" });
                    res.status(200).send({ ok: true, msg: "Element deleted succesfully" });
                }
                catch (error) {
                    res.status(500).json({ ok: false, msg: (0, utils_1.handleError)(error) });
                }
            });
        });
    }
}
exports.default = BaseController;
