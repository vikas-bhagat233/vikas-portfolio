import { randomUUID } from "crypto";
import mongoose from "mongoose";
import Contact from "../models/Contact.js";

const localContacts = [];

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const isMongoReady = mongoose.connection.readyState === 1;
    const savedMessage = isMongoReady
      ? await Contact.create({
          name,
          email,
          message
        })
      : (() => {
          const entry = {
            _id: randomUUID(),
            name,
            email,
            message,
            createdAt: new Date(),
            updatedAt: new Date()
          };

          localContacts.push(entry);
          return entry;
        })();

    console.log("✅ Contact saved", savedMessage._id);

    res.status(201).json({
      success: true,
      data: savedMessage
    });
  } catch (error) {
    console.error("❌ Failed to save contact", error);
    res.status(500).json({ error: "Server Error" });
  }
};
