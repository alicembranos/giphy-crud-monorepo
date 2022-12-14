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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const connect_1 = __importDefault(require("./database/connect"));
const server_1 = __importDefault(require("./server"));
const StartServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    (0, connect_1.default)()
        .then(function onServerInit() {
        return __awaiter(this, void 0, void 0, function* () {
            config_1.default.logger.info("DB Connected!");
            (0, server_1.default)(app);
            app.listen(() => {
                config_1.default.logger.info(`Server is listening at port ${config_1.default.app.PORT}`);
            });
        });
    })
        .catch((error) => {
        config_1.default.logger.error(`Error connecting to the DB: ${error}`);
    });
});
StartServer();
