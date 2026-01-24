const router = require("express").Router();
const Appointment = require("../models/Appointment");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  const appointment = new Appointment({
    userId: req.user.id,
    service: req.body.service,
    date: req.body.date,
  });
  await appointment.save();
  res.send("Appointment Booked");
});

module.exports = router;
