import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

/**
 * GET /api/contact
 * Health check
 */
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Contact endpoint is live. Use POST /api/contact to submit messages."
  });
});

/**
 * POST /api/contact
 * Save contact message
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const saved = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (err) {
    console.error("CONTACT POST ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
