import React from 'react';
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import WhatAppIcon from '../Component/WhatAppIcon';
import BackToTop from '../Component/BackToTop';
import Footer from '../Component/Footer';
import About from '../Component/About';



const Home = () => {
  return (
    <div className='main-wrapper'>
      <div className='navbar-section'>
      <Header />
      </div>
      <div className='banner-section'>
        <Banner />
      </div>
      <div className='about-section'>
        <About />
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
      <div className='backtotop-section'>
       <BackToTop />
      </div>
      <div className='WhattAppIcon-section'>
      <WhatAppIcon />
      </div>
    </div>
  );
};

export default Home;
