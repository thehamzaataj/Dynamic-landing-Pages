import React from 'react';
import AdminSidebar from '../components/Admin/Sidebar/AdminSideBar.jsx';
import './AdminDashboardPage.css';
import DashboardHero from '../components/Admin/DashboardHero.jsx'

const AdminDashboardPage = () => {
  return (
    <div className="bg-[#fbfbfb] min-h-screen flex" >
      <div className='w-[16.25rem] text-black fixed  h-full'>
        <AdminSidebar active={1} />
      </div>

      <div className='ml-[16.25rem] flex-1 p-6'>
        <DashboardHero />
      </div>
    </div>
  );
}

export default AdminDashboardPage;
