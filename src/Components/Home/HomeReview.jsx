import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosHeartEmpty, IoMdStopwatch } from "react-icons/io";
import { MdOutlinePerson4, MdOutlineVerifiedUser } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const HomeReview =async () => {
    
    return (
        <div className='py-20 w-11/12 mx-auto lg:w-full mb-5'>
            <div className='text-center'>
                <h2 className='text-3xl md:text-4xl font-bold'>What Patients Say</h2>
                <p className='text-muted mt-2'>Real reviews from people who trust DocAppoint.</p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10'>

                <div className='p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] shadow-xl shadow-cyan-500/15'>
                    <div className='flex gap-1'>
                        <FaStar className='text-[#ECAA0B]' />
                        
                    </div>
                    
                    <p className='mt-3 text-sm'>"Very bad, doctor is very dengarus, and very very bad."</p>
                    
                    <p className='text-[#34D1CB] text-sm mt-4 flex items-center gap-1'><TfiLayoutLineSolid /> Rubel Hossen</p>
                </div>
                
                
                <div className='p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] shadow-xl shadow-cyan-500/15'>
                    <div className='flex gap-1'>
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                    </div>
                    
                    <p className='mt-3 text-sm'>"Booking was seamless and the doctor was incredibly attentive. Highly recommend DocAppoint!"</p>
                    
                    <p className='text-[#34D1CB] text-sm mt-4 flex items-center gap-1'><TfiLayoutLineSolid /> Rahim Uddin</p>
                </div>
                
                
                <div className='p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] shadow-xl shadow-cyan-500/15'>
                    <div className='flex gap-1'>
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                    </div>
                    
                    <p className='mt-3 text-sm'>"Found the perfect specialist within minutes. The platform saved me so much time."</p>
                    
                    <p className='text-[#34D1CB] text-sm mt-4 flex items-center gap-1'><TfiLayoutLineSolid /> Maria Akter</p>
                </div>
                
                
                <div className='p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] shadow-xl shadow-cyan-500/15'>
                    <div className='flex gap-1'>
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        
                    </div>
                    
                    <p className='mt-3 text-sm'>"Great experience overall. Loved the clean interface and quick confirmation."</p>
                    
                    <p className='text-[#34D1CB] text-sm mt-4 flex items-center gap-1'><TfiLayoutLineSolid /> Sajid Hasan</p>
                </div>
                
                
                <div className='p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] shadow-xl shadow-cyan-500/15'>
                    <div className='flex gap-1'>
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                    </div>
                    
                    <p className='mt-3 text-sm'>"My pediatrician was wonderful with my son. Will book again."</p>
                    
                    <p className='text-[#34D1CB] text-sm mt-4 flex items-center gap-1'><TfiLayoutLineSolid /> Nusrat Jahan</p>
                </div>
                
                
                <div className='p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] shadow-xl shadow-cyan-500/15'>
                    <div className='flex gap-1'>
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                        <FaStar className='text-[#ECAA0B]' />
                    </div>
                    
                    <p className='mt-3 text-sm'>"Trusted doctors, transparent fees, and zero hassle. Five stars."</p>
                    
                    <p className='text-[#34D1CB] text-sm mt-4 flex items-center gap-1'><TfiLayoutLineSolid /> Lamia Chowdhury</p>
                </div>
                
                

            </div>
        </div>
    );
};

export default HomeReview;