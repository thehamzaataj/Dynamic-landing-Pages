import React from 'react';
import AdminSidebar from '../components/Admin/Sidebar/AdminSideBar.jsx';
import DashboardHero from '../components/Admin/DashboardHero.jsx'
const AdminDashboardPage = ({ isDarkMode, ontoggleDarkMode }) => { 
  return (
    <div className={`min-h-screen  flex   ${isDarkMode ? 'bg-[#000000e9] text-white' : 'bg-[#f5f5f9] text-black'}`}>
      <div className='w-[16.25rem] fixed h-full'>
        <AdminSidebar active={1} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>

      <div className='ml-[16.25rem] flex-1 p-6'>
        <DashboardHero isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
    </div>
  );
}

export default AdminDashboardPage;
