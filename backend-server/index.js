// backend-server/index.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Idagdag mo ito para mabasa ang process.env sa local

const app = express();
app.use(express.json());

// UPDATE: Gawing mas specific ang CORS para sa security
app.use(
  cors({
    origin: [
      "https://michael-joseph-ojeda.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["POST"],
  }),
);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Dagdag ka ng GET route para ma-check kung "Live" talaga ang server
app.get("/", (req, res) => res.send("Backend is Running!"));

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
    console.error("NODEMAILER ERROR:", error); // Importante para sa Render logs
    res.status(500).json({ success: false, error: error.message });
  }
});

// UPDATE: Render uses dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
