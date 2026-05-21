import React from 'react';
import UpdateProfile from './UpdateProfile';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const MyProfile = () => {
    const { data } = authClient.useSession();
    console.log(data?.user?.image)

    return (
        <div className='max-w-md bg-[#031E29] rounded-2xl border border-white/15 p-8 shadow-xl shadow-cyan-500/20 mt-2'>
            <div className='flex gap-4 items-center'>
                <div className='w-18 aspect-square rounded-full bg-pink-600 text-center content-center text-4xl font-medium shadow-md shadow-cyan-500/50'>
                    <Image 
                        width={72}
                        height={72}
                        src={data?.user?.image || 'user.jpg'}
                        alt='User image'
                        className=' w-18 aspect-square rounded-full'
                    />
                </div>
                <div>
                    <h3 className='text-xl font-bold'>{data?.user?.name}</h3>
                    <p className='flex items-center gap-1 text-sm text-muted'>{data?.user?.email}</p>
                </div>
            </div>
            <UpdateProfile />
        </div>
    );
};

export default MyProfile;