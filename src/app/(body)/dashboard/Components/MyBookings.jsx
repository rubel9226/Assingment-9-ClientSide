'use client';


import { useEffect, useState } from 'react';
import { authClient } from './../../../../lib/auth-client';
import api from '@/api/api';
import { PiPenLight, PiPerson } from 'react-icons/pi';
import { MdDateRange, MdUpdate } from 'react-icons/md';
import { TiMediaEject } from 'react-icons/ti';
import { FcDeleteRow } from 'react-icons/fc';
import Loading from '@/Components/Shared/Loading';

const MyBookings = () => {
    const [bookings , setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const { data, error, isPending } = authClient.useSession();
    
    console.log(data?.user?.id, 'users');

    const getBookings = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/bookings/${data?.user?.id}`);
            setBookings(response.data.payload);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(true);
        }
    };

    useEffect(() => {
        if (data?.user?.id) {
            getBookings();
        }
    }, [data?.user?.id]);

    console.log(bookings);


    if(loading){
        return (
            <div className='p-12 rounded-2xl mt-2 text-center text-muted'>
                <Loading />
            </div>
        );
    };
    
    if(bookings.length == 0){
        return (
            <div className='p-12 rounded-2xl mt-2 text-center text-muted'>
                You haven't Booked any appointments yet.
            </div>
        );
    };


    return(
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                bookings.map((booking, index) => (
            <div key={index} className='rounded-2xl border border-white/20 bg-[#031E29] p-5'>
                <p className='text-lg font-bold text-cyan-500'>Dr. Ayesha Rahman</p>
                <div className='mt-3 text-sm text-muted'>
                    <div className='flex items-center gap-2'><PiPerson /> Patient: <span className='text-white'>Md Rubel Hossen</span> </div>
                    <div className='flex items-center gap-2'><MdDateRange /> Date: <span className='text-white'>Md Rubel Hossen</span> </div>
                    <div className='flex items-center gap-2'><TiMediaEject /> Time: <span className='text-white'>Md Rubel Hossen</span> </div>
                </div>
                <p className='text-sm'>Reason: shash kosto</p>
                <div className='flex gap-2 my-4'>
                    <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-xs px-3 h-8 bg-[#010F18]'><PiPenLight /> Update </div>
                    <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-xs px-3 h-8 bg-[#e63737]'><FcDeleteRow /> Delete </div>
                </div>
            </div>))
            }
            
        </div>
    )


};

export default MyBookings;