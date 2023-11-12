import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
   try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      console.log(`MongoDB Connected ${process.env.PORT}`);
   } catch (error) {
      console.warn(error);
      throw new error();
   }
};

export default connectDb