import React from 'react'
import DashboardNavbar from './Navbar/DashboardNavbar'
import InputFormAU from "../components/Aboutus/InputFormAU.jsx"
const DashboardAu = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <div>
      <div>
        <DashboardNavbar title="About Us Customize" subtitle="Settings" isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
      <div className="p-3 space-y-4">
      <h1 className='text-4xl font-bold text-[#696CFF]'>Customize Your About Us Page</h1>
      <InputFormAU/>
      </div>
      </div>
  )
}

export default DashboardAu