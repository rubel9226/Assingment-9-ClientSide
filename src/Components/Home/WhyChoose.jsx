import { IoIosHeartEmpty, IoMdStopwatch } from "react-icons/io";
import { MdOutlinePerson4, MdOutlineVerifiedUser } from 'react-icons/md';

const WhyChoose =async () => {
    
    return (
        <div className='pt-20 w-11/12 mx-auto lg:w-full mb-5'>
            <div className='text-center'>
                <h2 className='text-3xl md:text-4xl font-bold'>Why Choose DocAppoint?</h2>
                <p className='text-muted mt-2'>Built around your health and your time</p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10'>

                <div className='flex justify-center p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] transform duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl shadow-cyan-500/35'>
                    <div className='bg-[#00C7C5] text-[12px] flex items-center justify-center gap-1.5 text-black font-medium w-14 h-14 rounded-3xl mb-4' >
                        <MdOutlineVerifiedUser className='text-[28px]' />
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold'>Verified Doctors</h2>
                        <p className='mt-2 text-sm text-muted'>Skip the calls. Reserve a slot in seconds and get instant confirmation.</p>
                    </div>
                </div>
                

                <div className='flex justify-center p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] transform duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl shadow-cyan-500/35'>
                    <div className='bg-[#00C7C5] text-[12px] flex items-center justify-center gap-1.5 text-black font-medium w-14 h-14 rounded-3xl mb-4' >
                        <IoMdStopwatch className='text-[28px]' />
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold'>Instant Booking</h2>
                        <p className='mt-2 text-sm text-muted'>Every specialist on DocAppoint is vetted, licensed, and reviewed by real patients.</p>
                    </div>
                </div>
                

                <div className='flex justify-center p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] transform duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl shadow-cyan-500/35'>
                    <div className='bg-[#00C7C5] text-[12px] flex items-center justify-center gap-1.5 text-black font-medium w-14 h-14 rounded-3xl mb-4' >
                        <IoIosHeartEmpty  className='text-[28px]' />
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold'>Patient-First Care</h2>
                        <p className='mt-2 text-sm text-muted'>Transparent fees, clear availability, and a smooth experience from start to finish.</p>
                    </div>
                </div>
                

                <div className='flex justify-center p-6 border border-white/20 flex-col items-center rounded-xl bg-[#031e29] transform duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl shadow-cyan-500/35'>
                    <div className='bg-[#00C7C5] text-[12px] flex items-center justify-center gap-1.5 text-black font-medium w-14 h-14 rounded-3xl mb-4' >
                        <MdOutlinePerson4  className='text-[28px]' />
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold'>Trusted by Thousands</h2>
                        <p className='mt-2 text-sm text-muted'>Join a growing community managing their health smartly with DocAppoint.</p>
                    </div>
                </div>
                
                

            </div>
        </div>
    );
};

export default WhyChoose;