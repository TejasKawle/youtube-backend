import dotenv from "dotenv";
dotenv.config({ path: "./.env" });


import connectDB from "../db/connection.js";

connectDB();

// Your server code here
