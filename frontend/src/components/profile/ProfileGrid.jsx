//display only

import ProfileCard from '../profile/ProfileCard';

export default function ProfileGrid({ profiles, onSelectProfile, onAdd }) {

  console.log("profile grid", profiles)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSelect={() => onSelectProfile(profile)}
        />
      ))}
      {/** Add profile & less than 4 profiles in grid */}
      { profiles.length < 4 && (
        <div
          onClick={onAdd}
          className="flex flex-col items-center justify-center w-24 h-24 cursor-pointer border-2 border-dashed border-white rounded-full hover:bg-gray-800 transition-all duration-200"
        >
          <span className="text-3xl font-bold">+</span>
          <span className="text-sm mt-2">Add Profile</span>
        </div>
      )}
    </div>
  );
}
