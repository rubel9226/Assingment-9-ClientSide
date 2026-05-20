import React from 'react';
import UpdateProfile from './UpdateProfile';

const MyProfile = () => {
    return (
        <div className='max-w-md bg-[#031E29] rounded-2xl border border-white/15 p-8 shadow-xl shadow-cyan-500/20 mt-2'>
            <div className='flex gap-4 items-center'>
                <div className='w-18 aspect-square rounded-full bg-pink-600 text-center content-center text-4xl font-medium shadow-md shadow-cyan-500/50'>M</div>
                <div>
                    <h3 className='text-xl font-bold'>Md. Rubel Hossen</h3>
                    <p className='flex items-center gap-1 text-sm text-muted'>mdrubelhossen92005@gmail.com</p>
                </div>
            </div>
            <UpdateProfile />
        </div>
    );
};

export default MyProfile;