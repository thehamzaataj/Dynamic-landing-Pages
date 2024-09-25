import React from 'react';
import AdminSideBar from '../components/Admin/Sidebar/AdminSideBar';
import DashboardFeaturePage from '../pages/Admin/DashboardFeaturesPage';

const DashboardFeature = () => {
  return (
    <div className='bg-[#fbfbfb] min-h-screen flex'>
      {/* Sidebar */}
      <div className='w-[16.25rem] text-black fixed h-full'>
        <AdminSideBar active={2} />
      </div>

      {/* Content */}
      <div className='ml-[16.25rem] flex-1 p-6'>
        <DashboardFeaturePage />
      </div>
    </div>
  );
};

export default DashboardFeature;
