import mongoose, { Document, Schema } from 'mongoose';

export interface WorkoutDocument extends Document {
  name: string;
  description: string;
  durationMinutes: number;
  intensity: 'low' | 'medium' | 'high';
  exercises: Array<{ name: string; reps: string }>;
}

const workoutSchema = new Schema<WorkoutDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  intensity: { type: String, required: true, enum: ['low', 'medium', 'high'] },
  exercises: [
    {
      name: { type: String, required: true },
      reps: { type: String, required: true },
    },
  ],
});

export const Workout = mongoose.model<WorkoutDocument>('Workout', workoutSchema);
