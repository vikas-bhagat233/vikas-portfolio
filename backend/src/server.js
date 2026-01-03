import express from "express";
import cors from "cors";
import "./config/env.js";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectsRoutes);

// Error handler
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Backend running on http://localhost:${PORT}`)
);
