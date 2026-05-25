import { Router } from 'express';
import { Team } from '../models';

const router = Router();

router.get('/', async (_req, res) => {
  const teams = await Team.find().populate('members', 'name email role');
  res.json({ teams });
});

router.post('/', async (req, res) => {
  const team = await Team.create(req.body);
  res.status(201).json({
    message: 'Team created',
    team,
  });
});

router.get('/:id', async (req, res) => {
  const team = await Team.findById(req.params.id).populate('members', 'name email role');

  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }

  res.json({ team });
});

export default router;
