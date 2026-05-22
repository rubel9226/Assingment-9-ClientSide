"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { IoMdStopwatch } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import api from '@/api/api';
import Loading from '@/Components/Shared/Loading';

const Doctors = ({ doctors }) => {
    const [ newDoctors, setNewDoctors ] = useState(doctors);
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(false);
    

    const handleSearch =async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            const response = await api.get( `/doctors?search=${search}`);
            setNewDoctors(response?.data?.payload);            
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <div>

            {/* search */}
            <div className='mt-8 flex justify-center'>
                <form onSubmit={handleSearch} className='w-full max-w-xl flex gap-3'>
                    <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search doctor or specialty...'
                        className='w-full h-12 rounded-xl border border-white/15 bg-[#031E29] px-4 outline-none'
                    />
                    <button type='submit' className='bg-[#00C7C5] text-black px-6 rounded-xl font-semibold' >
                        Search
                    </button>
                </form>
            </div>

            {
                loading 
                ?<div className='w-full min-h-[50vh] flex justify-center items-center'>
                    <Loading /> 
                </div> 
                : 
                newDoctors.length === 0 
                ? <div className="flex min-h-[50vh] justify-center items-center gap-5"> 
                    <p className="text-bold text-cyan-500 animate-pulse">
                      No doctors match your search.
                    </p> 
                  </div> 
                :
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10'>

                    {
                        newDoctors.map((doctor, index) => (

                            <div
                                key={index}
                                className='rounded-xl bg-[#031e29] transform duration-500 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl shadow-cyan-500/35 relative'
                            >

                                <div className='rounded-t-2xl w-full aspect-[2] overflow-hidden'>

                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={doctor?.image}
                                        alt='Doctor'
                                        className='rounded-t-2xl w-full -mt-10'
                                    />

                                </div>

                                <div className='p-5'>

                                    <div>

                                        <h2 className='text-lg font-bold'>
                                            {doctor?.name}
                                        </h2>

                                        <p className='text-sm font-medium text-[#00c3c2]'>
                                            {doctor?.specialty}
                                        </p>

                                    </div>

                                    <p className='mt-2 line-clamp-2 text-sm text-muted'>
                                        {doctor?.description}
                                    </p>

                                    <div className='mt-2 text-muted'>

                                        <span className='flex gap-1 items-center text-sm'>
                                            <IoLocationOutline />
                                            {doctor?.location}
                                        </span>

                                        <span className='flex gap-1 items-center text-sm'>
                                            <IoMdStopwatch />
                                            {doctor?.experience} experience
                                        </span>

                                    </div>

                                    <div className='border-t border-muted my-4' />

                                    <div className='flex justify-between items-center'>

                                        <div>

                                            <p className='text-xs text-muted'>
                                                Consultation
                                            </p>

                                            <h4 className='text-lg text-[#00c3c2] font-bold'>
                                                ৳{doctor?.fee}
                                            </h4>

                                        </div>

                                        <Link
                                            href={`details/${doctor?.id}`}
                                            className='bg-[#00C7C5] text-[12px] flex items-center gap-1.5 text-black font-medium px-3 h-8 rounded-xl'
                                        >
                                            View Details
                                        </Link>

                                    </div>

                                </div>

                                <div className='flex bg-black/80 hover:bg-cyan-600/80 px-3 py-1 rounded-full absolute top-4 right-3 gap-1 items-center text-sm'>

                                    {doctor?.rating}

                                    <FaStar className='text-amber-400' />

                                </div>

                            </div>

                        ))
                    }

                </div>
            }


        </div>
    );
};

export default Doctors;