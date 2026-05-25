"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const activities = await models_1.Activity.find().sort({ date: -1 }).limit(50).populate('user', 'name email');
    res.json({ activities });
});
router.post('/', async (req, res) => {
    const activity = await models_1.Activity.create(req.body);
    res.status(201).json({
        message: 'Activity logged',
        activity,
    });
});
exports.default = router;
