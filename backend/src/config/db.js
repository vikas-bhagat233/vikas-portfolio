import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbName = process.env.DB_NAME || "portfolio";
    await mongoose.connect(process.env.MONGO_URI, { dbName });
    console.log(`✅ MongoDB Atlas Connected (db: ${dbName})`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
