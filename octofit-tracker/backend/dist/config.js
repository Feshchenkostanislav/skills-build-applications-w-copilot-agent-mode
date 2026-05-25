"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BASE_URL = exports.CODESPACE_NAME = exports.HOST = exports.PORT = void 0;
exports.PORT = Number(process.env.PORT ?? 8000);
exports.HOST = process.env.HOST ?? '0.0.0.0';
exports.CODESPACE_NAME = process.env.CODESPACE_NAME;
exports.API_BASE_URL = exports.CODESPACE_NAME
    ? `https://${exports.CODESPACE_NAME}-8000.githubpreview.dev`
    : `http://localhost:${exports.PORT}`;
