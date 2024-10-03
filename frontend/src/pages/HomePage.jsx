import React from 'react'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import AboutUs from '../components/AboutUs.jsx'
import './HomePage.css'
const HomePage = () => {
  return (
    <div className='bg-image'>
        <Navbar/>
        <Hero/>
        <AboutUs/>
    </div>
  )
}

export default HomePage