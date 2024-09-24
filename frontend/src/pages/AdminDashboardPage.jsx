import React from 'react';
import AdminSidebar from '../components/Admin/Sidebar/AdminSideBar.jsx';
import './AdminDashboardPage.css';
import DashboardHero from '../components/Admin/DashboardHero.jsx'
const AdminDashboardPage = () => {
  return (
    <div className='bg-[#fbfbfb ] min-h-screen w-full'>
      <div className='w-[16.25rem] text-black  fixed'>
        <AdminSidebar active={1} />
      </div>
      <DashboardHero/>
    </div>
  );
}

export default AdminDashboardPage;
