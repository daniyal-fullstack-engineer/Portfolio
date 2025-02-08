import React from "react";

const About = () => {
  return (
    <section
      className="about-area section-padding"
      id="about"
      data-scroll-index={1}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h4>About</h4>
              <h2>
                Personal <span>Details</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <h5 className="about-title">
                I'm <span>M Daniyal</span> and I'm a Web and App Developer
              </h5>
              <p className="details">
                I am a results-driven Web & App Developer specializing in
                building high-performance digital solutions. With expertise in
                React.js, Next.js, and Node.js, I craft seamless, responsive,
                and scalable web applications. For mobile, I leverage React
                Native to create intuitive and cross-platform experiences. My
                passion lies in transforming ideas into visually stunning and
                functional products that enhance user engagement. Whether it's a
                sleek website, a dynamic web app, or a powerful mobile
                application, I ensure top-tier performance, usability, and
                innovation. Let’s build something amazing together!
              </p>
              <ul>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-calendar" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Date of Birth:</span> 14 September 2003
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Email:</span> daniyalamjadali@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Phone:</span> +923045485310
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-map-marker" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Location:</span> Lahore
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-university" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Degree:</span>
                        <abbr
                          title="Associate Web Designer"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          MCS
                        </abbr>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon text-center">
                      <i className="fa-solid fa-user" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Website:</span> www.digitalmindson.com
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="#contact" className="hire-me" data-scroll-nav={6}>
                Hire me
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div id="skill-bar-wrapper">
              <div className="text-left">
                <h4>
                  HTML5 /CSS <span style={{ float: "right" }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>
                <h4>
                Sass
                  <span style={{ float: "right" }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>
                <h4>
                  Sass <span style={{ float: "right" }}>90%</span>
                </h4>
                <div className="skillbar-container" data-percent="90%">
                  <div className="skills" />
                </div>
                <h4>
                  Bootstrap / Tailwind <span style={{ float: "right" }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>
                <h4>
                  React JS / Next Js <span style={{ float: "right" }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>
                <h4>
                  Node Js<span style={{ float: "right" }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>
                <h4>
                  Mongoose DB <span style={{ float: "right" }}>90%</span>
                </h4>
                <div className="skillbar-container" data-percent="90%">
                  <div className="skills" />
                </div>
                <h4>
                  React Ntive <span style={{ float: "right" }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>
                <h4>
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
