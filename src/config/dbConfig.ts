import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.DB_URI).then((data) => {
      console.log("Connected to database");
    });
  } catch (error) {
    console.error(`Error connecting to database: ${(error as Error).message}`);
    process.exit(1);
  }
};
export default connectDB;
