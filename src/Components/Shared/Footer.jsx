"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaHeartbeat, } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#071B24] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-linear-145 from-[#06afb8] to-[#03dee2] w-9 h-9 flex justify-center items-center rounded-xl">
                  <FaUserDoctor className="text-black text-xl" />
                </div>

              <h2 className="text-2xl font-bold">
                DocAppoint
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Trusted healthcare platform for booking doctor appointments
              easily and quickly from anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link
                href="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/doctors"
                className="hover:text-white transition"
              >
                Doctors
              </Link>

              <Link
                href="/about"
                className="hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p className="hover:text-white transition cursor-pointer">
                Online Appointment
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Emergency Support
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Specialist Doctors
              </p>

              <p className="hover:text-white transition cursor-pointer">
                24/7 Healthcare
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>

            <div className="mt-6 text-gray-400">
              <p>Email: support@medicare.com</p>
              <p className="mt-2">Phone: +880 1234-567890</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 MediCare. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;