import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "../config/db.js";
import userRoutes from "../routes/userRoutes.js";
import paymentRoutes from "../routes/paymentRoutes.js";
import productRoutes from "../routes/productRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();
const app = express();

const allowedOrigins = [
  "https://amboutique.pk",
  "https://www.amboutique.pk",             
  "http://localhost:3000",
  "http://localhost:3001",
  "https://ecommerce-website-admin-kappa.vercel.app",
  "https://ecommerce-website-frontend-git-dev-aneesrehman89s-projects.vercel.app"
];

// CORS configuration - must be before routes
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.log("CORS blocked origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/products", productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

// Only start server if not in Vercel (Vercel handles this)
if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
