import express from 'express';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

// A protected route example
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});


// Route to handle Firebase token verification
router.get('/firebase', verifyToken, (req, res) => {
    res.json({ message: 'Firebase token is valid', user: req.user });
});

export default router;