'use client';

import { useState } from "react";
import MyBookings from "./MyBookings";
import MyProfile from "./MyProfile";

const Toggle = () => {
    const [isProfile, setIsProfile] = useState(false);
    return (
        <div>
            <div className='bg-[#102D38] rounded-xl inline-block p-1 text-sm font-medium text-white mt-6'>
                <button onClick={() => setIsProfile(false)} className={`px-3 py-1 rounded-xl duration-300 cursor-pointer ${!isProfile ? ' bg-[#010F18]' : 'text-white/50'}`}>My Bookings</button>
                <button onClick={() => setIsProfile(true)} className={`px-3 py-1 rounded-xl duration-300 cursor-pointer ${isProfile ? ' bg-[#010F18]' : 'text-white/50'}`}>My Profile</button>
            </div>

            <div className="mt-4">
                {
                    isProfile ? <MyProfile /> : <MyBookings />
                }
            
            </div>
        </div>
    );
};

export default Toggle;