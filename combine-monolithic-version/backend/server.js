const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://combine-api.vercel.app"],
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

app.options('*', cors({
  origin: ["http://localhost:3000", "https://combine-api.vercel.app"],
  methods: ["POST", "GET", "OPTIONS"],
  credentials: true,
}));

app.post('/auth/login', (req, res) => {
  res.send('Login successful');
});

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
