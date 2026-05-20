"use client";

import { useState } from "react";

const UpdateProfile = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted!");
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      
      {/* Open Button */}
        <button onClick={() => setOpen(true)} className='cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm w-full text-center bg-[#02bbb8] text-black py-2 font-semibold mt-5'> Upgate Profile</button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          <div className="bg-[#010f18] border border-white/30 max-w-md md:rounded-2xl p-6 shadow-xl relative">
            
            {/* Close Button */}
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
              
              {/* Input 1 */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-white/30 rounded-lg px-4 py-3 outline-none focus:border-[#09d4d1]"
              />

              {/* Input 2 */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-white/30 rounded-lg px-4 py-3 outline-none focus:border-[#09d4d1]"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-[#00c7c4] text-black py-3 rounded-lg hover:bg-[#09d4d1] transition text-sm font-semibold"
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