'use client';

import React, { useRef, useState } from 'react';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// icons
import Link from 'next/link';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

// import required modules
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

export default function HeroSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, }}
        loop={true}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >


        
        <SwiperSlide className=''>
          <div className="bg-[url(/hero1.jpg)] min-h-[89vh] bg-cover bg-center ">
              {/* <div className='w-full min-h-[92.5vh] bg-[radial-gradient(circle,transparent,#111)] from-black/50'> */}
              <div className=' bg-radial-[at_75%_50%] from-cyan-400/40 to-black/90 to-100% '>
                <div className='w-full min-h-[89vh] flex flex-col justify-center px-6 max-w-7xl mx-auto'>

                    <div className='flex'>
                        <p className='bg-white/15 w-auto text-[12px] px-3 py-1 rounded-full font-bold border border-white/50 flex gap-1 items-center'><MdOutlineVerifiedUser className='text-sm' /> VERIFIED HEALTHCARE</p>
                    </div>

                    <h2 className='mt-5 text-4xl font-bold text-white'>Find & Book The Best Doctor Near You</h2>

                    <p className='text-[18px] mt-5'>Verified specialists, instant confirm, and transparent fees - your health, simplified</p>

                    <div className='space-x-4 mt-5 flex'>
                        <Link className='bg-linear-145 flex items-center gap-1.5 from-[#008E96] to-[#02d9dd] text-black font-semibold text-sm px-8 h-10 rounded-xl ' href={'appointments'}><FiSearch className='text-[16px]' /> Browse Doctors</Link>
                        <Link className='bg-white/20 border flex items-center gap-1.5 border-white/30 font-semibold text-sm px-8 h-10 rounded-xl ' href='/dashboard'><FaRegCalendarCheck className='text-[16px]' /> My Bookings</Link>
                    </div>

                    <div className='max-w-lg border-t border-white/30 mb-6 mt-10' />

                    <div className='max-w-lg flex justify-between'>

                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#2accd4]" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                <span>
                                    500+
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Verified Doctors</p>
                        </div>

                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <FaStar className='text-[#ecaa0b] text-xl'/>
                                <span>
                                    4.9
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Avg. Rating</p>
                        </div>
                        
                        
                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <FaRegCalendarCheck className='text-[#2accd4] text-xl' />
                                <span>
                                    50K+
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Appointments</p>
                        </div>


                    </div>
                </div>
              </div>
            </div>
          
        </SwiperSlide>



        <SwiperSlide>
          <div className="bg-[url(/hero2.jpg)] min-h-[89vh] bg-cover bg-center">
              {/* <div className='w-full min-h-[92.5vh] bg-[radial-gradient(circle,transparent,#111)] from-black/50'> */}
              <div className=' bg-radial-[at_75%_50%] from-cyan-400/40 to-black/90 to-100% '>
                <div className='w-full min-h-[89vh]  flex flex-col justify-center px-6 max-w-7xl mx-auto'>

                    <div className='flex'>
                        <p className='bg-white/15 w-auto text-[12px] px-3 py-1 rounded-full font-bold border border-white/50 flex gap-1 items-center'><MdOutlineVerifiedUser className='text-sm' /> VERIFIED HEALTHCARE</p>
                    </div>

                    <h2 className='mt-5 text-4xl font-bold text-white'>Care That Comes to You</h2>

                    <p className='text-[18px] mt-5'>Browse top-rated doctors across specialties and book your slot in under a minutes</p>

                    <div className='space-x-4 mt-5 flex'>
                        <Link className='bg-linear-145 flex items-center gap-1.5 from-[#008E96] to-[#02d9dd] text-black font-semibold text-sm px-8 h-10 rounded-xl ' href={'appointments'}><FiSearch className='text-[16px]' /> Browse Doctors</Link>
                        <Link className='bg-white/20 border flex items-center gap-1.5 border-white/30 font-semibold text-sm px-8 h-10 rounded-xl ' href='/dashboard'><FaRegCalendarCheck className='text-[16px]' /> My Bookings</Link>
                    </div>

                    <div className='max-w-lg border-t border-white/30 mb-6 mt-10' />

                    <div className='max-w-lg flex justify-between'>

                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#2accd4]" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                <span>
                                    500+
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Verified Doctors</p>
                        </div>

                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <FaStar className='text-[#ecaa0b] text-xl'/>
                                <span>
                                    4.9
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Avg. Rating</p>
                        </div>
                        
                        
                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <FaRegCalendarCheck className='text-[#2accd4] text-xl' />
                                <span>
                                    50K+
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Appointments</p>
                        </div>


                    </div>
                </div>
              </div>
            </div>

        </SwiperSlide>



        <SwiperSlide>
          <div className="bg-[url(/hero3.jpg)] min-h-[89vh] bg-cover bg-center">
              {/* <div className='w-full min-h-[92.5vh] bg-[radial-gradient(circle,transparent,#111)] from-black/50'> */}
              <div className=' bg-radial-[at_75%_50%] from-cyan-400/40 to-black/90 to-100% '>
                <div className='w-full min-h-[89vh]  flex flex-col justify-center px-6 max-w-7xl mx-auto'>

                    <div className='flex'>
                        <p className='bg-white/15 w-auto text-[12px] px-3 py-1 rounded-full font-bold border border-white/50 flex gap-1 items-center'><MdOutlineVerifiedUser className='text-sm' /> VERIFIED HEALTHCARE</p>
                    </div>

                    <h2 className='mt-5 text-4xl font-bold text-white'>Your Health, Our Priority</h2>

                    <p className='text-[18px] mt-5'>Trusted clinks, real reviews, and seamless management of every appointment.</p>

                    <div className='space-x-4 mt-5 flex'>
                        <Link className='bg-linear-145 flex items-center gap-1.5 from-[#008E96] to-[#02d9dd] text-black font-semibold text-sm px-8 h-10 rounded-xl ' href={'appointments'}><FiSearch className='text-[16px]' /> Browse Doctors</Link>
                        <Link className='bg-white/20 border flex items-center gap-1.5 border-white/30 font-semibold text-sm px-8 h-10 rounded-xl ' href='/dashboard'><FaRegCalendarCheck className='text-[16px]' /> My Bookings</Link>
                    </div>

                    <div className='max-w-lg border-t border-white/30 mb-6 mt-10' />

                    <div className='max-w-lg flex justify-between'>

                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#2accd4]" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                <span>
                                    500+
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Verified Doctors</p>
                        </div>

                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <FaStar className='text-[#ecaa0b] text-xl'/>
                                <span>
                                    4.9
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Avg. Rating</p>
                        </div>
                        
                        
                        <div>
                            <div className='flex items-center gap-1 text-2xl font-bold text-white '>
                                <FaRegCalendarCheck className='text-[#2accd4] text-xl' />
                                <span>
                                    50K+
                                </span>
                            </div>
                            <p className='text-[12px] text-white/60'>Appointments</p>
                        </div>


                    </div>
                </div>
              </div>
            </div>
        </SwiperSlide>



      </Swiper>
    </>
  );
}
