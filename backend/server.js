import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();

// Middleware to handle cors
app.use(cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});