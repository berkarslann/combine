import express from "express";
import mongoose from "mongoose";
import path from 'path';
import bodyParser from "body-parser";
import cors from 'cors';

import authRoutes from './routes/auth.js';
import feedRoutes from './routes/feed.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/feed', feedRoutes);

const PORT = 3000;



try {
  await mongoose.connect("mongodb+srv://berkkarsln:denova123@cluster0.lntlglg.mongodb.net/?retryWrites=true&w=majority");
  console.log("MongoDB bağlantısı başarılı");
  app.listen(PORT);
} catch (err) {
  console.error("MongoDB bağlantısı başarısız:", err);
}
