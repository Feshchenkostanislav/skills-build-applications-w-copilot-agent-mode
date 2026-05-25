"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const teams = await models_1.Team.find().populate('members', 'name email role');
    res.json({ teams });
});
router.post('/', async (req, res) => {
    const team = await models_1.Team.create(req.body);
    res.status(201).json({
        message: 'Team created',
        team,
    });
});
router.get('/:id', async (req, res) => {
    const team = await models_1.Team.findById(req.params.id).populate('members', 'name email role');
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }
    res.json({ team });
});
exports.default = router;
