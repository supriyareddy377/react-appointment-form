const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");
const sendEmail = require("../utils/sendEmail");
const sendSMS = require("../utils/sendSMS");

router.post("/appointment", async (req, res) => {

  try {

    console.log("API HIT");

    const { name, phone, email, message } = req.body;

    const newAppointment = new Appointment({
      name,
      phone,
      email,
      message
    });

    await newAppointment.save();

// ✅ Send response immediately
res.json({
  success: true,
  message: "Appointment saved successfully"
});

// 🚀 Run Email in background
sendEmail(name, phone, email, message)
  .then(() => console.log("Email sent"))
  .catch(err => console.log("Email error:", err));

// 🚀 Run SMS in background
sendSMS(name, phone, email, message)
  .then(() => console.log("SMS sent"))
  .catch(err => console.log("SMS error:", err));

  } catch (error) {

    console.log("Server Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});

module.exports = router;