import React, { useEffect } from "react";
import AOS from "aos";

export default function HireMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed
      once: true, // Trigger animation only once
      easing: "ease-in-out", // Smooth transition effect
    });
  }, []);

  const handleViewCV = () => {
    window.open('/DaniyalCv.pdf', '_blank');
  };

  return (
    <section className="call-to-action section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="call-action-content text-center">
              <h2 className="action-title" data-aos="fade-up">
                Have any project in mind?
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                I'd love to hear about it! Whether it's a small idea or a grand vision, 
                I'm ready to bring it to life. Reach out today and let's make your project a reality!
              </p>
              <ul data-aos="fade-in" data-aos-delay="400">
                <li>
                  <button onClick={handleViewCV} className="btn btn-1">
                    View CV
                  </button>
                </li>
                <li>
                  <a href="#contact" className="btn btn-2" data-scroll-nav="6">
                    HIRE ME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
