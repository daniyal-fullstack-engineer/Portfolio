import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import WhatAppIcon from '../Component/WhatAppIcon';
import ScrollToTop from '../Component/ScrollToTop';
import ParticleBackground from '../Component/ParticleBackground';
import MobileGestures from '../Component/MobileGestures';
import PWA from '../Component/PWA';
import { ToastProvider } from '../Component/ToastContainer';
import Footer from '../Component/Footer';
import About from '../Component/About';
import Services from '../Component/Services';
import HireMe from '../Component/HireMe';
import Portfolio from '../Component/Portfolio';
import Testimonials from '../Component/Testimonials';
import Pricing from '../Component/Pricing';
import Faq from '../Component/Faq';
import Contact from '../Component/Contact';
import DarkBanner from '../Component/DarkBanner';
import FormTesting from '../Component/FormTesting';
import useCustomUltraSmoothScroll from '../hooks/useCustomUltraSmoothScroll';
import useUltraSmoothPerformance from '../hooks/useUltraSmoothPerformance';
import FiverrIcon from '../Component/FiverrIcon';
import { generatePortfolioStructuredData, generateWebsiteStructuredData } from '../utils/seoData';
import UltraSmoothLoader from '../Component/UltraSmoothLoader';
import BackgroundAnimations from '../Component/BackgroundAnimations';


// useEffect(() => {
//   setTimeout(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, 100); // Small delay to ensure smooth scroll works properly
// }, []);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize custom ultra-smooth scroll and performance optimizations
  useCustomUltraSmoothScroll();
  useUltraSmoothPerformance();

  useEffect(() => {
    // Ultra-smooth scroll to top on mount
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  const handleLoaderComplete = () => {
    // Ultra-smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  return (
    <ToastProvider>
      {/* Loader */}
      {isLoading && <UltraSmoothLoader onComplete={handleLoaderComplete} />}
      
          <div className={`main-wrapper scrollable-content min-h-screen bg-slate-900 dark:bg-slate-900 transition-all duration-1000 ease-out ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Background Animations */}
            <BackgroundAnimations />
            
            {/* Particle Background */}
            <ParticleBackground />
      
      
      {/* Mobile Gestures */}
      <MobileGestures />
      
      {/* PWA Install Prompt */}
      <PWA />
      
      {/* <FormTesting /> */}
      <div className='navbar-section'>
      <Header />
      </div>
      {/* <div className='banner-section'>
        <Banner />
      </div> */}
      <div className='darkbanner-section -mt-0'>
        <DarkBanner />
      </div>
      <div className='about-section'>
        <About />
      </div>
      <div className='Service-section'>
       <Services />
      </div>
      <div className='portfolio-section'>
       <Portfolio />
      </div> 
      <div className='hire-me-section'>
     <HireMe />
      </div>
      <div className='testimonial-section'>
      <Testimonials />
      </div>
      <div className='pricing-section'>
       <Pricing />
      </div>
      <div className='fag-section'>
       <Faq />
      </div>
      <div className='contact-section'>
       <Contact />
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
      <div className='backtotop-section'>
       <ScrollToTop />
      </div>
        {/* Floating Social Icons */}
        <FiverrIcon />
        <WhatAppIcon />
      </div>
    </ToastProvider>
  );
};

export default Home;
