"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // demo state
  const pathname = usePathname()



  const btns = (
    <>
      <Link href={'/'} className={`px-4 w-full py-2 rounded-none md:rounded-xl md:w-auto ${pathname === '/' ? 'bg-[#00C3C2]/50 font-medium' : ''}`}>Home</Link>
      <Link href={'/appointments'} className={`px-4 w-full py-2 rounded-none md:rounded-xl md:w-auto ${pathname === '/appointments' ? 'bg-[#00C3C2]/50 font-medium' : ''}`}>All Appointments</Link>
      <Link href={'/dashboard'} className={`px-4 w-full py-2 rounded-none md:rounded-xl md:w-auto ${pathname === '/dashboard' ? 'bg-[#00C3C2]/50 font-medium' : ''}`}>Dashboard</Link>
    </>
  )

  return (
    <nav className="w-full shadow-sm fixed top-0 left-0 z-50 bg-green-300/70">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">

          <div className="bg-linear-90 from-[#008E96] to-[#00B7B9] w-9 h-9 flex justify-center items-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white/80" aria-hidden="true">
              <path d="M11 2v2"></path>
              <path d="M5 2v2"></path>
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
              <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
              <circle cx="20" cy="10" r="2"></circle>
            </svg>
          </div>

          {/* Menu Icon (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="text-xl font-bold text-[#016166]">
            DocAppoint
          </div>
        </div>

        <div className="space-x-2 hidden md:block">
          {btns}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Profile Image */}
          {isLoggedIn && (
            <div 
              className="w-10 flex justify-center items-center font-bold bg-blue-400 text-white h-10 rounded-full object-cover border"
            >
              Md
            </div>
          )}

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

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2 flex flex-col">
          {btns}
        </div>
      )}
    </nav>
  );
}