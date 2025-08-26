import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { connectDB } from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());

//testroutes
app.use("/api", testRoutes);

connectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on ${PORT}`);
    });
}).catch (err => console.error("DB connection error: ", err));
