import React from "react";
import Header from "../Component/Header";
import Banner from "../Component/Banner";
import WhatAppIcon from "../Component/WhatAppIcon";
import BackToTop from "../Component/BackToTop";
import Footer from "../Component/Footer";
import About from "../Component/About";
import Services from "../Component/Services";
import HireMe from "../Component/HireMe";
import Portfolio from "../Component/Portfolio";
import Testimonials from "../Component/Testimonials";
import Pricing from "../Component/Pricing";
import Faq from "../Component/Faq";
import Contact from "../Component/Contact";
import { FadeInSection } from "../Component/FadeIn";

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="navbar-section">
        <Header />
      </div>
      <div className="banner-section">
        <Banner />
      </div>
      <div className="about-section">
        <FadeInSection>
          <About />
        </FadeInSection>
      </div>
      <div className="Service-section">
        <FadeInSection>
          <Services />
        </FadeInSection>
      </div>
      <div className="portfolio-section">
        <FadeInSection>
          <Portfolio />
        </FadeInSection>
      </div>
      <div className="hire-me-section">
        <FadeInSection>
          <HireMe />
        </FadeInSection>
      </div>
      <div className="testimonial-section">
      <FadeInSection>
        <Testimonials />
        </FadeInSection>
      </div>
      <div className="pricing-section">
      <FadeInSection>
        <Pricing />
        </FadeInSection>
      </div>
      <div className="fag-section">
      <FadeInSection>
        <Faq />
        </FadeInSection>
      </div>
      <div className="contact-section">
      <FadeInSection>
        <Contact />
        </FadeInSection>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
      <div className="backtotop-section">
        <BackToTop />
      </div>
      <div className="WhattAppIcon-section">
        <WhatAppIcon />
      </div>
    </div>
  );
};

export default Home;
