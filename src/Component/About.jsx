import React from 'react';

const About = () => {
  return (
    <section className="about-area section-padding" id="about" data-scroll-index={1}>
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
                I'm <span>Hamid Raza</span> and I'm a Web Designer
              </h5>
              <p className="details">
                I am a passionate web designer with a love for creating beautiful
                and functional websites. I enjoy working with HTML, CSS, and
                JavaScript to bring ideas to life and enhance user experiences. In
                my free time, I like to explore new design trends and work on
                personal projects that challenge my creativity.
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
                        <span>Email:</span> hamidraza7614@gmail.com
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
                        <span>Phone:</span> +923227588875
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
                        <span>Location:</span> B Block Township Lahore
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
                        <abbr title="Associate Web Designer"> Associate Web Designer</abbr>
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
                  HTML5 <span style={{ float: 'right' }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>
                <h4>
                  CSS3 <span style={{ float: 'right' }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>
                <h4>
                  Sass <span style={{ float: 'right' }}>90%</span>
                </h4>
                <div className="skillbar-container" data-percent="90%">
                  <div className="skills" />
                </div>
                <h4>
                  Bootstrap 3/4/5 <span style={{ float: 'right' }}>100%</span>
                </h4>
                <div className="skillbar-container" data-percent="100%">
                  <div className="skills" />
                </div>
                <h4>
                  React JS <span style={{ float: 'right' }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>
                <h4>
                  JQuery <span style={{ float: 'right' }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>
                <h4>
                  JavaScript <span style={{ float: 'right' }}>90%</span>
                </h4>
                <div className="skillbar-container" data-percent="90%">
                  <div className="skills" />
                </div>
                <h4>
                  Canva <span style={{ float: 'right' }}>95%</span>
                </h4>
                <div className="skillbar-container" data-percent="95%">
                  <div className="skills" />
                </div>
                <h4>
                  Adobe Photoshop <span style={{ float: 'right' }}>80%</span>
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
