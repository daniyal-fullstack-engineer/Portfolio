import React from 'react'

export default function Contact() {
  return (
    <div className="faq section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title">
            <h4>FAQ's</h4>
            <h2>
              Frequently <span>asked</span> queries
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div id="accordion">
            <div className="accordion-item">
              <div
                className="accordion-header collapsed"
                data-toggle="collapse"
                data-target="#collapse-01"
              >
                <h3>100% Fluid Responsive - Fits any device perfectly</h3>
              </div>
              <div
                className="collapse show"
                id="collapse-01"
                data-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Your website will seamlessly adjust to fit any device
                    perfectly, providing an optimal viewing experience for users.
                    Whether on a smartphone, tablet, or desktop, content will be
                    displayed beautifully and legibly, enhancing accessibility and
                    user satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header collapsed"
                data-toggle="collapse"
                data-target="#collapse-02"
              >
                <h3>Clean Code</h3>
              </div>
              <div
                className="collapse "
                id="collapse-02"
                data-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    My code is easy to read, understand, and maintain. It
                    emphasizes clarity and simplicity, allowing others to work
                    efficiently and collaboratively. I follow the best practices
                    such as meaningful naming conventions and proper organization
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header collapsed"
                data-toggle="collapse"
                data-target="#collapse-03"
              >
                <h3>Flat, Modern and Clean Design</h3>
              </div>
              <div
                className="collapse "
                id="collapse-03"
                data-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    I emphasize simplicity and functionality, focusing on
                    minimalistic elements and a user-friendly interface. This
                    approach eliminates unnecessary distractions, allowing users
                    to navigate effortlessly while enjoying a visually pleasing
                    experience
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header collapsed"
                data-toggle="collapse"
                data-target="#collapse-04"
              >
                <h3>Custom Font Support</h3>
              </div>
              <div
                className="collapse "
                id="collapse-04"
                data-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    I use unique typefaces that enhance the aesthetics and
                    branding of a website. By utilizing the @font-face rule in
                    CSS, I can load fonts from various sources, ensuring that text
                    appears consistently across different devices and browsers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
