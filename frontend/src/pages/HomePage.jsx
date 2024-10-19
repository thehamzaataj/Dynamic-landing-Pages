  import React, { useRef } from 'react'; 
  import Hero from '../components/Hero.jsx';
  import Navbar from '../components/Navbar/Navbar.jsx';
  import AboutUs from '../components/AboutUs.jsx';
  import Testimonials from '../components/Testimonials.jsx';
  import Pricing from '../components/Pricing.jsx';
  import FaqSection from '../components/FaqSection.jsx';
  import Footer from '../components/Footer.jsx';
  import './HomePage.css';
  import Features from '../components/Features.jsx';
  import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
  const HomePage = () => {
    const aboutUsRef = useRef(null);
    const featuresRef = useRef(null);
    const testimonialsRef = useRef(null);
    const pricingRef = useRef(null);
    const faqRef = useRef(null);
    const navbarRef = useRef(null);

    
    const scrollToNavbar = () => {
      if (navbarRef.current) {
        navbarRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <div className='bg-image'>
        <div onClick={scrollToTop} className="fixed right-0 m-7 p-6 z-50 bottom-0 bg-blue-500 rounded-full cursor-pointer">
          <FaArrowUp className="text-sm text-white sm:text-xl" />
        </div>

        <Navbar 
          refs={{ 
            navbarRef,
            aboutUsRef, 
            featuresRef, 
            testimonialsRef, 
            pricingRef, 
            faqRef 
          }} 
          scrollToNavbar={scrollToNavbar}
        />

        <div ref={navbarRef}><Hero /></div>
        <div ref={aboutUsRef}><AboutUs /></div>
        <div ref={featuresRef}><Features /></div>
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={pricingRef}><Pricing /></div>
        <div ref={faqRef}><FaqSection /></div>
        <Footer />
        <Link to={'/dashboard'}><a>Dashboard</a></Link>
      </div>
    );
  }

  export default HomePage;
