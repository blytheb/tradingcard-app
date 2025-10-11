import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const CardSchema = new mongoose.Schema({
    ownerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    cardFrameUrl: {type: String, required: true, default: null},
    cardImageUrl: {type: String, required: true, default: null},
}, {timestamps: true});


export default mongoose.model('Card', CardSchema);