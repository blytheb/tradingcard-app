//state owner

import ProfileGrid from '../components/profile/ProfileGrid';
import AddProfileModal from '../components/profile/AddProfileModel';
import ManageProfilesButton from '../components/profile/ManageProfilesButton';
import TestAuth from "../components/test/TestAuth"

import { useState } from 'react';
// import { useProfile } from '../hooks/useProfile';
import { useNavigate } from 'react-router';

export default function ProfileSelectorPage() {
  const profilesData = [
    { id: 1, name: 'Blythe', avatar: 'https://robohash.org/1?200x200', isKid: false },
    { id: 2, name: 'Junior', avatar: 'https://robohash.org/2?200x200', isKid: true },
    // ...more profiles
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);  
  // const {setProfile} = useProfile();
  const [profiles, setProfiles] = useState(profilesData);
  const navigate = useNavigate();

  const handleAddProfile = (newProfile) => {
    setProfiles([...profilesData, newProfile]);
    console.log("profiles after add", profiles);
    setIsModalOpen(false);
  }

  const handleSelectProfile = (profile) => {
    console.log('Selected profile:', profile);
    setProfiles(profile);
    navigate("/home");
    // Navigate to main app/dashboard
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <TestAuth />
      <h1 className="text-3xl mb-8">Who’s watching?</h1>
      <ProfileGrid 
        profiles={profiles}
        onSelectProfile={handleSelectProfile}
        onAdd={() => setIsModalOpen(true)}
      />
      <AddProfileModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddProfile}
      />
      <ManageProfilesButton />
    </div>
  );
}
