import mongoose, { Document, Schema, Types } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
  role: 'member' | 'captain' | 'admin';
  joinedAt: Date;
  team?: Types.ObjectId;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ['member', 'captain', 'admin'], default: 'member' },
  joinedAt: { type: Date, required: true, default: () => new Date() },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
});

export const User = mongoose.model<UserDocument>('User', userSchema);
