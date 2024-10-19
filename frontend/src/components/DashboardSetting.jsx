import React from 'react';
import DashboardNavbar from './Navbar/DashboardNavbar';
const DashboardSetting = ({ isDarkMode, ontoggleDarkMode }) => {
  return (
    <div>
    <div>
      <DashboardNavbar title="General Settings" subtitle="Settings" isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
    </div>
    </div>
  );
};

export default DashboardSetting;
