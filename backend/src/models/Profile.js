import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userUid: {type: String, required: true }, //Firebase UID
    name: { type: String, required: true},
    avatarUrl: { type: String, required: true},
    isKid: { type: Boolean, default: false}
    }, {timestamps: true}
);

export default  mongoose.model("Profile", profileSchema);