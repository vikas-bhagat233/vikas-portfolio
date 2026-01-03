import express from "express";
import { submitContact } from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		success: true,
		message: "Contact endpoint is live. Use POST /api/contact to submit messages."
	});
});

router.post("/", submitContact);

export default router;
