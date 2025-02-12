import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation speed
      once: true, // Run animation only once
      easing: "ease-in-out", // Smooth easing effect
    });
  }, []);

  return (
    <div className="faq section-padding" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-aos="fade-up">
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
              {[
                {
                  id: "collapse-01",
                  title: "100% Fluid Responsive - Fits any device perfectly",
                  content:
                    "Your website will seamlessly adjust to fit any device perfectly, providing an optimal viewing experience for users...",
                  delay: 200,
                },
                {
                  id: "collapse-02",
                  title: "Clean Code",
                  content:
                    "My code is easy to read, understand, and maintain. It emphasizes clarity and simplicity, allowing others to work efficiently...",
                  delay: 400,
                },
                {
                  id: "collapse-03",
                  title: "Flat, Modern and Clean Design",
                  content:
                    "I emphasize simplicity and functionality, focusing on minimalistic elements and a user-friendly interface...",
                  delay: 600,
                },
                {
                  id: "collapse-04",
                  title: "Custom Font Support",
                  content:
                    "I use unique typefaces that enhance the aesthetics and branding of a website. By utilizing the @font-face rule in CSS...",
                  delay: 800,
                },
              ].map((faq, index) => (
                <div
                  className="accordion-item"
                  data-aos="zoom-in"
                  data-aos-delay={faq.delay}
                  key={index}
                >
                  <div
                    className="accordion-header collapsed"
                    data-toggle="collapse"
                    data-target={`#${faq.id}`}
                  >
                    <h3>{faq.title}</h3>
                  </div>
                  <div className="collapse" id={faq.id} data-parent="#accordion">
                    <div className="accordion-body">
                      <p>{faq.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
