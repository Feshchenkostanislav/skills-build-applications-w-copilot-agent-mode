import mongoose, { Document, Schema, Types } from 'mongoose';

export interface TeamDocument extends Document {
  name: string;
  description: string;
  createdAt: Date;
  members: Types.ObjectId[];
}

const teamSchema = new Schema<TeamDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: () => new Date() },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export const Team = mongoose.model<TeamDocument>('Team', teamSchema);
