import React from 'react';
import { RiHome7Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const AdminSideBar = ({ active }) => {
  return (
    <div className="space-y-3  bg-white h-[100vh] overflow-y-auto shadow-lg">
      <div className="p-7 pb-2 flex items-center space-x-1">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMSOUWdcE8LB2NnQIlFq5x4Xk0POR4_b3UA&s" 
          alt="logox"
          className='w-20'
        />
        <h1 className='text-4xl font-bold text-blue-600'>Graph</h1>
      </div>
      
      {/* Buttons Section */}
      <div className='p-3 space-y-1.5'>
        
        {/* Dashboard */}
        <div className="text-black flex">
          <Link 
            to={'/dashboard'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 1 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]' /> 
            <h5 className='text-[15px] items-center'>Dashboard</h5>
          </Link>
        </div>
        
        {/* Features */}
        <div className="text-black flex">
          <Link 
            to={'/dashboard/feature'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 2 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px] items-center'>Features</h5>
          </Link>
        </div>

        {/* Terms */}
        <div className="text-black flex">
          <Link 
            to={'/terms'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 3 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px] items-center'>Terms</h5>
          </Link>
        </div>
 {/* Terms */}
 <div className="text-black flex">
          <Link 
            to={'/terms'} 
            className={`w-full flex items-center space-x-2 p-2 rounded transition-colors duration-200
              ${active === 3 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px] items-center'>Terms</h5>
          </Link>
        </div> {/* Terms */}
        <div className="text-black flex">
          <Link 
            to={'/terms'} 
            className={`w-full flex items-center space-x-2 p-2 rounded transition-colors duration-200
              ${active === 3 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px] items-center'>Terms</h5>
          </Link>
        </div> {/* Terms */}
        <div className="text-black flex">
          <Link 
            to={'/terms'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 3 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px] items-center'>Terms</h5>
          </Link>
        </div> {/* Terms */}
        <div className="text-black flex">
          <Link 
            to={'/terms'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 3 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px] items-center'>Terms</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
