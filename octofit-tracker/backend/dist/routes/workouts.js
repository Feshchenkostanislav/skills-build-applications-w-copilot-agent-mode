"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({
        workouts: [
            {
                id: 'workout-1',
                name: 'Full-Body HIIT',
                durationMinutes: 30,
                intensity: 'high',
            },
        ],
    });
});
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Workout created',
        workout: req.body,
    });
});
exports.default = router;
