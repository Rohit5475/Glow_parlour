const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/beauty");

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
app.use("/api/auth", require("./routes/auth"));
