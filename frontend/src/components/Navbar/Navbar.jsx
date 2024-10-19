import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";


const Navbar = ({ refs, scrollToNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true); 
      } else {
        setNavBg(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0  z-50 px-4 py-4 md:px-12 transition-colors duration-300 ${navBg ? 'backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-[#355EFC] sm:text-3xl">LANDMINE</h1>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? <FaTimes className="z-20" /> : <FaBars />}
          </button>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex gap-6">
            {/* Scroll to navbar on clicking Home */}
            <li onClick={scrollToNavbar} className="hover:text-blue-700 cursor-pointer">Home</li>
            <li onClick={() => refs.aboutUsRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">About us</li>
            <li onClick={() => refs.featuresRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">Features</li>
            <li onClick={() => refs.testimonialsRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">Testimonials</li>
            <li onClick={() => refs.pricingRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">Pricing</li>
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

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} mt-16 bg-white rounded-lg shadow-lg fixed w-full h-screen top-0 left-0 z-10 p-6`}>
        <ul className="flex flex-col items-center gap-4">
          <li onClick={scrollToNavbar} className="hover:text-blue-700 cursor-pointer">Home</li>
          <li onClick={() => refs.aboutUsRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">About us</li>
          <li onClick={() => refs.featuresRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">Features</li>
          <li onClick={() => refs.testimonialsRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">Testimonials</li>
          <li onClick={() => refs.pricingRef.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-700 cursor-pointer">Pricing</li>
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
