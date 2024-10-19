import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import InputForm from '../../components/Customize/InputForm.jsx'
const DashboardCustomizePage = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <>
    <div>
    <DashboardNavbar active={"Customize Page"} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode}/>
    </div>
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>Customize Your Website</h1>
      <div>
      <InputForm/>
      </div>
      
    </div>
    </>
  )
}

export default DashboardCustomizePage