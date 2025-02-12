import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation speed
      once: true, // Run animation only once
      easing: "ease-in-out", // Smooth easing effect
    });
  }, []);

  return (
    <section
      className="pricing section-padding"
      id="pricing"
      data-scroll-index={5}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-aos="fade-up">
              <h4>Pricing</h4>
              <h2>
                Pricing <span>plan</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {[
            {
              title: "Basic",
              price: 99,
              features: [
                "5GB Bandwidth",
                "1 Free Update",
                "High Regulation Printing",
                "Branding",
                "2 Free Maintenances",
              ],
              buttonClass: "btn-2",
              delay: 200,
            },
            {
              title: "Premium",
              price: 199,
              features: [
                "10GB Bandwidth",
                "3 Free Updates",
                "High Regulation Printing",
                "3 Brandings",
                "5 Free Maintenances",
              ],
              buttonClass: "btn-1",
              delay: 400,
            },
            {
              title: "Ultimate",
              price: 299,
              features: [
                "20GB Bandwidth",
                "10 Free Updates",
                "Priority Regulation Printing",
                "10 Brandings",
                "20 Free Maintenances",
              ],
              buttonClass: "btn-2",
              delay: 600,
            },
          ].map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="pricing-plan"
                data-aos="zoom-in"
                data-aos-delay={plan.delay}
              >
                <div className="pricing-header" data-aos="fade-down">
                  <h3>{plan.title}</h3>
                </div>
                <div className="pricing-price" data-aos="fade-down">
                  <span className="currency">$</span>
                  <span className="price">{plan.price}</span>
                  <span className="period">/monthly</span>
                </div>
                <div className="pricing-body" data-aos="fade-up">
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer" data-aos="flip-up">
                  <a
                    href="#contact"
                    className={`btn ${plan.buttonClass}`}
                    data-scroll-nav={6}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
