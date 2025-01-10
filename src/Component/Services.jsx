import React from 'react'

export default function Services() {
  return (
    <section
    className="services section-padding"
    id="services"
    data-scroll-index={2}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title">
            <h4>Services</h4>
            <h2>
              Services <span>that I can provide for you</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="service-item">
            <div className="icon">
              <i className="fa-solid fa-laptop" />
            </div>
            <h3>Web Design</h3>
            <p>
              By understanding your needs and goals, I translate those into
              wireframes and mockups by blending artistic vision with technical
              skills to craft user-friendly and visually appealing online
              experiences
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item">
            <div className="icon">
              <i className="fa-solid fa-edit" />
            </div>
            <h3>Video Editing</h3>
            <p>
              By understanding of visual composition, color theory, and typography
              I can create for you engaging title cards, design animated
              transitions, or choose appropriate background music to match the
              video's tone
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item">
            <div className="icon">
              <i className="fa-solid fa-code" />
            </div>
            <h3>Video Editing</h3>
            <p>
              I can create wireframes and prototypes that outline the layout and
              user interface element. Also I ensure that the website looks good
              across different devices and browsers, blending design and
              functionality
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item">
            <div className="icon">
              <i className="fa-solid fa-paint-brush" />
            </div>
            <h3>Graphic Design</h3>
            <p>
              With the goal to create compelling visual elements for websites, I
              can design logos, icons, illustrations, and other visual assets that
              enhance the website's branding and aesthetic appeal
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item">
            <div className="icon">
              <i className="fa-solid fa-bullhorn" />
            </div>
            <h3>Digital Marketing</h3>
            <p>
              In digital marketing, I play a vital role for your website, by
              enhancing visual aesthetics, user experience,{" "}
              <abbr title="Search Engine Optimization">SEO</abbr>, responsive
              design and mainly conversion optimization
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item">
            <div className="icon">
              <i className="fa-solid fa-mobile" />
            </div>
            <h3>Android Development</h3>
            <p>
              I can create visually appealing and intuitive Android app
              interfaces, by designing app layouts, navigation menus, buttons and
              icons, ensuring a cohesive and user-friendly experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
