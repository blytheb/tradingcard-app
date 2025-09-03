//form for new profile

import { useState } from "react";

export default function AddProfileModal({ isOpen, onClose, onSave }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isKid, setIsKid] = useState(false);

  // Predefined avatars (replace with your own assets later if needed)
  const avatarOptions = [
    "https://i.pravatar.cc/100?u=1",
    "https://i.pravatar.cc/100?u=2",
    "https://i.pravatar.cc/100?u=3",
    "https://i.pravatar.cc/100?u=4",
    "https://i.pravatar.cc/100?u=5",
    "https://i.pravatar.cc/100?u=6",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Profile name is required!");
      return;
    }
    if (!avatar) {
      alert("Please select an avatar!");
      return;
    }

    onSave({ name, avatar, isKid });

    // Reset state
    setName("");
    setAvatar(null);
    setIsKid(false);
  };

  return (
    <dialog id="add_profile_modal" className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box bg-base-200 p-6 rounded-2xl max-w-lg">
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
                  onClick={() => setAvatar(url)}
                  className={`rounded-full border-2 p-1 transition ${
                    avatar === url ? "border-primary" : "border-transparent"
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
