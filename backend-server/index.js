// server/index.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Importante para hindi ma-block ng browser

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mikelojeda25@gmail.com",
    pass: "qbhe qgpq zbvn ekfv", // Ang App Password mo
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "mikelojeda25@gmail.com",
    subject: `Portfolio: ${subject} (from ${name})`,
    text: `Sender Email: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email Sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("Server is running on port 5000"));
