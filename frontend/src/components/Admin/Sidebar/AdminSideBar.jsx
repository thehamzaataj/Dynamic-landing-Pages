import { useState } from "react";
import { RiHome7Line, RiSettings3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import { IoIosArrowUp } from "react-icons/io";

const AdminSideBar = ({ active, isDarkMode }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(active === 6 || active === 5 || active === 4 || active==2); 

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className={`space-y-3 h-full overflow-y-auto shadow-lg ${isDarkMode ? 'bg-[#1c1e21] text-gray-300' : 'bg-white text-black'}`}>
      <div className="p-7 pb-2 flex items-center space-x-1">
        <img 
          src={logo} 
          alt="logox"
          className='w-50'
        />
      </div>

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

        {/* About Us */}
        {/* <div className="flex">
          <Link 
            to={'/dashboard/about'} 
            className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
              ${active === 3 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <RiHome7Line className='text-[19px]' /> 
            <h5 className='text-[15px]'>About Us</h5>
          </Link>
        </div> */}

        {/* Settings with Toggle  */}
        <div className="flex flex-col">
          <button 
            onClick={toggleSettings}
            className={`w-full flex items-center justify-between space-x-2 p-2.5 rounded transition-colors duration-200 hover:bg-[#F2F3F4] hover:text-black
               ${(active === 6 || active=== 2 || active === 5 || active === 4 || isSettingsOpen) ? '' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
          >
            <div className="flex items-center space-x-2">
              <RiSettings3Line className="text-[19px]" />
              <h5 className='text-[15px]'>Settings</h5>
            </div>
            <IoIosArrowUp className={`transform transition-transform duration-300 text-[20px] ${isSettingsOpen ? 'rotate-180' : 'rotate-90'}`} />
          </button>

          {/* Sub-menu (Customize Page & Feature) */}
          {isSettingsOpen && (
            <div className="ml-4 mt-2 space-y-1">
              {/* Customize Page */}
              <div className="flex">
                <Link 
                  to={'/setting'} 
                  className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
                    ${active === 5 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
                >
                  <RiHome7Line className='text-[19px]' /> 
                  <h5 className='text-[15px]'>General</h5>
                </Link>
              </div>
              <div className="flex">
                <Link 
                  to={'/dashboard/customize-page'} 
                  className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
                    ${active === 2 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
                >
                  <RiHome7Line className='text-[19px]' /> 
                  <h5 className='text-[15px]'>Hero Customize</h5>
                </Link>
              </div>
              {/* aboutsu */}
              <div className="flex">
                <Link 
                  to={'/setting/about-us'} 
                  className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
                    ${active === 6 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
                >
                  <RiHome7Line className='text-[19px]' /> 
                  <h5 className='text-[15px]'>About Us</h5>
                </Link>
              </div>
              {/* Feature */}
              <div className="flex">
                <Link 
                  to={'/dashboard/feature'} 
                  className={`w-full flex items-center space-x-2 p-2.5 rounded transition-colors duration-200
                    ${active === 4 ? 'bg-[#696cff29] text-[#696cff]' : 'hover:bg-[#F2F3F4] hover:text-black'}`}
                >
                  <RiHome7Line className='text-[19px]' /> 
                  <h5 className='text-[15px]'>Feature</h5>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
