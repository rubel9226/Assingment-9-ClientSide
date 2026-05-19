import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoMdStopwatch } from "react-icons/io";

const HomeCard =async () => {
    const res = await fetch('https://assingment-9-umber.vercel.app/doctors.json');
    const allData = await res.json();
    const threeData = allData.slice(0, 3);
    console.log(threeData);

    return (
        <div className='mt-20 w-11/12 mx-auto mb-5'>
            <div className='text-center'>
                <h2 className='text-3xl md:text-4xl font-bold'>Top Rated Doctors</h2>
                <p className='text-muted mt-2'>Highly reviewed specialists ready to see you.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                
                {
                    threeData.map((doctor, index) => <div key={index} className='rounded-xl bg-[#031e29] transform duration-500 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl shadow-cyan-500/35'>
                    <div>
                        <Image 
                            width={1000}
                            height={1000}
                            src={'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600'}
                            alt='Doctor 1'
                            className='rounded-t-2xl w-full aspect-[1.8]'
                        />
                    </div>
                    <div className='p-5'>
                        <div>
                            <h2 className='text-lg font-bold'>Dr. Sami Ahmed</h2>
                            <p className='text-sm font-medium text-[#00c3c2]'>Cardiologist</p>
                        </div>

                        <p className='mt-2 line-clamp-2 text-sm text-muted'>Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.</p>   

                        <div className='mt-2 text-muted'>
                            <span className='flex gap-1 items-center text-sm'><IoLocationOutline /> Baraigram, Natore.</span>
                            <span className='flex gap-1 items-center text-sm'><IoMdStopwatch /> 10 years experience</span>
                        </div>
                        
                        <div className='border-t border-muted my-4' />

                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <p className='text-xs text-muted'>Consultation</p>
                                <h4 className='text-lg text-[#00c3c2] font-bold '>৳800</h4>
                            </div>
                            <Link href={'details'} className='bg-[#00C7C5] text-[12px] flex items-center gap-1.5 text-black font-medium px-3 h-8 rounded-xl ' >View Details</Link>
                        </div>
                    </div>
                </div>)
                }
                

            </div>
        </div>
    );
};

export default HomeCard;