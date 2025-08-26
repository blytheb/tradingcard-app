import express from "express";
import admin from "../config/firebaseAdmin.js";

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

//test firebase admin
router.get("/test-firebase", async (req, res) => {
    try {
        const userList = await admin.auth().listUsers(1);//get one user
        res.json({
            message: "Firebase admin connect!",
            testUser: userList.users[0] || "No users Yet!",
        });
    } catch (error) {
        console.error("Firebase test failed", error);
        res.status(500).json({
            message:"Firebase Connection failed"
        })
    }
})

//test token verification middleware
router.get("/test-token", verifyToken, (req, res) => {
    try {
        res.json({
            message: "You are authorized!",
            user: req.user //comes from firebase token
        })
    } catch (error) {
        console.error("token verification test failed", error);
        res.status(500).json({
            message:"token verification failed"
        })
    }
})

export default router;