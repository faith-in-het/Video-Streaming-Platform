import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Connected to MongoDB !! DB HOST:`);
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); // Exit the process with failure   
    }
}

export default connectDB;