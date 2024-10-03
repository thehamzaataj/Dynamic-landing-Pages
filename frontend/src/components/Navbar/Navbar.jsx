// src/components/Navbar.js
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" sm:bg-transparent p-4 md:p-8 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-[#355EFC] sm:text-3xl">LANDMINE</h1>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? <FaTimes className=" z-20" /> : <FaBars />}
          </button>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex gap-6">
            <li className="hover:text-blue-700 cursor-pointer">Home</li>
            <li className="hover:text-blue-700 cursor-pointer">About us</li>
            <li className="hover:text-blue-700 cursor-pointer">Features</li>
            <li className="hover:text-blue-700 cursor-pointer">Testimonials</li>
            <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
          </ul>
          <div className="ml-8 flex items-center gap-3">
            <FaFacebook className="text-[28px] cursor-pointer" />
            <FaInstagram className="text-[28px] cursor-pointer" />
            <button className="border border-white bg-blue-700 py-1.5 px-3 rounded-md text-white hover:bg-blue-900">
              Join Us
            </button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} mt-16 bg-white rounded-lg shadow-lg fixed w-full h-screen top-0 left-0 z-10 p-6`}>
        <ul className="flex flex-col items-center gap-4">
          <li className="hover:text-blue-700 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 cursor-pointer">About us</li>
          <li className="hover:text-blue-700 cursor-pointer">Features</li>
          <li className="hover:text-blue-700 cursor-pointer">Testimonials</li>
          <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
          <div className="flex gap-3 mt-4 justify-center">
            <FaFacebook className="text-[28px] cursor-pointer" />
            <FaInstagram className="text-[28px] cursor-pointer" />
          </div>
          <button className="border border-white bg-blue-700 py-1.5 px-3 rounded-md text-white hover:bg-blue-900 mt-4">
            Join Us
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
