import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) throw new Error("MONGO_URI missing");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => {
        console.log("✅ Database connected successfully");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ Database connection failed:", err);
        throw err;
      });
  }


  cached.conn = await cached.promise;
  return cached.conn
}

export default connectDB;
