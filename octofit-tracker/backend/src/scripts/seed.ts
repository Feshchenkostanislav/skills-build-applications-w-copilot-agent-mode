import mongoose from 'mongoose';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Team } from '../models/team';
import { User } from '../models/user';
import { Workout } from '../models/workout';
import { connectDatabase } from '../config/database';
import { MONGO_URI } from '../config';

// Seed the octofit_db database with test data.

const runSeed = async () => {
  console.log('Connecting to MongoDB...', MONGO_URI);
  await connectDatabase();

  console.log('Clearing existing collections...');
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  console.log('Creating sample users...');
  const users = await User.create([
    {
      name: 'Mia Carter',
      email: 'mia.carter@octofit.app',
      role: 'captain',
    },
    {
      name: 'Noah Bennett',
      email: 'noah.bennett@octofit.app',
      role: 'member',
    },
    {
      name: 'Aria Patel',
      email: 'aria.patel@octofit.app',
      role: 'member',
    },
  ]);

  console.log('Creating sample team...');
  const team = await Team.create({
    name: 'Sunrise Striders',
    description: 'A friendly crew focused on morning runs, strength conditioning, and team challenges.',
    members: users.map((user) => user._id),
  });

  console.log('Updating users with team assignment...');
  await Promise.all(
    users.map((user) =>
      User.findByIdAndUpdate(user._id, { team: team._id }, { new: true }),
    ),
  );

  console.log('Creating sample workouts...');
  const workouts = await Workout.create([
    {
      name: 'Sunrise Power Circuit',
      description: 'A high-energy circuit to build strength and endurance before breakfast.',
      durationMinutes: 35,
      intensity: 'high',
      exercises: [
        { name: 'Jump squats', reps: '3 x 15' },
        { name: 'Push-up bursts', reps: '3 x 12' },
        { name: 'Plank holds', reps: '3 x 60s' },
      ],
    },
    {
      name: 'Recovery Ride',
      description: 'A low-intensity cycling session designed for active recovery.',
      durationMinutes: 45,
      intensity: 'low',
      exercises: [
        { name: 'Steady ride', reps: '45 min' },
      ],
    },
  ]);

  console.log('Creating sample activities...');
  await Activity.create([
    {
      user: users[0]._id,
      type: 'running',
      durationMinutes: 42,
      caloriesBurned: 520,
      distanceKm: 8.2,
      date: new Date('2026-05-20T06:30:00Z'),
    },
    {
      user: users[1]._id,
      type: 'cycling',
      durationMinutes: 56,
      caloriesBurned: 610,
      distanceKm: 18.4,
      date: new Date('2026-05-21T07:45:00Z'),
    },
    {
      user: users[2]._id,
      type: 'yoga',
      durationMinutes: 50,
      caloriesBurned: 220,
      distanceKm: 0,
      date: new Date('2026-05-22T08:15:00Z'),
    },
  ]);

  console.log('Creating sample leaderboard entries...');
  await Leaderboard.create([
    {
      rank: 1,
      userName: 'Mia Carter',
      teamName: 'Sunrise Striders',
      score: 1120,
      period: 'weekly',
    },
    {
      rank: 2,
      userName: 'Noah Bennett',
      teamName: 'Sunrise Striders',
      score: 945,
      period: 'weekly',
    },
    {
      rank: 3,
      userName: 'Aria Patel',
      teamName: 'Sunrise Striders',
      score: 890,
      period: 'weekly',
    },
  ]);

  console.log('Seed complete: octofit_db now contains sample users, teams, activities, leaderboard, and workouts.');
  console.log('Users:', users.length, 'Workouts:', workouts.length);
  await mongoose.disconnect();
};

runSeed().catch((error) => {
  console.error('Seed script failed:', error);
  process.exit(1);
});
