"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const UpdateProfile = () => {
  const [open, setOpen] = useState(false);
  const { data } = authClient.useSession();

  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
  });

  // ✅ session data আসার পর form set করা
  useEffect(() => {
    if (data?.user) {
      setFormData({
        name: data.user.name || "",
        photoUrl: data.user.image || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    const updatedData = await authClient.updateUser(formData)
    console.log(updatedData);
    
    toast.success("User info updated.");
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm w-full text-center bg-[#02bbb8] text-black py-2 font-semibold mt-5"
      >
        Update Profile
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#010f18] border border-white/30 max-w-md md:rounded-2xl p-6 shadow-xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-5 text-center">
              Update Profile
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-white/30 rounded-lg px-4 py-3 outline-none"
              />

              <label>Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                className="w-full border border-white/30 rounded-lg px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#00c7c4] text-black py-3 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;