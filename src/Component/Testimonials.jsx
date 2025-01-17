import React from 'react'

export default function Testimonials() {
  return (
    <section
    className="testimonials section-padding"
    id="testimonials"
    data-scroll-index={4}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title">
            <h4>Testimonials</h4>
            <h2>
              What our clients <span>say</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="testimonial-slider owl-carousel">
          <div className="testimonial-item">
            <div className="img-box">
              <img src="https://i.postimg.cc/1fSSmLsR/1.jpg" alt="image" />
              <i className="fa-solid fa-quote-right" />
            </div>
            <p>
              Mark was hired to create a corporate identity. It's modern, clean
              and with a beautiful design. He has a lot of experience and is very
              concerned about the needs of client
            </p>
            <h3>Brody Stevens</h3>
            <span>Marketing Director</span>
            <div className="rating">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-box">
              <img src="https://i.postimg.cc/rzxcL86Y/2.jpg" alt="image" />
              <i className="fa-solid fa-quote-right" />
            </div>
            <p>
              I couldn't be happier with the website that Richard created for us.
              His attention to detail and creativity is unmatched
            </p>
            <h3>Ellena Evans</h3>
            <span>Art Creative Director</span>
            <div className="rating">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-box">
              <img src="https://i.postimg.cc/w7kp70jX/3.jpg" alt="image" />
              <i className="fa-solid fa-quote-right" />
            </div>
            <p>
              Working with Mark has been an absolute pleasure. I was impressed
              with his attention to detail, his web design
            </p>
            <h3>Joshua Doe</h3>
            <span>Marketing Director</span>
            <div className="rating">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-box">
              <img src="https://i.postimg.cc/4YNTtVYr/4.jpg" alt="image" />
              <i className="fa-solid fa-quote-right" />
            </div>
            <p>
              I was overwhelmed with the thought of redesigning my online store,
              but Mark made the process seamless. The site is not only visually
              appealing but also optimized for conversions
            </p>
            <h3>Jessica Miller</h3>
            <span>Small Business Owner</span>
            <div className="rating">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
