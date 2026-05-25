"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.MONGO_URI = exports.DEFAULT_MONGO_URI = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
exports.DEFAULT_MONGO_URI = 'mongodb://localhost:27017/octofit_db';
exports.MONGO_URI = config_1.MONGO_URI ?? exports.DEFAULT_MONGO_URI;
const connectDatabase = async () => {
    console.log('Connecting to MongoDB...', exports.MONGO_URI);
    return mongoose_1.default.connect(exports.MONGO_URI);
};
exports.connectDatabase = connectDatabase;
exports.default = mongoose_1.default;
