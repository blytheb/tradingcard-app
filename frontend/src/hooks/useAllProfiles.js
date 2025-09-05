//hook to fetch/manage all profiles
import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { getProfiles, createProfile } from "../services/api";

export const useAllProfiles = () => {
    const { token } = useAuth();
    const [allProfiles, setAllProfiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if (!token) return;

        const fetchProfiles = async () => {
            setLoading(true);
            try {
                const data = await getProfiles(token);
                setAllProfiles(data);
            } catch (error) {
                console.error("Error fetching profiles", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfiles();
    }, [token]);

    const addProfile = async (profileData) => {
        if (!token) return;

        const newProfile = await createProfile(profileData, token);
        setAllProfiles((prev) => [...prev, newProfile]);
    };

    return { allProfiles, addProfile, loading};
};