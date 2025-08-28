import React from 'react';

export default function AddProfileCard() {
  const handleAddProfile = () => {
    console.log('Open add profile modal');
  };

  return (
    <div
      onClick={handleAddProfile}
      className="flex flex-col items-center justify-center w-24 h-24 cursor-pointer border-2 border-dashed border-white rounded-full hover:bg-gray-800 transition-all duration-200"
    >
      <span className="text-3xl font-bold">+</span>
      <span className="text-sm mt-2">Add Profile</span>
    </div>
  );
}
