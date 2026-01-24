const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  service: String,
  date: String,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
