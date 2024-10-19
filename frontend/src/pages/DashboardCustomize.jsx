import React from 'react'
import AdminSideBar from '../components/Admin/Sidebar/AdminSideBar'
import DashboardCustomizePage from './Admin/DashboardCustomizePage'

const DashboardCustomize = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-[#000000e9] text-white' : 'bg-[#fbfbfb] text-black'}`}>
      <div className='w-[16.25rem] text-black fixed h-full'>
        <AdminSideBar active={2} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode}/>
      </div>
      <div className='ml-[16.25rem] flex-1 p-6'>
        <DashboardCustomizePage isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
    </div>
  )
}

export default DashboardCustomize