import React from 'react';
import { Link } from 'react-router-dom';
import ProImg from '../assets/business-attire-women-removebg-preview.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 px-5 py-[80px] sm:px-20 sm:py-[101px] gap-8 items-center">
      <motion.div
        className="sm:flex flex-col gap-1"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }} 
        viewport={{ once: false }} 
      >
        <h2 className="uppercase text-blue-600 text-[12px] sm:text-[30px]">Welcome to Landmine</h2>
        <h1 className="md:text-6xl sm:pb-10 font-bold text-[20px] leading-7">
          True Financial Support For You Keep Connect
        </h1>
        <Link>
          <a href="#" className="p-2 text-[5px] text-center rounded-md bg-blue-700 text-white hover:bg-blue-800 sm:p-4 sm:text-[15px]">
            Create Account
          </a>
        </Link>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }} 
        viewport={{ once: false }} 
      >
        <img src={ProImg} alt="Professional Image" className="w-[474px] h-auto object-contain" />
      </motion.div>
    </div>
  );
};

export default Hero;
