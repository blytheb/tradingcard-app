import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
    createProfile,
    getAllProfiles,
    updateProfile,
    deleteProfile,
} from '../controllers/profileController.js';

const router = express.Router();

router.post('/new', protect, createProfile);
router.get('/getAllProfiles', protect, getAllProfiles);
router.put('/:id', protect, updateProfile);
router.delete('/:id', protect, deleteProfile);

export default router;