import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/db.js";
import userRoutes from "../routes/userRoutes.js";

dotenv.config();

// Connect to DB once
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/users", userRoutes);

// ❌ REMOVE app.listen()
// ✅ Instead export the app for Vercel
export default app;
