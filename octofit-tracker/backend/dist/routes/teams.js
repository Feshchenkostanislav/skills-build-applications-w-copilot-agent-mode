"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({
        teams: [
            {
                id: 'team-1',
                name: 'OctoFit Runners',
                members: 12,
            },
        ],
    });
});
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Team created',
        team: req.body,
    });
});
router.get('/:id', (req, res) => {
    res.json({
        team: {
            id: req.params.id,
            name: 'OctoFit Runners',
            members: 12,
        },
    });
});
exports.default = router;
