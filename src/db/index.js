import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstace = mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connect !! DB Host : ${(await connectionInstace).connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB Connection Failed: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
