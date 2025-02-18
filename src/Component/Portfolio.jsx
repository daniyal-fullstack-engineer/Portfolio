import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    img: "https://i.postimg.cc/sD0CRsBv/resume-builder.png",
    title: "Resume Builder",
    link: "https://app.thepathfinderhub.com/",
    popup: "https://i.postimg.cc/sD0CRsBv/resume-builder.png",
  },
  {
    img: "https://i.postimg.cc/Nf0vV5j3/roi.png",
    title: "ROI Level Up",
    link: "https://roilevelup.com/",
    popup: "https://i.postimg.cc/Nf0vV5j3/roi.png",
  },
  {
    img: "https://i.postimg.cc/2SQ6j1n0/gym.png",
    title: "Gym Management",
    link: "http://82.112.240.94:5173/",
    popup: "https://i.postimg.cc/2SQ6j1n0/gym.png",
  },
  {
    img: "https://i.postimg.cc/Nj3h5Dkt/ecommerence.png",
    title: "Superbullion",
    link: "https://superbullionwire.com/",
    popup: "https://i.postimg.cc/Nj3h5Dkt/ecommerence.png",
  },
  {
    img: "https://i.postimg.cc/0QChXsR5/amberoil.png",
    title: "Amber Oil",
    link: "https://www.amberoil.ie/",
    popup: "https://i.postimg.cc/0QChXsR5/amberoil.png",
  },
  {
    img: "https://i.postimg.cc/k5K08STb/mcc.png",
    title: "MCCI",
    link: "https://www.mcci.ie/",
    popup: "https://i.postimg.cc/k5K08STb/mcc.png",
  },
  {
    img: "https://i.postimg.cc/C5PXYsxW/iki.png",
    title: "IKI",
    link: "https://www.ikc.ie/",
    popup: "https://i.postimg.cc/C5PXYsxW/iki.png",
  },
  {
    img: "https://i.postimg.cc/DZhtczNY/pegobal.png",
    title: "PE Global",
    link: "https://www.peglobal.net/",
    popup: "https://i.postimg.cc/DZhtczNY/pegobal.png",
  },
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
    className="img-gallery section-padding"
    id="portfolio"
    data-scroll-index={3}
  >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-aos="fade-up">
              <h4>Portfolio</h4>
              <h2>
                Our latest <span>work</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row grid">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                <div className="work-image">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">{project.title}</h3>
                    <ul>
                      <li>
                        <a href={project.popup} className="image-popup">
                          <i className="fa-solid fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
