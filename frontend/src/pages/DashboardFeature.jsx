import React from 'react'
import AdminSideBar from '../components/Admin/Sidebar/AdminSideBar'
const DashboardFeature = () => {
  return (
    <div>
    <div className='bg-[#fbfbfb ] min-h-screen w-full'>
      <div className='w-[16.25rem] text-black  fixed'>
        <AdminSideBar active={2} />
      </div>
    </div>
    </div>
  )
}

export default DashboardFeature