import Profile from "../models/Profile.js";

//create profiles
export async function createProfile(req, res) {
    try {
        const { name, age, avatarUrl } = req.body;

        const newProfile = Profile.create({
            parentUid: req.user.uid,
            name,
            age,
            avatarUrl,
        });
        res.status(201).json( newProfile );
    } catch (error) {
        console.log("error in create profile", error);
        res.status(500).json({message: "Error creating profile: ", error});
    }
}

//Get all profiles for logged in account
export async function getAllProfiles(req, res) {
    try {
        const allProfiles = await Profile.find({ parentUid: req.user.uid})
        res.json(allProfiles);
    } catch (error) {
        res.status(500).json({message: "Error getting all profiles: ", error})
    }
}

//Update?

//Delete a profile
export async function deleteProfile(req, res) {
    try {
        const {id} = req.params;
        const foundProfile = await Profile.findOneAndDelete({ _id: id, parentUid: req.user.uid});

        if (!foundProfile){
            return res.status(404).json({message: "Profile Not Found"});
        }
        res.json({message: "Profile has deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error deleting profile: ", error});
    }
    
}