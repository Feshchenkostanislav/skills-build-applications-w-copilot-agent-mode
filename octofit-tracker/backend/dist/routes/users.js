"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const users = await models_1.User.find().sort({ joinedAt: -1 });
    res.json({ users });
});
router.post('/', async (req, res) => {
    const user = await models_1.User.create(req.body);
    res.status(201).json({
        message: 'User created',
        user,
    });
});
router.get('/:id', async (req, res) => {
    const user = await models_1.User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
});
exports.default = router;
