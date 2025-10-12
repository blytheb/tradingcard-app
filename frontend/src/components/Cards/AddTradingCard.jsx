import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function AddTradingCard() {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="w-20 h-30 flex items-center justify-center border-2 border-gray-500 rounded-lg group-hover:border-black transition">
        <HiOutlinePlus size={48} className="text-gray-400 group-hover:text-black transition" />
      </div>
    </div>
  );
}