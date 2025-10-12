import React from "react";

export default function TradingCard({ name, image }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="w-20 h-30 rounded-lg border-2 border-gray-500 group-hover:border-black transition">
        <img
          src={image}
          alt={name}
          className="w-full h-full bg-slate-400 text-gray-400 rounded-md group-hover:border-black transition"
        />
      </div>
    </div>
  );
}
