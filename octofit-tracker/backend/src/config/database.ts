import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

export const connectDatabase = async () => {
  console.log('Connecting to MongoDB...', MONGO_URI);
  return mongoose.connect(MONGO_URI);
};

export default mongoose;
