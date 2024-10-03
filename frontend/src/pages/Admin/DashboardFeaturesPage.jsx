import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
const DashboardFeaturesPage = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <div>
        <DashboardNavbar active={"Feature"} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode}/>
    </div>
  )
}

export default DashboardFeaturesPage