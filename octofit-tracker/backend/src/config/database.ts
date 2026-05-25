import mongoose from 'mongoose';
import { MONGO_URI as CONFIG_MONGO_URI } from '../config';

export const DEFAULT_MONGO_URI = 'mongodb://localhost:27017/octofit_db';
export const MONGO_URI = CONFIG_MONGO_URI ?? DEFAULT_MONGO_URI;

export const connectDatabase = async () => {
  console.log('Connecting to MongoDB...', MONGO_URI);
  return mongoose.connect(MONGO_URI);
};

export default mongoose;
