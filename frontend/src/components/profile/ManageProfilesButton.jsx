import React from 'react';

export default function ManageProfilesButton() {
  const handleManageProfiles = () => {
    console.log('Toggle edit mode');
  };

  return (
    <button
      onClick={handleManageProfiles}
      className="mt-8 px-6 py-2 border border-white rounded hover:bg-gray-700"
    >
      Manage Profiles
    </button>
  );
}
