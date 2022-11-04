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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../utils/index");
const index_2 = __importDefault(require("../../models/index"));
class AuthController {
    signInUser(req, res, _next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email || !password)
                return res.status(400).json({ ok: false, msg: "All files are required" });
            try {
                const user = yield index_2.default.User.findOne({ email: email }).exec();
                if (!user)
                    return res.status(401).json({ ok: false, msg: "User not registered. Please sign up" });
                const isValidPassword = yield (0, index_1.validatePassword)(password, user.password);
                if (!isValidPassword)
                    return res.status(401).json({ ok: false, msg: "Email or password are not valid" });
                const tokenPayload = {
                    sub: user.id,
                    username: user.username,
                };
                const token = yield (0, index_1.generateSignature)(tokenPayload);
                return res
                    .status(200)
                    .send({ ok: true, data: { jwt: token, id: user._id, username: user.username } });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: (0, index_1.handleError)(error) });
            }
        });
    }
    signUpUser(req, res, _next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, username, image } = req.body;
            if (!email || !password || username)
                return res.status(400).json({ ok: false, msg: "All files are required" });
            try {
                const user = yield index_2.default.User.findOne({ email: email }).exec();
                if (user)
                    return res.status(401).json({ ok: false, msg: "User already exists." });
                const usernameExist = yield index_2.default.User.findOne({ username: username }).exec();
                if (usernameExist)
                    throw new Error("Username is already used. Please select a new one.");
                const hashPassword = yield (0, index_1.generatePassword)(password);
                const newUser = yield index_2.default.User.create({
                    email,
                    username,
                    password: hashPassword,
                    image,
                });
                const tokenPayload = {
                    sub: newUser.id,
                    username: newUser.username,
                };
                const token = yield (0, index_1.generateSignature)(tokenPayload);
                return res
                    .status(200)
                    .send({ ok: true, data: { jwt: token, id: newUser._id, username: newUser.username } });
            }
            catch (error) {
                res.status(500).json({ ok: false, msg: (0, index_1.handleError)(error) });
            }
        });
    }
}
exports.default = AuthController;
