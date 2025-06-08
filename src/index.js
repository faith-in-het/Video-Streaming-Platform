import mongoose from "mongoose";
import { DB_NAME} from "./constants.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config({
    path: "./config.env"
});

import connectDB from "./db/index.js";

connectDB()
.then(() => {
    app.on("error", (err) => { //this is to handle any error that occurs after MongoDB is connected
        console.error("Error connecting to MongoDB:", err);
        throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch(err => { // this is to handle any error that occurs if mongoDB didn't connect
    console.error("Failed to connect to MongoDB:", err);
}); 



















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