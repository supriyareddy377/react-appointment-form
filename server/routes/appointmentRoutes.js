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

    console.log("Saved to MongoDB");

    // Send Email
    await sendEmail(name, phone, email, message);

    console.log("Email sent");

    // Send SMS
    
   console.log("Calling SMS Function");

await sendSMS(name, phone, email, message);

console.log("SMS Function Finished");

    console.log("SMS sent");

    res.json({
      success: true,
      message: "Appointment saved successfully"
    });

  } catch (error) {

    console.log("Server Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});

module.exports = router;