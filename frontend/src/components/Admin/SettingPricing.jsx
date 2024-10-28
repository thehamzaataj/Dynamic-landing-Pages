import React from "react";
import DashboardNavbar from "../Navbar/DashboardNavbar";
const SettingPricing = ({ isDarkMode, ontoggleDarkMode }) => {
  return (
    <div>
      <DashboardNavbar
        title="Pricing"
        subtitle="Setting"
        isDarkMode={isDarkMode}
        ontoggleDarkMode={ontoggleDarkMode}
      />
    </div>
  );
};

export default SettingPricing;
