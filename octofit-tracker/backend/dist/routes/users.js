"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({
        users: [
            {
                id: 'user-1',
                name: 'Demo User',
                email: 'demo@octofit.app',
                role: 'member',
            },
        ],
    });
});
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'User created',
        user: req.body,
    });
});
router.get('/:id', (req, res) => {
    res.json({
        user: {
            id: req.params.id,
            name: 'Demo User',
            email: 'demo@octofit.app',
            role: 'member',
        },
    });
});
exports.default = router;
