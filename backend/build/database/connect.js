"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_DB_URI = config_1.default.db.url || "";
function connect() {
    return mongoose_1.default.connect(MONGO_DB_URI);
}
exports.default = connect;
