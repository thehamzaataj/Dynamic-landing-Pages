// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProImg from '../../public/business-attire-women-removebg-preview.png';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 px-5 sm:px-20 py- gap-8 items-center">
      <div className='sm:flex flex-col gap-1'>
        <h2 className="uppercase  text-blue-600 text-[12px] sm:text-[30px]">Welcome to landmine</h2>
        <h1 className='md:text-6xl  sm:pb-10 font-bold text-[20px] leading-7 '>
          True Financial Support For You Keep Connect
        </h1>
        <Link>
          <a href="#" className='p-2 text-[5px] text-center  rounded-md bg-blue-700 text-white hover:bg-blue-800 sm:p-4 sm:text-[15px] '>
            Create Account
          </a>
        </Link> 
      </div>
      <div className="flex justify-center">
        <img src={ProImg} alt="Professional Image" className='w-[474px] h-auto object-contain' />
      </div>
    </div>
  );
};

export default Hero;