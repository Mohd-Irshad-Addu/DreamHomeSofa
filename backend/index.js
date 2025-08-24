import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Review from "./models/Review.js";

import nodemailer from "nodemailer";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// GET all reviews from MongoDB
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find(); // MongoDB se sab reviews fetch
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new review to MongoDB
app.post("/api/reviews", async (req, res) => {
  // console.log("incoming body", req.body) //for test
  // res.json({received: req.body })
  const review = new Review({
    name: req.body.name,
    rating: req.body.rating,
    review: req.body.review,
  });

  try {
    const newReview = await review.save(); // MongoDB me save
    res.status(201).json(newReview); // front-end ko bhej do
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// POST: send consultation email
app.post("/api/send-email", async (req, res) => {
  const { name, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "irshadutkoori@gmail.com", // 👈 jaha receive karna hai
      subject: "New Sofa Consultation Request",
      html: `
        <h2>New Consultation Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});
