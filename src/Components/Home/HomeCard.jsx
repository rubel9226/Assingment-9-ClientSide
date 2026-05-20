import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoMdStopwatch } from "react-icons/io";

const HomeCard =async () => {
    const res = await fetch('https://assingment-9-umber.vercel.app/doctors.json');
    const allData = await res.json();
    const threeData = allData.slice(0, 3);
    console.log(allData)
    return (
        <div className='pt-20 w-11/12 mx-auto lg:w-full mb-5'>
            <div className='text-center'>
                <h2 className='text-3xl md:text-4xl font-bold'>Top Rated Doctors</h2>
                <p className='text-muted mt-2'>Highly reviewed specialists ready to see you.</p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                
                {
                    threeData.map((doctor, index) => <div key={index} className='rounded-xl bg-[#031e29] transform duration-500 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl shadow-cyan-500/35'>
                    <div className='rounded-t-2xl w-full aspect-[2] overflow-hidden'>
                        {console.log(doctor.id)}
                        <Image 
                            width={1000}
                            height={1000}
                            src={doctor?.image}
                            alt='Doctor 1'
                            className='rounded-t-2xl w-full -mt-10'
                        />
                    </div>
                    <div className='p-5'>
                        <div>
                            <h2 className='text-lg font-bold'>{doctor?.name}</h2>
                            <p className='text-sm font-medium text-[#00c3c2]'>{doctor?.specialty}</p>
                        </div>

                        <p className='mt-2 line-clamp-2 text-sm text-muted'>{doctor?.description}</p>   

                        <div className='mt-2 text-muted'>
                            <span className='flex gap-1 items-center text-sm'><IoLocationOutline /> {doctor?.location} </span>
                            <span className='flex gap-1 items-center text-sm'><IoMdStopwatch /> {doctor?.experience} experience</span>
                        </div>
                        
                        <div className='border-t border-muted my-4' />

                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <p className='text-xs text-muted'>Consultation</p>
                                <h4 className='text-lg text-[#00c3c2] font-bold '>৳{doctor?.fee}</h4>
                            </div>
                            <Link href={`details/${doctor?.id}`} className='bg-[#00C7C5] text-[12px] flex items-center gap-1.5 text-black font-medium px-3 h-8 rounded-xl ' >View Details</Link>
                        </div>
                    </div>
                </div>)
                }
                

            </div>
        </div>
    );
};

export default HomeCard;