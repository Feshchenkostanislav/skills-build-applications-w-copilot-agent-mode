"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const database_1 = require("./config/database");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.get('/api/config', (_req, res) => {
    res.json({
        apiUrl: config_1.API_BASE_URL,
        port: config_1.PORT,
    });
});
(0, routes_1.registerRoutes)(app);
(0, database_1.connectDatabase)()
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(config_1.PORT, config_1.HOST, () => {
        console.log(`Backend running on http://localhost:${config_1.PORT}`);
        console.log(`API base URL: ${config_1.API_BASE_URL}`);
    });
})
    .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});
