"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const loglevel_1 = __importDefault(require("loglevel"));
dotenv_1.default.config();
const ENV = process.env.NODE_ENV || "development";
loglevel_1.default.enableAll();
const CONFIG = {
    production: {
        app: {
            PORT: process.env.PORT || 4000,
            PRIVATE_KEY: process.env.JWT_SECRET_KEY,
            PRIVATE_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
        },
        logger: {
            warn: loglevel_1.default.warn,
            info: loglevel_1.default.info,
            error: loglevel_1.default.error,
            trace: loglevel_1.default.trace,
            debug: loglevel_1.default.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
    },
    development: {
        app: {
            PORT: process.env.PORT || 4000,
            PRIVATE_KEY: process.env.JWT_SECRET_KEY,
            PRIVATE_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
        },
        logger: {
            warn: loglevel_1.default.warn,
            info: loglevel_1.default.info,
            error: loglevel_1.default.error,
            trace: loglevel_1.default.trace,
            debug: loglevel_1.default.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
    },
    test: {
        app: {
            PORT: process.env.PORT || 4000,
            PRIVATE_KEY: process.env.JWT_SECRET_KEY,
            PRIVATE_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
        },
        logger: {
            warn: loglevel_1.default.warn,
            info: loglevel_1.default.info,
            error: loglevel_1.default.error,
            trace: loglevel_1.default.trace,
            debug: loglevel_1.default.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
    },
};
exports.default = CONFIG[ENV];
