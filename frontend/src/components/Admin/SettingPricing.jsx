import React from "react";
import DashboardNavbar from "../Navbar/DashboardNavbar";
import PricingInputForm from '../pricing/PricingInputForm.jsx'
const SettingPricing = ({ isDarkMode, ontoggleDarkMode }) => {
  return (
    <>
    <div>
      <DashboardNavbar
        title="Pricing"
        subtitle="Setting"
        isDarkMode={isDarkMode}
        ontoggleDarkMode={ontoggleDarkMode}
      />
    </div>
    <div className="p-3 space-y-4">
      <h1 className='text-4xl font-bold text-[#696CFF]'>Customize Your Pricing Page</h1>
      <PricingInputForm/>
      </div>
   
    </>
  );
};

export default SettingPricing;
