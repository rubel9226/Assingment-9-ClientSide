"use client";
import api from "@/api/api";
import { useState } from "react";
import { authClient } from './../../../../lib/auth-client';

const BookingDoctor = ({doctor}) => {
    const [openModal, setOpenModal] = useState(false);
    const { data, error, isPending } = authClient.useSession();
    
    console.log(data?.user?.id, 'users');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const bookingData = {
            patientName: form.patientName.value,
            email: form.email.value,
            phone: form.phone.value,
            date: form.date.value,
            time: form.time.value,
            problem: form.problem.value,
        };
    
        console.log(bookingData);
        try {
            api.get(`booking/${data?.user?.id}`)
        } catch (error) {
            console.log(error);
        }
    
        alert("Appointment Booked Successfully!");
        form.reset();
        setOpenModal(false);
    };

    return (
        <div>
            <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold cursor-pointer"
              >
                Book Appointment
              </button>
            {/* Modal */}
            {openModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-[#0f313d] w-full max-w-2xl rounded-3xl p-8 relative">
                        
                        <button onClick={() => setOpenModal(false)} className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-red-500" >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold mb-6">
                            Book Appointment
                        </h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" >
                        
                        <div>
                            <label className="block mb-2 font-medium ">
                                Patient Name
                            </label>
                            <input type="text" name="patientName" required placeholder="Enter your name" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>
                        
                        <div>
                            <label className="block mb-2 font-medium ">
                                Email
                            </label> 
                            <input type="email" name="email" required placeholder="Enter your email" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>
 
                        <div>
                            <label className="block mb-2 font-medium ">
                                Phone Number
                            </label> 
                            <input type="tel" name="phone" required placeholder="01XXXXXXXXX" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>
 
                        <div>
                            <label className="block mb-2 font-medium ">
                                Appointment Date
                            </label> 
                            <input type="date" name="date" required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>
 
                        <div className="md:col-span-2">
                            <label className="block mb-2 font-medium ">
                                Select Time
                            </label>

                            <select name="time" required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" >
                                <option className="bg-black/70" value="">Select Time</option>

                                {doctor.availability.map((time, index) => (
                                    <option key={index} value={time} className="bg-black/70">
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>

                        
                        <div className="md:col-span-2">
                            <label className="block mb-2 font-medium ">
                                Problem Description
                            </label> 
                            <textarea name="problem" rows={4} placeholder="Write your problem..." className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" ></textarea>
                        </div>
 
                        <div className="md:col-span-2">
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-4 rounded-2xl font-semibold cursor-pointer" >
                                Confirm Booking
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingDoctor;