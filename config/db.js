import mongoose from "mongoose";

// const MONGO_URL = process.env.MONGO_URL;
// console.log(MONGO_URL);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sandipgpay224:sandip222@makemytrip.m8azj8k.mongodb.net/?appName=makemytrip");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("DB not connect", err.message);
    process.exit(1);
  }
};

export default connectDB;
