import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},    
    name: {type: String, required: true},
    icon: {type: String, required: true},
}, {timestamps: true});


export default mongoose.model('Profile', ProfileSchema);