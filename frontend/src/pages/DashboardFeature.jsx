import React from 'react';
import AdminSideBar from '../components/Admin/Sidebar/AdminSideBar';
import DashboardFeaturePage from '../pages/Admin/DashboardFeaturesPage';

const DashboardFeature = ({ isDarkMode, ontoggleDarkMode }) => {
  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-[#000000e9] text-white' : 'bg-[#fbfbfb] text-black'}`}>
      <div className='w-[16.25rem] text-black fixed h-full'>
        <AdminSideBar active={4} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode}/>
      </div>
      <div className='ml-[16.25rem] flex-1 p-6'>
        <DashboardFeaturePage isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
    </div>
  );
};

export default DashboardFeature;
