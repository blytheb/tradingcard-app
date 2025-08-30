import React from 'react'
import { logout } from "../firebase";
import { useProfile } from './useProfile';
import { useNavigate } from 'react-router';

export const useLogout = () => {
    const {setProfile} = useProfile();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            //signout from firebase
            await logout();

            //clear selected profile from storage
            setProfile(null);

            //redirect to login page
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    }

  return handleLogout;
};