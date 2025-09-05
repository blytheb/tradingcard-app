//form for new profile

import { useState } from "react";

export default function AddProfileModal({ isOpen, onClose, onSave }) {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isKid, setIsKid] = useState(false);

  // Predefined avatars (replace with your own assets later if needed)
  const avatarOptions = [
    "https://robohash.org/1?200x200",
    "https://robohash.org/2?200x200",
    "https://robohash.org/3?200x200",
    "https://robohash.org/4?200x200",
    "https://robohash.org/5?200x200",
    "https://robohash.org/6?200x200",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Profile name is required!");
      return;
    }
    if (!avatarUrl) {
      alert("Please select an avatar!");
      return;
    }

    const newProfile = {name, avatarUrl, isKid };
    onSave(newProfile);
    // onSave({id: Date.now(), name, avatarUrl, isKid });

    // Reset state
    setName("");
    setAvatarUrl(null);
    setIsKid(false);
    onClose();
  };

  return (
    <dialog id="add_profile_modal" className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box bg-base-200 p-6 rounded-2xl max-w-lg text-black">
        <h2 className="text-xl font-bold mb-4">Create New Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Profile Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />

          {/* Avatar Picker Grid */}
          <div>
            <p className="mb-2 font-medium">Choose an Avatar</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {avatarOptions.map((url, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAvatarUrl(url)}
                  className={`rounded-full border-2 p-1 transition ${
                    avatarUrl === url ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={url} alt="avatar option" className="w-16 h-16 rounded-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Kid Toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isKid}
              onChange={() => setIsKid(!isKid)}
              className="checkbox checkbox-primary"
            />
            <span>Create as Kid Profile</span>
          </label>

          {/* Action Buttons */}
          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
