//state owner

import ProfileGrid from '../components/profile/ProfileGrid';
import AddProfileModal from '../components/profile/AddProfileModel';
import ManageProfilesButton from '../components/profile/ManageProfilesButton';
import TestAuth from "../components/test/TestAuth"

import { useState } from 'react';
import { useAllProfiles } from '../hooks/useAllProfiles';
import { useCurrentProfile } from '../hooks/useCurrentProfile';
import { useNavigate } from 'react-router';

export default function ProfileSelectorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const {allProfiles, addProfile, loading} = useAllProfiles();
  const { setCurrentProfile } = useCurrentProfile();
  const navigate = useNavigate();

  // const handleAddProfile = (newProfile) => {
  //   setAllProfiles([...profilesData, newProfile]);
  //   console.log("profiles after add", profiles);
  //   setIsModalOpen(false);
  // }

  const handleSelectProfile = (profile) => {
    console.log('Selected profile:', profile);
    setCurrentProfile(profile);
    navigate("/home");
    // Navigate to main app/dashboard
  };

  if (loading) return <p>Loading Profiles ...</p>

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <TestAuth />
      <h1 className="text-3xl mb-8">Who’s watching?</h1>
      <ProfileGrid 
        profiles={allProfiles}
        onSelectProfile={handleSelectProfile}
        onAdd={() => setIsModalOpen(true)}
      />
      <AddProfileModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addProfile}
      />
      <ManageProfilesButton />
    </div>
  );
}
