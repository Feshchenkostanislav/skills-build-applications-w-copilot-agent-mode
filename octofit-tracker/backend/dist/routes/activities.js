"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({
        activities: [
            {
                id: 'activity-1',
                type: 'running',
                durationMinutes: 45,
                caloriesBurned: 420,
            },
        ],
    });
});
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Activity logged',
        activity: req.body,
    });
});
exports.default = router;
