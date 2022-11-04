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
exports.handleError = exports.validateSignature = exports.generateSignature = exports.validatePassword = exports.generatePassword = exports.generateSalt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const generateSalt = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.genSalt(12);
});
exports.generateSalt = generateSalt;
const generatePassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield generateSalt();
    return yield bcrypt_1.default.hash(password, salt);
});
exports.generatePassword = generatePassword;
const validatePassword = (entryPassword, hashPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(entryPassword, hashPassword);
});
exports.validatePassword = validatePassword;
const generateSignature = (payload) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, config_1.default.app.PRIVATE_KEY, { expiresIn: config_1.default.app.PRIVATE_EXPIRATION_TIME }, (error, token) => {
            if (error)
                return reject(error);
            resolve(token);
        });
    });
};
exports.generateSignature = generateSignature;
const validateSignature = (auth) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(auth.split(" ")[1], config_1.default.app.PRIVATE_KEY, (error, payload) => {
            if (error)
                return reject(error);
            resolve(payload);
        });
    });
};
exports.validateSignature = validateSignature;
const handleError = (error) => {
    if (error instanceof Error) {
        return error.message;
    }
    return error;
};
exports.handleError = handleError;
