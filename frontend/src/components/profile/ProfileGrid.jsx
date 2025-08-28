import React from 'react';
import ProfileCard from '../profile/ProfileCard';
import AddProfileCard from "../profile/AddProfileCard";

export default function ProfileGrid({ profiles, onSelectProfile }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSelect={() => onSelectProfile(profile)}
        />
      ))}
      <AddProfileCard />
    </div>
  );
}
