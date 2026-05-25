"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({
        leaderboard: [
            {
                rank: 1,
                name: 'Ariel Athlete',
                score: 980,
            },
            {
                rank: 2,
                name: 'Jordan Jumper',
                score: 940,
            },
        ],
    });
});
exports.default = router;
