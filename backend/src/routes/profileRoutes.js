import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { createProfile,
    getAllProfiles,
    deleteProfile
 } from "../controllers/profileController.js";

const router = express.Router();

router.post("/", verifyToken, createProfile);
router.get("/", verifyToken, getAllProfiles);
router.delete("/:id", verifyToken, deleteProfile);


export default router;