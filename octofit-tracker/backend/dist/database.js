"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const connectDatabase = async () => {
    console.log('Connecting to MongoDB...', config_1.MONGO_URI);
    return mongoose_1.default.connect(config_1.MONGO_URI);
};
exports.connectDatabase = connectDatabase;
exports.default = mongoose_1.default;
