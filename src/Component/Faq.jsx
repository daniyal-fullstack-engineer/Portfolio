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
  const faqs = [
    {
      id: "faq-01",
      title: "Do you create custom websites or use templates?",
      content:
        "I build fully custom websites tailored to your brand, ensuring uniqueness, responsiveness, and top-notch functionality. No generic templates—only high-quality, hand-crafted designs.",
      delay: 200,
    },
    {
      id: "faq-02",
      title: "Will my website be mobile-friendly?",
      content:
        "Absolutely! Every website I develop is fully responsive, ensuring seamless performance across desktops, tablets, and mobile devices.",
      delay: 400,
    },
    {
      id: "faq-03",
      title: "Can you fix bugs and improve website performance?",
      content:
        "Yes! I identify and resolve issues, optimize loading speed, enhance security, and ensure smooth user experience across all browsers and devices.",
      delay: 600,
    },
    {
      id: "faq-04",
      title: "Do you provide ongoing website maintenance?",
      content:
        "Yes, I offer website maintenance services, including updates, security patches, bug fixes, and performance optimizations to keep your website running smoothly.",
      delay: 800,
    },
    {
      id: "faq-05",
      title: "Can you automate business tasks and workflows?",
      content:
        "Definitely! I develop automation solutions that streamline repetitive tasks, integrate APIs, and improve business efficiency with smart automation tools.",
      delay: 1000,
    },
    {
      id: "faq-06",
      title: "Do you offer hybrid app development?",
      content:
        "Yes, I build cross-platform mobile apps that work seamlessly on both Android and iOS, ensuring a high-quality and engaging user experience.",
      delay: 1200,
    },
    {
      id: "faq-07",
      title: "How long does it take to complete a project?",
      content:
        "Project timelines vary based on complexity, but most websites are completed within 2-6 weeks. For apps and automation, timelines depend on scope and requirements.",
      delay: 1400,
    },
    {
      id: "faq-08",
      title: "How do we get started?",
      content:
        "Simply contact me with your project details! We'll discuss your needs, set goals, and create a roadmap to bring your vision to life.",
      delay: 1600,
    },
  ];

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
              {faqs.map((faq, index) => (
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
