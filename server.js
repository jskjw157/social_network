import express from "express";
import connectDB from "./config/db.js";

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
