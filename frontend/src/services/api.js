import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.API_URL,
});

//create profiles
export const createProfile = async (profileData, token) => {
    const res = await API.post("/profiles", profileData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
}

//get profiles
export const getProfiles = async (token) => {
    const res = await API.get("/profiles", {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
}

