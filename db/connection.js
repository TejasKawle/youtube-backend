import dotenv from "dotenv";
dotenv.config(); 

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI); 
    if (!process.env.MONGODB_URI) {
      throw new Error(".env variable MONGODB_URI is missing!");
    }

    const db = await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected! DB HOST:", db.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
