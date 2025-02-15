import React, { useEffect } from "react";
import AOS from "aos";


export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation speed
      once: true, // Animation will trigger only once
      easing: "ease-in-out", // Smooth transition
    });
  }, []);

  const services = [
    {
      icon: "fa-palette", // Represents creativity and design
      title: "Web Design",
      desc: "I design visually appealing and user-friendly websites by creating wireframes, mockups, and layouts that align with your brand identity and user needs."
    },
    {
      icon: "fa-code", // Represents coding and development
      title: "Web Development",
      desc: "I develop responsive and dynamic websites using the latest technologies, ensuring smooth functionality, fast performance, and an optimized user experience."
    },
    {
      icon: "fa-cogs", // Represents automation and process efficiency
      title: "Automation",
      desc: "I build automation solutions to streamline repetitive tasks, improve workflow efficiency, and integrate various APIs and tools to enhance productivity."
    },
    {
      icon: "fa-bug", // Represents debugging and fixing issues
      title: "Bug Fixes",
      desc: "I identify and resolve bugs, performance issues, and compatibility problems to ensure a seamless and error-free experience for your website or application."
    },
    {
      icon: "fa-tools", // Represents maintenance and upkeep
      title: "Web Maintenance",
      desc: "I provide regular website updates, security patches, performance optimizations, and content management to keep your website running smoothly and securely."
    },
    {
      icon: "fa-mobile-alt", // Represents mobile development
      title: "Hybrid App Development",
      desc: "I develop cross-platform mobile applications using modern frameworks, ensuring a smooth and responsive experience on both iOS and Android devices."
    }
  ];
  

  return (
    <section
      className="services section-padding"
      id="services"
      data-scroll-index={2}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-aos="fade-up">
              <h4>Services</h4>
              <h2>
                Services <span>that I can provide for you</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Delayed effect for each card
            >
              <div className="service-item">
                <div className="icon">
                  <i className={`fa-solid ${service.icon}`} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
