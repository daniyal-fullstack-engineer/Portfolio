import React from "react";

const DarkBanner = () => {
  return (
    <section
      className="home"
      id="home-section"
      data-scroll-index={0}
    >
      <div className="header-content-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="home-text">
                <h4 >HELLO, I'M</h4>
                <h1 >M Daniyal</h1>
                <p >A freelancer Full Stack & Javascript Developer</p>
                <div className="home-btn">
                  <a href="#portfolio" className="btn-1" data-scroll-nav={3}>
                    View my Work
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-imgs d-none d-lg-block">
                <img
                  src="https://i.postimg.cc/t4KV6Zhv/newcode.jpg"
                  alt="daniyal"
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
                      <a
                        href="https://web.facebook.com/daniyal.amjadali/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="skype:live:.cid.f7da4c8189fede6e?chat" target="_blank">
                        <i className="fa-brands fa-skype" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/daniyal-sudo">
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/m-daniyal-amjad-ali-software-engineer/"
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
