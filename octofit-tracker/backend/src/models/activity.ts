import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ActivityDocument extends Document {
  user: Types.ObjectId;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  distanceKm: number;
  date: Date;
}

const activitySchema = new Schema<ActivityDocument>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  distanceKm: { type: Number, required: true },
  date: { type: Date, required: true, default: () => new Date() },
});

export const Activity = mongoose.model<ActivityDocument>('Activity', activitySchema);
