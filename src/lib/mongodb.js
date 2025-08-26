import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please add your MONGO_URL to .env.local");
}

let isConnected = false; // connection state

export const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);

    isConnected = db.connections[0].readyState;
    console.log("✅ Successfully connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw new Error("Failed to connect to MongoDB");
  }
};
