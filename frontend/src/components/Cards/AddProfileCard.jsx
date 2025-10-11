import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function AddProfileCard() {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="w-32 h-32 flex items-center justify-center border-2 border-gray-500 rounded-md group-hover:border-white transition">
        <HiOutlinePlus size={48} className="text-gray-400 group-hover:text-white transition" />
      </div>
      <p className="mt-4 text-gray-400 group-hover:text-white">Add Profile</p>
    </div>
  );
}