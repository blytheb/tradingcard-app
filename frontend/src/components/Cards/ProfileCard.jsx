import React from "react";

export default function ProfileCard({ name, image }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="w-20 h-20 rounded-full border-2 border-gray-500 group-hover:border-black transition">
        <img
          src={image}
          alt={name}
          className="w-full h-full bg-slate-400 text-gray-400 rounded-full group-hover:border-black transition"
        />
      </div>
      <p className="mt-4 text-gray-400 group-hover:text-black transition">{name}</p>
    </div>
  );
}
