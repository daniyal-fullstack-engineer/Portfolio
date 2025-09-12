import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import WhatAppIcon from '../Component/WhatAppIcon';
import ScrollToTop from '../Component/ScrollToTop';
import CustomCursor from '../Component/CustomCursor';
import ParticleBackground from '../Component/ParticleBackground';
import MobileGestures from '../Component/MobileGestures';
import PWA from '../Component/PWA';
import ToastContainer from '../Component/ToastContainer';
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
import "aos/dist/aos.css";
import FiverrIcon from '../Component/FiverrIcon';


// useEffect(() => {
//   setTimeout(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, 100); // Small delay to ensure smooth scroll works properly
// }, []);

const Home = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Make Lenis globally available
    window.lenis = lenis;

    // Lenis animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis updates
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className='main-wrapper custom-cursor min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300'>
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Mobile Gestures */}
      <MobileGestures />
      
      {/* PWA Install Prompt */}
      <PWA />
      
      {/* Toast Notifications */}
      <ToastContainer />
      
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
  );
};

export default Home;
