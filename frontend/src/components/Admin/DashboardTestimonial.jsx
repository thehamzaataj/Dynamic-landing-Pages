import React from 'react'
import DashboardNavbar from '../Navbar/DashboardNavbar'
import InputTestimonialForm from '../../components/testimonial/InputTestimonialForm.jsx'
const DashboardTestimonial = ({isDarkMode ,ontoggleDarkMode}) => {
  return (
    <>
    <div >
        <DashboardNavbar title="Testimonial" subtitle="Setting" isDarkMode={isDarkMode} ontoggleDarkMode={ontoggleDarkMode} />
    </div>
    <div className="p-3 space-y-4">
      <h1 className='text-4xl font-bold text-[#696CFF]'>Customize Your About Us Page</h1>
      <InputTestimonialForm/>
      </div>
    </>
  )
}

export default DashboardTestimonial