import User from '../models/UserModel.js';
import Profile from '../models/profileModel.js';

//Create new Profile
export const createProfile = async (req, res) => {
    const userId = req.user.id;

    try {
        const { name, icon } = req.body;
        
        //validation: check for missing fields
        if (!name || !icon) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        //check if profile with same name already exists for this user
        const existingProfile = await Profile.findOne({ userId, name });
        if (existingProfile) {
            return res.status(400).json({ message: 'Profile with this name already exists' });
        }

        const newProfile = new Profile({
            userId,
            name,
            icon,
        });

        const savedProfile = await newProfile.save();
        res.status(201).json(savedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error creating profile:', error: error.message });
    }
};

//Get All Profiles (for login)
export const getAllProfiles = async (req, res) => {
    const userId = req.user.id;

    try {
        const profiles = await Profile.find({ userId });
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profiles:', error: error.message });
    }
};

//update Profile
export const updateProfile = async (req, res) => {
    const userId = req.user.id;
    const profileId = req.params.id;

    try {
        // Find the profile to update
        const profile = await Profile.findOneAndUpdate({"userId": userId, "_id": profileId}, req.body);
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile:', error: error.message });
    }   
};

//Delete Profile
export const deleteProfile = async (req, res) => {
    try {
        await Profile.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting profile:', error: error.message });
    }
};