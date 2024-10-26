import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import InputForm from '../../components/HeroCustomize/InputForm'
const DashboardCustomizeHero = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <>
    <div>
    <DashboardNavbar title="Hero Customize" subtitle=" Settings" isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode}/>
    </div>
    <div className='p-3 space-y-4'>
      <h1 className='text-4xl font-bold text-[#696CFF]'>Customize Your Hero Page</h1>
      <div>
      <InputForm/>
      </div>
      
    </div>
    </>
  )
}

export default DashboardCustomizeHero