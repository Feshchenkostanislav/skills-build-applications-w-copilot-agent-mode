"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const teams_1 = __importDefault(require("./routes/teams"));
const users_1 = __importDefault(require("./routes/users"));
const workouts_1 = __importDefault(require("./routes/workouts"));
const registerRoutes = (app) => {
    app.use('/api/users', users_1.default);
    app.use('/api/teams', teams_1.default);
    app.use('/api/activities', activities_1.default);
    app.use('/api/leaderboard', leaderboard_1.default);
    app.use('/api/workouts', workouts_1.default);
};
exports.registerRoutes = registerRoutes;
