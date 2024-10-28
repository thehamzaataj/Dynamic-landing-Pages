import React from 'react'
import AdminSideBar from '../components/Admin/Sidebar/AdminSideBar'
import SettingPricing from '../components/Admin/SettingPricing.jsx'
const AdminSettingPricingPage = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <div className={`min-h-screen  flex   ${isDarkMode ? 'bg-[#000000e9] text-white' : 'bg-[#f5f5f9] text-black'}`}>
      <div className='w-[16.25rem] fixed h-full'>
        <AdminSideBar active={8} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
      <div  className='ml-[16.25rem] flex-1 p-6'>
        <SettingPricing isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode}/>
      </div>
      
    </div>
  )
}

export default AdminSettingPricingPage