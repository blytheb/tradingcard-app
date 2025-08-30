import React from 'react';
import { Link } from 'react-router';

export default function ProfileCard({ profile, onSelect }) {
  return (
    <Link
      onClick={onSelect}
      to={'/home'}
      className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all duration-200"
    >
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-24 h-24 rounded-full mb-2 border-2 border-white"
      />
      <span className="text-lg">{profile.name}</span>
      {profile.isKid && <span className="text-sm text-blue-400">Kid</span>}
    </Link>
  );
}
