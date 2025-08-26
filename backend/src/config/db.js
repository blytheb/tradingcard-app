import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
    try {
        //mongoose.set("strictQuery", true); what this do?
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY!")
    } catch (error) {
        console.error("Error in connectDB", error);
        process.exit(1); // exit with failure
    }
}