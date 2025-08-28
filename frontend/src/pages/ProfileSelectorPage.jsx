import React, { useState } from 'react';
import ProfileGrid from '../components/profile/ProfileGrid';
import ManageProfilesButton from '../components/profile/ManageProfilesButton';

const profilesData = [
  { id: 1, name: 'Blythe', avatar: 'https://robohash.org/1?200x200', isKid: false },
  { id: 2, name: 'Junior', avatar: 'https://robohash.org/2?200x200', isKid: true },
  // ...more profiles
];

export default function ProfileSelectorPage() {
  const [profiles, setProfiles] = useState(profilesData);

  const handleSelectProfile = (profile) => {
    console.log('Selected profile:', profile);
    // Navigate to main app/dashboard
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl mb-8">Who’s watching?</h1>
      <ProfileGrid profiles={profiles} onSelectProfile={handleSelectProfile} />
      <ManageProfilesButton />
    </div>
  );
}
