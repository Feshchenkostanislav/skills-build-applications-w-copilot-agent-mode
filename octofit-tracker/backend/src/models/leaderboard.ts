import mongoose, { Document, Schema } from 'mongoose';

export interface LeaderboardDocument extends Document {
  rank: number;
  userName: string;
  teamName: string;
  score: number;
  period: string;
}

const leaderboardSchema = new Schema<LeaderboardDocument>({
  rank: { type: Number, required: true },
  userName: { type: String, required: true },
  teamName: { type: String, required: true },
  score: { type: Number, required: true },
  period: { type: String, required: true, default: 'weekly' },
});

export const Leaderboard = mongoose.model<LeaderboardDocument>('Leaderboard', leaderboardSchema);
