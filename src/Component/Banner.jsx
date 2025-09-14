import React from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";

const Banner = () => {
  return (
    <section className="home" id="home" data-scroll-index={0}>
      <div className="header-content d-flex align-items-center">
        <div id="parallax">
          <div className="header-shape shape-one" data-depth="0.10">
            <img src="https://i.postimg.cc/J7bRR2cK/shape-1.png" alt="Decorative geometric shape for portfolio background" />
          </div>
          <div className="header-shape shape-two" data-depth="0.30">
            <img src="https://i.postimg.cc/437TqLx6/shape-2.png" alt="Decorative floating shape element" />
          </div>
          <div className="header-shape shape-three" data-depth="0.40">
            <img src="https://i.postimg.cc/63Cx58RT/shape-3.png" alt="Background decoration shape" />
          </div>
          <div className="header-shape shape-four" data-depth="0.60">
            <img src="https://i.postimg.cc/437TqLx6/shape-2.png" alt="Decorative floating shape element" />
          </div>
          <div className="header-shape shape-five" data-depth="0.20">
            <img src="https://i.postimg.cc/J7bRR2cK/shape-1.png" alt="Decorative geometric shape for portfolio background" />
          </div>
          <div className="header-shape shape-six" data-depth="0.15">
            <img src="https://i.postimg.cc/bNyfpNvN/shape-4.png" alt="Portfolio background decoration" />
          </div>
          <div className="header-shape shape-seven" data-depth="0.50">
            <img src="https://i.postimg.cc/9FL5M54P/shape-5.png" alt="Portfolio visual element" />
          </div>
          <div className="header-shape shape-eight" data-depth="0.40">
            <img src="https://i.postimg.cc/63Cx58RT/shape-3.png" alt="Background decoration shape" />
          </div>
          <div className="header-shape shape-nine" data-depth="0.20">
            <img src="https://i.postimg.cc/sgLkYY4v/shape-6.png" alt="Design decoration element" />
          </div>
          <div className="header-shape shape-ten" data-depth="0.30">
            <img src="https://i.postimg.cc/63Cx58RT/shape-3.png" alt="Background decoration shape" />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="home-text">
                <h4>HELLO, I'M</h4>
                <h1>Hamid Raza</h1>
                <p>A freelancer UI Designer & Web Developer</p>
                <div className="home-btn">
                  <a href="#portfolio" className="btn-1" data-scroll-nav={3}>
                    View my Work
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-img d-none d-lg-block">
                <ImageWithSkeleton
                  src="https://i.postimg.cc/PqZ3bt0G/profile-pic.png"
                  alt="M Daniyal - Full Stack Developer Profile Picture"
                  className="w-full h-auto rounded-lg shadow-lg"
                  skeletonClassName="w-full h-64 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="header-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-social-icon">
                  <ul>
                    <li>
                      <a href="https://web.facebook.com/profile.php?id=61557173073729" target="_blank">
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="skype:live:.cid.f7da4c8189fede6e?chat" target="_blank">
                        <i className="fa-brands fa-skype" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/muhammad-hamid-raza-front-end-engineer/" target="_blank">
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

export default Banner;
