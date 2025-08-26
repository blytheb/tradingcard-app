import admin from "../config/firebaseAdmin.js";

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({ message: "No token provided!"})
    }

    const token = authHeader.split(" ")[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // now contains uid, email, etc.
        next();
    } catch (error) {
        console.error("Token verification failed: ", error);
        return res.status(403).json({ message: "Invalid or expired token"})
    }
}