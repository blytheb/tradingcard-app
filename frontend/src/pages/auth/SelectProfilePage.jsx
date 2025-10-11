import React from 'react'
import ProfileCard from '../../components/Cards/ProfileCard'
import AddProfileCard from '../../components/Cards/AddProfileCard'

const profiles = [
  { name: "Blythe", image: "https://robohash.org/1/200x200" },
  { name: "Sam", image: "https://robohash.org/2/200x200" },
  { name: "Alex", image: "https://robohash.org/3/200x200" },
];

const SelectProfilePage = () => {
return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray">
      <h1 className="text-4xl md:text-5xl font-semibold mb-12">Who's watching?</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {profiles.map((p) => (
          <ProfileCard key={p.name} name={p.name} image={p.image} />
        ))}
        <AddProfileCard />
      </div>

      <button className="mt-12 border border-gray-400 px-6 py-2 text-gray-300 hover:text-white hover:border-white transition">
        Manage Profiles
      </button>
    </div>
  );
}

export default SelectProfilePage