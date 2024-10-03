import React from 'react'
import HeroTotalUser from './HeroTotalUser.jsx'
import DashboardNavbar from '../Navbar/DashboardNavbar';
import TrafficChart from './AnalyticsChart/TrafficChart.jsx';
import TotalUser from './AnalyticsChart/TotalUser.jsx';
import LeadsChart from './AnalyticsChart/LeadsChart.jsx';

const DashboardHero = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <div className=''>
      <div>
      <DashboardNavbar active={"Dashboard"} isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
      <HeroTotalUser isDarkMode={isDarkMode}/>
      <div className='flex mt-6' >
      <LeadsChart isDarkMode={isDarkMode}/>
      <TotalUser className="mr-6"isDarkMode={isDarkMode} />
      </div>


    </div>
  )
}

export default DashboardHero