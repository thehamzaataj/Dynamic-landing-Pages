import React from 'react'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Pricing from '../components/Pricing.jsx'
import FaqSection from '../components/FaqSection.jsx'
import Footer from '../components/Footer.jsx'
import './HomePage.css'
import Features from '../components/Features.jsx'
const HomePage = () => {
  return (
    <div className='bg-image'>
      <div className=""></div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Features/>
        <Testimonials/>
        <Pricing/>
        <FaqSection/>
        <Footer/>
    </div>
  )
}

export default HomePage