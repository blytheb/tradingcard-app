import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},    
    profileName: {type: String, required: true},
    profileImageUrl: {type: String, default: null},
}, {timestamps: true});


export default mongoose.model('Profile', ProfileSchema);