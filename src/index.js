import mongoose from "mongoose";
import { DB_NAME} from "./constants.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config({
    path: "./config.env"
});

import connectDB from "./db/index.js";

connectDB(); 



















/*const app = express();

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error("Error connecting to MongoDB:", err);
            throw err;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch(err){
        console.error("Failed to connect to MongoDB:", err);
        throw err;
    }
})()*/