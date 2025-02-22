import React, { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation speed (smooth transition)
      once: true, // Animation triggers only once
      easing: "ease-in-out", // Smooth easing
    });
  }, []);

  return (
    <section className="about-area section-padding" id="about" data-scroll-index={1}>
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-aos="fade-up">
              <h4>About</h4>
              <h2>
                Personal <span>Details</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6" data-aos="fade-up">
            <div className="about-content">
              <h5 className="about-title">
                I'm <span>M Daniyal</span> and I'm a Web and App Developer
              </h5>
              <p className="details">
                I am a results-driven Web & App Developer specializing in
                building high-performance digital solutions...
              </p>
              <ul>
                <li data-aos="fade-up">
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-calendar" />
                    </div>
                    <div className="info-text">
                      <p><span>Date of Birth:</span> 21 July 1998</p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="info-text">
                      <p><span>Email:</span> daniyalamjadali@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="info-text">
                      <p><span>Phone:</span> +923045485310</p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-map-marker" />
                    </div>
                    <div className="info-text">
                      <p><span>Location:</span> Lahore</p>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="#contact" className="hire-me" data-scroll-nav={6} data-aos="zoom-in">
                Hire me
              </a>
            </div>
          </div>

          {/* Right Skills Section */}
          <div className="col-lg-6 col-xl-5 offset-xl-1" data-aos="fade-down">
            <div id="skill-bar-wrapper">
              <div className="text-left">
                <h4 data-aos="zoom-in">
                  HTML5 /CSS <span style={{ float: "right" }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>

                <h4 data-aos="zoom-in" data-aos-delay="100">
                  Sass <span style={{ float: "right" }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>

                <h4 data-aos="zoom-in" data-aos-delay="200">
                  Bootstrap / Tailwind <span style={{ float: "right" }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>

                <h4 data-aos="zoom-in" data-aos-delay="300">
                  React JS / Next Js <span style={{ float: "right" }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>

                <h4 data-aos="zoom-in" data-aos-delay="400">
                  Node Js <span style={{ float: "right" }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>

                <h4 data-aos="zoom-in" data-aos-delay="500">
                  Mongoose DB <span style={{ float: "right" }}>90%</span>
                </h4>
                <div className="skillbar-container" data-percent="90%">
                  <div className="skills" />
                </div>

                <h4 data-aos="zoom-in" data-aos-delay="600">
                  React Native <span style={{ float: "right" }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>

                <h4 data-aos="zoom-in" data-aos-delay="700">
                  Firebase <span style={{ float: "right" }}>80%</span>
                </h4>
                <div className="skillbar-container" data-percent="80%">
                  <div className="skills" />
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default About;
