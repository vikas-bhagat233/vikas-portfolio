import mongoose from "mongoose";

let databaseConnected = false;

const connectDB = async () => {
  try {
    const dbName = process.env.DB_NAME || "portfolio";
    await mongoose.connect(process.env.MONGO_URI, { dbName });
    databaseConnected = true;
    console.log(`✅ MongoDB Atlas Connected (db: ${dbName})`);
    return true;
  } catch (error) {
    console.error("❌ MongoDB Connection Failed", error);
    databaseConnected = false;
    return false;
  }
};

export const isDatabaseConnected = () => databaseConnected;

export default connectDB;
