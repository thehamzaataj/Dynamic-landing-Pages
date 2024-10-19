import { useState } from "react";
import { RiHome7Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"
const AdminSideBar = ({ active, isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={`space-y-3 h-full overflow-y-auto shadow-lg ${isDarkMode ? 'bg-[#1c1e21] text-gray-300' : 'bg-white text-black'}`}>
      <div className="p-7 pb-2 flex items-center space-x-1">
        <img 
          src={logo} 
          alt="logox"
          className='w-50'
        />
        {/* <h1 className='text-4xl font-bold text-blue-600'>Graph</h1> */}
      </div>
      
      {/* Buttons Section */}
      <div className='p-3 space-y-1.5'>
        {/* Dashboard */}
        <div className="flex">
          <Link 
            to={'/dashboard'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 1 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]' /> 
            <h5 className='text-[15px]'>Dashboard</h5>
          </Link>
        </div>
        
        <div className="flex">
          <Link 
            to={'/dashboard/Customize-page'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 2 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px]'>Customize Page</h5>
          </Link>
        </div>
        <div className="flex">
          <Link 
            to={'/dashboard/feature'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 3 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px]'>About Us</h5>
          </Link>
        </div>
        <div className="flex">
          <Link 
            to={'/dashboard/feature'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 4 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]'/> 
            <h5 className='text-[15px]'>Feature</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
