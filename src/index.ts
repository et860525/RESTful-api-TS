import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URL as string)
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connect to Database'));

app.use(express.json());

import postRouter from './routes/post'
app.use('/posts', postRouter);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});