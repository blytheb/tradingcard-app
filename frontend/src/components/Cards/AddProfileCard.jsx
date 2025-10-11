import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function AddProfileCard() {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="w-20 h-20 flex items-center justify-center border-2 border-gray-500 rounded-full group-hover:border-black transition">
        <HiOutlinePlus size={48} className="text-gray-400 group-hover:text-black transition" />
      </div>
      <p className="mt-4 text-gray-400 group-hover:text-black">Add Profile</p>
    </div>
  );
}