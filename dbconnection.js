import mongoose from "mongoose";
import "dotenv/config";

const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Db connected successfully");
  } catch (error) {
    console.log("error occured while connecting Db", error);
  }
};
export default dbConnection;
