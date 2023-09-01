import { logger } from '@/utils/contants';
import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/manager');
    logger('Connect successfully!!', 'log');
  } catch (error) {
    console.log(error);
  }
};

export { connectDb };
