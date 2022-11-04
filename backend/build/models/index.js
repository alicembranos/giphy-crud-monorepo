"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("./User/UserModel"));
const GifModel_1 = __importDefault(require("./Gif/GifModel"));
exports.default = {
    User: UserModel_1.default,
    Gif: GifModel_1.default,
};
