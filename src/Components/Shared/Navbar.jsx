"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserDoctor } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // demo state
  const pathname = usePathname()



  const btns = (
    <>
      <Link onClick={() => setOpen(false)} href={'/'} className={`px-4 w-full py-2 rounded-none md:rounded-xl md:w-auto ${pathname === '/' ? 'bg-[#00C3C2]/50 font-medium' : 'duration-100 hover:bg-cyan-400/20'}`}>Home</Link>
      <Link onClick={() => setOpen(false)} href={'/appointments'} className={`px-4 w-full py-2 rounded-none md:rounded-xl md:w-auto ${pathname === '/appointments' ? 'bg-[#00C3C2]/50 font-medium' : 'duration-100 hover:bg-cyan-400/20'}`}>All Appointments</Link>
      <Link onClick={() => setOpen(false)} href={'/dashboard'} className={`px-4 w-full py-2 rounded-none md:rounded-xl md:w-auto ${pathname === '/dashboard' ? 'bg-[#00C3C2]/50 font-medium' : 'duration-100 hover:bg-cyan-400/20'}`}>Dashboard</Link>
    </>
  )

  return (
    <nav className="w-full shadow-sm fixed top-0 left-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">

          <div className="bg-linear-145 from-[#06afb8] to-[#03dee2] w-9 h-9 flex justify-center items-center rounded-xl">
            <FaUserDoctor className="text-black text-xl" />
          </div>

          

          {/* Logo */}
          <div className="text-xl font-bold text-[#109ea5]">
            DocAppoint
          </div>
        </div>

        <div className="space-x-2 hidden md:block">
          {btns}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Menu Icon (mobile) */}
          <button onClick={() => setOpen(!open)} className="text-2xl md:hidden cursor-pointer" >
            ☰
          </button>

          {/* Profile Image */}
          {isLoggedIn && (
            <div 
              className="w-10 flex justify-center items-center font-bold bg-blue-400 text-white h-10 rounded-full object-cover border"
            >
              Md
            </div>
          )}

          <div className='hidden md:block'>

            {/* Login / Logout Button */}
            {isLoggedIn ? (
              <Button color="danger" onClick={() => setIsLoggedIn(false)}>
                Logout
              </Button>
            ) : (
              <Button color="primary" onClick={() => setIsLoggedIn(true)}>
                Login
              </Button>
            )}
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t px-4 py-3 space-y-2 flex flex-col">
          {btns}
          <div className="flex gap-4">
            <Link onClick={() => setOpen(false)} href={'/login'} className={`px-4 w-full h-9 py-2 rounded-xl border border-white/30 text-sm font-medium text-center duration-100 hover:bg-cyan-400/30`}>Login</Link>
            <Link onClick={() => setOpen(false)} href={'/register'} className={`px-4 w-full h-9 py-2 rounded-xl border border-white/30 text-sm font-medium text-center duration-100 bg-[#00C6C4] hover:bg-[#1b9795] text-black`}>Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}