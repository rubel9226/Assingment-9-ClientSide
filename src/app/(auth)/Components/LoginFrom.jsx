"use client";

import api from "@/api/api";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const LoginFrom = () => {

  
  const onSubmit = async (e) => {
    e.preventDefault();

    
    const email = e.target.email.value;
    const password = e.target.password.value

    
      const {data, error} = await authClient.signIn.email({ 
        email,
        password,
        callbackURL: '/'
      });
      // console.log(data, 'data', error, 'error');
    if(error) {
      console.log(error);
      return;
    }
    console.log(data, 'data')

    console.log({email, password});
  }


  const handleLoginGoogle =async () => {
    const {data, error} = await authClient.signIn.social({
      provider: 'google'
    });
    console.log(data, 'login success');
    console.log(error, 'login field');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#031E29] border border-white/15 rounded-3xl shadow-xl shadow-cyan-400/20 p-8 ">
        
        {/* Title */}
        <div className="flex flex-col justify-center items-center mb-8">
            <div className=" bg-[#0FCBC7] w-12 h-12 flex justify-center items-center rounded-xl">
                <FaUserDoctor className="text-black text-2xl" />
            </div>

          <h1 className="mt-3 text-2xl font-bold">
            Login
          </h1>

          <p className="text-gray-500 ">
            Welcome back to DocAppoint
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5 text-sm">          
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <div className="flex items-center border border-white/15 rounded-2xl px-4 py-3 focus-within:border-blue-500">
              <FaEnvelope className="text-gray-400 mr-3" />

              <input
                name='email'
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <div className="flex items-center border border-white/15 rounded-2xl px-4 py-3 focus-within:border-blue-500">
              <FaLock className="text-gray-400 mr-3" />

              <input
                type="password"
                name='password'
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-xs text-muted hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0FCBC7] hover:bg-[#19e9e5] text-black transition-all duration-300 py-3 rounded-2xl font-semibold cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-[1px] bg-white/15"></div>

          <p className="text-gray-400 text-xs"> OR </p>

          <div className="flex-1 h-px bg-white/15"></div>
        </div>

        {/* Google Login */}
        <button onClick={handleLoginGoogle} className="w-full border text-sm font-bold bg-[#021414] border-white/35 hover:bg-[#094d4d] transition-all duration-300 py-2 rounded-2xl flex items-center justify-center gap-3 cursor-pointer" >            <svg viewBox="0 0 24 24" class="h-4 w-4">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
            </svg>

          Continue with Google
        </button>

        {/* Register */}
        <p className="text-center text-gray-500 mt-8 text-xs">
          Don&apos;t have an account?{" "}
          
          <Link href="/register" className="text-[#0FCBC7] font-semibold hover:underline" >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginFrom;