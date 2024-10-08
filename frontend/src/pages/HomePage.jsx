import React, { useRef } from 'react'; // Import useRef
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Pricing from '../components/Pricing.jsx';
import FaqSection from '../components/FaqSection.jsx';
import Footer from '../components/Footer.jsx';
import './HomePage.css';
import Features from '../components/Features.jsx';
import { FaArrowUp } from "react-icons/fa";

const HomePage = () => {
  // Create refs for the Navbar and Hero sections
  const heroRef = useRef(null);
  const navbarRef = useRef(null);

  // Scroll to Navbar section
  const scrollToNavbar = () => {
    if (navbarRef.current) {
      navbarRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='bg-image'>
      {/* Arrow Up Button to Scroll to Hero */}
      <div onClick={scrollToNavbar} className="fixed right-0 m-7 p-6 z-50 bottom-0 bg-blue-500 rounded-full cursor-pointer">
        <FaArrowUp className="text-sm text-white sm:text-xl" />
      </div>
      <div ref={navbarRef}> 
        <Navbar />
      </div>
      <div ref={heroRef}> 
        <Hero />
      </div>
      <AboutUs />
      <Features />
      <Testimonials />
      <Pricing />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default HomePage;
