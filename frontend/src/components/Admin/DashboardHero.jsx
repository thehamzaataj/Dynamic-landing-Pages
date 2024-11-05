import HeroTotalUser from './HeroTotalUser.jsx';
import DashboardNavbar from '../Navbar/DashboardNavbar';
import TotalUser from './AnalyticsChart/TotalUser.jsx';
import LeadsChart from './AnalyticsChart/LeadsChart.jsx';
import ProductTable from '../Admin/ProductTable.jsx';

const DashboardHero = ({ isDarkMode, ontoggleDarkMode }) => {
  return (
    <div>
      <DashboardNavbar title="Dashboard" subtitle="Home" isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
      <HeroTotalUser isDarkMode={isDarkMode} />
      <div className='flex mt-6'>
        <LeadsChart isDarkMode={isDarkMode} />
        <TotalUser className="mr-6" isDarkMode={isDarkMode} />
      </div>
      <div>
        <ProductTable isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default DashboardHero;
