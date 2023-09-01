import express from 'express';
import cors from 'cors';
import { connectDb } from './database';
import dotenv from 'dotenv';
import useRouter from './routes';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Epressjs with api!');
});

app.listen(PORT, () => {
  return console.log(`Express is listening at ${PORT}`);
});

useRouter(app);
connectDb();
