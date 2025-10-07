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
    const { email, password } = req.body;

    //validation: check for missing fields
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        //check if user exists
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            id: user._id,
            user, 
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in:', error: error.message });
    }  
};

//update Profile
export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const { fullName, email, password, profileImageUrl } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if they are provided in the request body
        if (fullName) user.fullName = fullName;
        if (email) user.email = email;
        if (password) user.password = password; // Assume password will be hashed in pre-save hook
        if (profileImageUrl) user.profileImageUrl = profileImageUrl;

        const updatedUser = await user.save();
        res.status(200).json({
            message: 'User updated successfully',
            updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user:', error: error.message });
    }
};

//Delete Profile
export const deleteProfile = async (req, res) => {
    const { id } = req.params;
};