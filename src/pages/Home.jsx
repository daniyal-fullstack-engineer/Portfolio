import React from 'react';
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import WhatAppIcon from '../Component/WhatAppIcon';



const Home = () => {
  return (
    <div className='main-wrapper'>
      <div className='navbar-section'>
      <Header />
      </div>
      <div className='banner-section'>
        <Banner />
      </div>
      <div className='backtotop-section'>
       
      </div>
      <div className='WhattAppIcon-section'>
      <WhatAppIcon />
      </div>
    </div>
  );
};

export default Home;
