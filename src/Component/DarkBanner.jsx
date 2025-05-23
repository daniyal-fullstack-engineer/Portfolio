import React, { useEffect, useState } from "react";
import AOS from "aos";
import MovingModel from "./MovingModel";

const DarkBanner = () => {
  const [laodModel, setLoadModel] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed in milliseconds
      once: true, // Animation runs once per element
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setLoadModel(false)
    }, 5000);
     
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home" id="home-section" data-scroll-index={0}>
      <div className="header-content-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="home-text" data-aos="fade-up">
                <h4>HELLO, I'M</h4>
                <h1>M Daniyal</h1>
                <p>A freelancer Full Stack & Javascript Developer</p>
                <div className="home-btn">
                  <a
                    href="#portfolio"
                    className="btn-1"
                    data-scroll-nav={3}
                    data-aos="fade-in"
                  >
                    View my Work
                  </a>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-lg-6">
              {/* <div className="home-imgs d-none d-lg-block" data-aos="zoom-in">
                <img src="https://i.postimg.cc/t4KV6Zhv/newcode.jpg" alt="daniyal" />
              </div> */}
              {laodModel ? 
              <div className="skeleton-circle"></div>
              :
              <MovingModel  />}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="header-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-social-icon">
                  <ul>
                    <li data-aos="fade-up">
                      <a
                        href="https://web.facebook.com/daniyal.amjadali/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    {/* <li data-aos="fade-up" data-aos-delay="200">
                      <a href="skype:live:.cid.f7da4c8189fede6e?chat" target="_blank">
                        <i className="fa-brands fa-skype" />
                      </a>
                    </li> */}
                    <li data-aos="fade-up" data-aos-delay="400">
                      <a href="https://github.com/daniyal-fullstack-engineer">
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="600">
                      {/* https://www.linkedin.com/in/m-daniyal-software-engineer/ */}
                      <a
                        href="https://www.linkedin.com/in/m-daniyal-software-engineer/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkBanner;
