"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BASE_URL = exports.MONGO_URI = exports.CODESPACE_NAME = exports.HOST = exports.PORT = void 0;
exports.PORT = Number(process.env.PORT ?? 8000);
exports.HOST = process.env.HOST ?? '0.0.0.0';
exports.CODESPACE_NAME = process.env.CODESPACE_NAME;
exports.MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/octofit_db';
exports.API_BASE_URL = exports.CODESPACE_NAME
    ? `https://${exports.CODESPACE_NAME}-8000.app.github.dev`
    : `http://localhost:${exports.PORT}`;
