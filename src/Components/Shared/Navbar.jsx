"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaUserDoctor } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { LuLogOut } from "react-icons/lu";
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter()

  const { data, error, isPending } = authClient.useSession();

  const handleLogout =async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  }

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

          

          <div className='hidden md:block'>
            {
              data 
              ?<div className='flex items-center gap-2'>
                <div className='w-10 bg-blue-400 aspect-squire rounded-full'>
                  <Image
                    width={32}
                    height={32}
                    src={data?.user?.image || '/user.png'}
                    alt={data?.user?.name}
                    className='min-w-8 aspect-squire rounded-full '
                  />
                  {
                    
                  }
                </div>
                <div onClick={handleLogout} className={`px-4 w-full h-9 py-2 rounded-xl border border-white/30 text-xs font-semibold text-center duration-100 bg-transparent hover:bg-white/15 flex gap-1 items-center cursor-pointer`}><LuLogOut /> Logout</div>
              </div> 
              :<div className='flex gap-2'>
                <Link onClick={() => setOpen(false)} href={'/login'} className={`px-4 w-full h-9 py-2 rounded-xl border border-white/30 text-xs font-semibold text-center duration-100 bg-transparent hover:bg-white/15`}>Login</Link>
                <Link onClick={() => setOpen(false)} href={'/register'} className={`px-4 w-full h-9 py-2 rounded-xl border border-white/30 text-xs font-medium text-center duration-100 bg-[#00C6C4] hover:bg-[#1b9795] text-black`}>Register</Link>
              </div>
            }
            
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t px-4 py-3 space-y-2 flex flex-col">
          {btns}
          <div className="flex gap-4">
            <div>
              
            </div>
            <Link onClick={() => setOpen(false)} href={'/register'} className={`px-4 w-full h-9 py-2 rounded-xl border border-white/30 text-sm font-medium text-center duration-100 bg-[#00C6C4] hover:bg-[#1b9795] text-black`}>Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}