import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRouter from './routes/user.router.js';

config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRouter);

connectDB();
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
