const nodemailer = require("nodemailer");

const sendEmail = async (name, phone, email, message) => {
    console.log("sendEmail function called");

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "supriyareddy377@gmail.com",
        pass: "imnudjsgyawprxju"
      }
    });

    const mailOptions = {

      from: "supriyareddy377@gmail.com",
      to: "supriyareddykotha2206@gmail.com",
      subject: "New Appointment Booking",

      html: `
      
      <div style="background:#f4f6fb;padding:40px;font-family:Arial">

        <div style="
          max-width:500px;
          margin:auto;
          background:#ffffff;
          padding:30px;
          border-radius:12px;
          box-shadow:0 6px 25px rgba(0,0,0,0.2);
        ">

          <h2 style="
            text-align:center;
            color:#578723;
            margin-bottom:25px;
          ">
            New Appointment Form
          </h2>

          <p style="font-size:16px">
            <strong>Name :</strong> ${name}
          </p>

          <p style="font-size:16px">
            <strong>Phone :</strong> ${phone}
          </p>

          <p style="font-size:16px">
            <strong>Email :</strong> ${email}
          </p>

          <p style="font-size:16px">
            <strong>Message :</strong> ${message}
          </p>

        </div>

      </div>
      `
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");

  } catch (error) {

    console.log("Email error:", error);

  }

};

module.exports = sendEmail;