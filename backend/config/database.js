import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectioInstant = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB Connected !! DB HOST:${connectioInstant.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection Faild: ", error);
    process.exit(1);
  }
};

export default connectDB;
