import { Router } from 'express';
import { Activity } from '../models';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await Activity.find().sort({ date: -1 }).limit(50).populate('user', 'name email');
  res.json({ activities });
});

router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json({
    message: 'Activity logged',
    activity,
  });
});

export default router;
