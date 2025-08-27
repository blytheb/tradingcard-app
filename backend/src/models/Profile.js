import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    parentUid: {type: String, required: true }, //Firebase UID
    name: { type: String, required: true},
    age: Number,
    avatarUrl: String,
    }, {timestamps: true}
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;