const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const connectDB = require("./config/db");
const connectDB = require('./config/db');

const authRoutes = require("./routes/authRoutes");

const appointmentRoutes = require("./routes/appointment");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});