import React from "react";

export default function ProfileCard({ name, image }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="w-32 h-32 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
      <p className="mt-4 text-gray-400 group-hover:text-white">{name}</p>
    </div>
  );
}
