import express from 'express';
import { router } from './routes';
import mongoose from 'mongoose'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect('mongodb://127.0.0.1:27017/aula13')

app.listen(3000);
