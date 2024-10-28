import React from 'react'
import DashboardNavbar from './Navbar/DashboardNavbar'

const AdminDashboardFaqs = ({isDarkMode,ontoggleDarkMode}) => {
  return (
    <div>
      <DashboardNavbar
        title="Faqs"
        subtitle="Setting"
        isDarkMode={isDarkMode}
        ontoggleDarkMode={ontoggleDarkMode}
      />
    </div>
  )
}

export default AdminDashboardFaqs