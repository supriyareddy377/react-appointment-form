const nodemailer = require("nodemailer");

const sendEmail = async (name, phone, email, message) => {
  console.log("sendEmail function called");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "supriyareddykotha2206@gmail.com",
      subject: "New Appointment Booking",
      html: `<h3>New Appointment</h3>
             <p>Name: ${name}</p>
             <p>Phone: ${phone}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`
    });

    console.log("Email sent successfully");

  } catch (error) {
    console.log("Email error:", error);
  }
};

module.exports = sendEmail;