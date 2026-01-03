import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const savedMessage = await Contact.create({
      name,
      email,
      message
    });

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
