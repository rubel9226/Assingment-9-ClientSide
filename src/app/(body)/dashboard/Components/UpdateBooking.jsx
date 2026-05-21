"use client";
import api from "@/api/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PiPenLight } from "react-icons/pi";

const BookingDoctor = ({booking, getBookings}) => {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    
    


    const [formData, setFormData] = useState({
        patientName: "",
        date: "", 
        reason: ''
      });
    
      // ✅ session data আসার পর form set করা
      useEffect(() => {
        if (booking) {
          setFormData({
            patientName: booking?.patientName || "",
            date: booking?.date || "",
            reason: booking?.reason || "",
          });
        }
      }, [booking]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      
    

    const handleSubmit =async (e) => {
        e.preventDefault();
    
        const bookingData = {
            patientName: formData.patientName,
            date: formData.date,
            reason: formData.reason
        };
    
        console.log(bookingData);
        console.log(booking._id);
        try {
            setLoading(true);

            const response = await api.put(`/booking-update/${booking._id}`, bookingData)
            console.log(response?.data?.payload);

            toast.success('Appoint book updated.')
            e.target.reset();
            getBookings();
            setOpenModal(false);
        } catch (error) {
            console.log(error?.response?.data?.message);
            toast.error('Error');
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <div>
            <div 
              onClick={() => setOpenModal(true)}
              className='cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-xs px-3 h-8 bg-[#010F18]'
            >
                <PiPenLight /> Update 
            </div>
              
            {/* Modal */}
            {openModal && (
                <div className="fixed inset-0 bg-black/60 border border-white/15 flex items-center justify-center z-50 px-4">
                    <div className="bg-[#010f18] w-full max-w-2xl rounded-3xl p-8 relative">
                        
                        <button onClick={() => setOpenModal(false)} className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-red-500" >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold mb-6">
                            Update Appointment
                        </h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" >
                        
                        <div>
                            <label className="block mb-2 font-medium ">
                                Doctor Name
                            </label>
                            <input 
                                type="text" 
                                name="doctorName" 
                                value={booking?.doctorName}
                                readOnly
                                placeholder="Enter your name" 
                                className="w-full border border-gray-300 bg-[#102d38] rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium ">
                                Patient Name
                            </label>
                            <input 
                                type="text" 
                                name="patientName" 
                                value={formData.patientName}
                                onChange={handleChange}
                                required 
                                placeholder="Enter your name" 
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>
                        
 
                        <div>
                            <label className="block mb-2 font-medium ">
                                Appointment Date
                            </label> 
                            <input 
                                type="date" 
                                name="date"
                                value={formData.date}
                                onChange={handleChange} 
                                required 
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>


                        {
                            booking?.reason && <div>
                            <label className="block mb-2 font-medium ">
                                Problem
                            </label> 
                            <input 
                                type="text" 
                                name="reason" 
                                value={formData.reason}
                                onChange={handleChange}
                                required 
                                placeholder="enter your reason" 
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
                        </div>
                        }
                                    
                        <div className="md:col-span-2">
                            <button type="submit" className="w-full bg-cyan-500/90 hover:bg-cyan-500 transition-all duration-300 text-white py-4 rounded-2xl font-semibold cursor-pointer" >
                                {loading ? 'Loading...' : 'Save Changes'}
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