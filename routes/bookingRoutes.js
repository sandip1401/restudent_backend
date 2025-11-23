import express from "express";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/book_table", async (req, res) => {
  try {
    const { name, email, date, time, guests } = req.body;
    // Here you save to MongoDB (example only)
    //await Booking.create({ name, email, date, time, guests });

    //Email message
    const subject = "New Table Booking";
    const message = `New Booking Details:
            Name:${name}
            Email:${email}
            Date:${date}
            Time:${time}
            Guests:${guests}`;
    await sendEmail(subject, message, process.env.OWNER_EMAIL);
    // 2. Email confirmation to User
    const userSubject = "Table Booking Confirmation";
    const userMessage = `Hello ${name},

Your table has been booked successfully!

Booking Details:
Date: ${date}
Time: ${time}
Guests: ${guests}

Thank you for choosing our service!`;

    await sendEmail(userSubject, userMessage, email);

    res
      .status(200)
      .json({ message: "Booking Created and Emails Sent Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
