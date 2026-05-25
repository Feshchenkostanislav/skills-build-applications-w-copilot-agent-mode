"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const workouts = await models_1.Workout.find();
    res.json({ workouts });
});
router.post('/', async (req, res) => {
    const workout = await models_1.Workout.create(req.body);
    res.status(201).json({
        message: 'Workout created',
        workout,
    });
});
exports.default = router;
