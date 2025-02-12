import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation speed
      once: true, // Run animation only once
      easing: "ease-in-out", // Smooth easing effect
    });
  }, []);

  return (
    <section
      className="testimonials section-padding"
      id="testimonials"
      data-scroll-index={4}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-aos="fade-up">
              <h4>Testimonials</h4>
              <h2>
                What our clients <span>say</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="testimonial-slider owl-carousel">
            {[
              {
                img: "https://i.postimg.cc/1fSSmLsR/1.jpg",
                name: "Brody Stevens",
                role: "Marketing Director",
                text: "Mark was hired to create a corporate identity. It's modern, clean, and with a beautiful design. He has a lot of experience and is very concerned about the needs of the client.",
              },
              {
                img: "https://i.postimg.cc/rzxcL86Y/2.jpg",
                name: "Ellena Evans",
                role: "Art Creative Director",
                text: "I couldn't be happier with the website that Richard created for us. His attention to detail and creativity is unmatched.",
              },
              {
                img: "https://i.postimg.cc/w7kp70jX/3.jpg",
                name: "Joshua Doe",
                role: "Marketing Director",
                text: "Working with Mark has been an absolute pleasure. I was impressed with his attention to detail and web design.",
              },
              {
                img: "https://i.postimg.cc/4YNTtVYr/4.jpg",
                name: "Jessica Miller",
                role: "Small Business Owner",
                text: "I was overwhelmed with the thought of redesigning my online store, but Mark made the process seamless. The site is not only visually appealing but also optimized for conversions.",
              },
            ].map((testimonial, index) => (
              <div
                className="testimonial-item"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200} // Delayed effect for each testimonial
              >
                <div className="img-box">
                  <img src={testimonial.img} alt="Client" />
                  <i className="fa-solid fa-quote-right" />
                </div>
                <p>{testimonial.text}</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
