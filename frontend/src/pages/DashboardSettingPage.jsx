import React from 'react'
import AdminSidebar from '../components/Admin/Sidebar/AdminSideBar.jsx'
import DashboardSetting from '../components/DashboardSetting.jsx'

const DashboardSettingPage = ({ isDarkMode, ontoggleDarkMode }) => {
  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-[#000000e9] text-white' : 'bg-[#f5f5f9] text-black'}`}>
      <div className='w-[16.25rem] fixed h-full'>
        <AdminSidebar active={5} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
      <div className='ml-[16.25rem] flex-1 p-6'>
        <DashboardSetting isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
    </div>
  )
}

export default DashboardSettingPage
