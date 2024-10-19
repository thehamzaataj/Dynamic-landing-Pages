import React, { useRef, useState, useEffect } from "react";
import { RiHome7Line, RiNotificationLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const DashboardNavbar = ({ active, isDarkMode, ontoggleDarkMode }) => {
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNotificationDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full p-3 rounded-md sticky flex justify-between items-center  ${isDarkMode ? '' : 'bg-transparent'}`}>
      <div>
        <div className={`flex items-center space-x-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <Link to={"/dashboard"}>
            <RiHome7Line className="text-[15px]" />
          </Link>
          <span className="text-[15px]">/</span>
          <p className="text-[15px]">{active}</p>
        </div>
        <div className="pt-2">
          <h1 className={`text-${isDarkMode ? 'white' : 'black'} text-[16px] font-bold`}>{active}</h1>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <label className="inline-flex items-center cursor-pointer">
          <span className={`p-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={ontoggleDarkMode} 
            className="sr-only peer "
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>

        {/* Notification icon */}
        <div className="relative" ref={dropdownRef}>
          <RiNotificationLine
            className={`text-[20px] cursor-pointer ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            onClick={toggleNotificationDropdown}
          />
          {isNotificationDropdownOpen && (
            <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 z-50 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <p className={`px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                You have 3 new notifications
              </p>
              <ul>
                <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isDarkMode ? 'hover:bg-gray-600 text-white' : ''}`}>Notification 1</li>
                <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isDarkMode ? 'hover:bg-gray-600 text-white' : ''}`}>Notification 2</li>
                <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isDarkMode ? 'hover:bg-gray-600 text-white' : ''}`}>Notification 3</li>
              </ul>
            </div>
          )}
        </div>

        <UserButton />
      </div>
    </div>
  );
};

export default DashboardNavbar;
