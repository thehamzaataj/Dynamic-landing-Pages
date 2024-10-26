import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import FeatureInputForm from '../../components/feature/FeatureInputForm.jsx'
const DashboardFeaturesPage = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <>
    <div>
        <DashboardNavbar title="Feature" subtitle=" Settings" isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode}/>
    </div>
    <div className='p-3 space-y-4'>
      <h1 className='text-4xl font-bold text-[#696CFF]'>Customize Your Feature Page</h1>
      <FeatureInputForm/>
    </div>
    </>
  )
}

export default DashboardFeaturesPage