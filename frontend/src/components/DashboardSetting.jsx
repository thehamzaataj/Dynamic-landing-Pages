  import React from 'react';
  import DashboardNavbar from './Navbar/DashboardNavbar';
  // import ImageInput from '../components/Setting/ImageInput.jsx'
  import InputForm from '../components/Setting/InputForm.jsx'
  const DashboardSetting = ({ isDarkMode, ontoggleDarkMode }) => {
    return (
      <div>
      <div>
        <DashboardNavbar title="General Settings" subtitle="Settings" isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      </div>
      <div className="p-3 space-y-4">
      <h1 className='text-4xl font-bold text-[#696CFF]'>Customize Your Website</h1>
      {/* <ImageInput/> */}
      <InputForm  isDarkMode={isDarkMode}/>
      </div>
      </div>
    );
  };

  export default DashboardSetting;
