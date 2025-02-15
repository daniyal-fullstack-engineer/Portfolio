import React, { useEffect } from "react";
import AOS from "aos";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation speed
      once: true, // Run animation only once
      easing: "ease-in-out", // Smooth easing effect
    });
  }, []);

  const pricingPlans = [
    {
      title: "Basic",
      price: 99,
      features: [
        "Basic Website Development (Up to 2 Pages)",
        "Responsive & Mobile-Friendly Design",
        "Basic SEO Optimization",
        "1 Free Bug Fix",
        "Email Support",
      ],
      buttonText: "Get Started",
      buttonClass: "btn-2",
      delay: 200,
    },
    {
      title: "Premium",
      price: 199,
      features: [
        "Advanced Website or Web App (Up to 5 Pages)",
        "Custom UI/UX Design",
        "API Integration & Database Setup",
        "3 Free Bug Fixes",
        "Priority Email & Chat Support",
      ],
      buttonText: "Choose Plan",
      buttonClass: "btn-1",
      delay: 400,
    },
    {
      title: "Ultimate",
      price: 500,
      features: [
        "Custom Web or Mobile App Development",
        "Automation for Business Processes",
        "AI-Powered Features (Chatbots, Data Processing)",
        "10 Free Bug Fixes & Performance Optimization",
        // "Dedicated Support & Maintenance",
      ],
      buttonText: "Get Ultimate",
      buttonClass: "btn-2",
      delay: 600,
    },
  ];
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
          {pricingPlans.map((plan, index) => (
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
