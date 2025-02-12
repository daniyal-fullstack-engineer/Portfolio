import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      icon: "fa-laptop",
      title: "Web Design",
      desc: "By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences."
    },
    {
      icon: "fa-edit",
      title: "Video Editing",
      desc: "By understanding of visual composition, color theory, and typography I can create for you engaging title cards, design animated transitions, or choose appropriate background music to match the video's tone."
    },
    {
      icon: "fa-code",
      title: "Frontend Development",
      desc: "I can create wireframes and prototypes that outline the layout and user interface element. Also I ensure that the website looks good across different devices and browsers, blending design and functionality."
    },
    {
      icon: "fa-paint-brush",
      title: "Graphic Design",
      desc: "With the goal to create compelling visual elements for websites, I can design logos, icons, illustrations, and other visual assets that enhance the website's branding and aesthetic appeal."
    },
    {
      icon: "fa-bullhorn",
      title: "Digital Marketing",
      desc: "In digital marketing, I play a vital role for your website, by enhancing visual aesthetics, user experience, SEO, responsive design and mainly conversion optimization."
    },
    {
      icon: "fa-mobile",
      title: "Android Development",
      desc: "I can create visually appealing and intuitive Android app interfaces, by designing app layouts, navigation menus, buttons and icons, ensuring a cohesive and user-friendly experience."
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
