import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import { connectDB } from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

//testroutes
app.use("/api", testRoutes);

//app routes
app.use("/profiles", profileRoutes);

connectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on ${PORT}`);
    });
}).catch (err => console.error("DB connection error: ", err));
