"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("./authController/auth.controller"));
const base_controller_1 = __importDefault(require("./baseController/base.controller"));
exports.default = {
    Auth: auth_controller_1.default,
    Gif: base_controller_1.default
};
