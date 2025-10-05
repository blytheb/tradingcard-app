import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import verifyToken from './middleware/authMiddleware.js';
import path from 'path';

import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Middleware to handle cors that passes preflight
app.use(cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

app.use(express.json());

//routes
app.get("/", (req, res) => {res.send("API is running...")});
app.get("/api", verifyToken, (req, res) => {
    res.json({ message: "Welcome to the Firebase Auth API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});