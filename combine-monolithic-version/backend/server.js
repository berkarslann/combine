import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import feedRoutes from "./routes/feed.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://combine-api.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/feed", feedRoutes);

const PORT = 3000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB bağlantısı başarılı");
    app.listen(PORT, () => {
      console.log(`Server ${PORT} numaralı portta çalışıyor`);
    });
  } catch (err) {
    console.error("MongoDB bağlantısı başarısız:", err);
  }
};

startServer();
