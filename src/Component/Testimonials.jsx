import React, { useEffect } from "react";
import AOS from "aos";


export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation speed
      once: true, // Run animation only once
      easing: "ease-in-out", // Smooth easing effect
    });
  }, []);

  const testimonials = [
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d31612952c6eca7780ba29c670ecc9d8-1729845263690/39ef4fad-6a51-4223-abf5-6d19256880bd.jpg",
      name: "Valantism",
      country: "Greece",
      text: "Very good experience.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5f50a36de4ffcbddb7caec31d603f03b-1704065713606/5c4455ee-6fe6-4815-b5b7-30649b148a48.png",
      name: "Moemia",
      country: "United Kingdom",
      text: "Once again thank you for your work on helping me create the React Native front end and connecting the backend to my app with Firebase, user authentication, and league creation/display for my sports app. Looking forward to you helping me.",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5f50a36de4ffcbddb7caec31d603f03b-1704065713606/5c4455ee-6fe6-4815-b5b7-30649b148a48.png",
      name: "Moemia",
      country: "United Kingdom",
      text: "Daniyal did a great job as a full-stack developer! The professionalism, top-notch documentation, and going above and beyond made this an incredible experience. Smooth collaboration and timely delivery—highly recommend! 💪",
    },
    {
      img: "https://i.postimg.cc/CM8SjJSc/1.png",
      name: "Muzamil Pervaize",
      country: "United States",
      text: "Understood the task perfectly. Excellent work!",
    },
    {
      img: "https://i.postimg.cc/wMDzgx0C/2.png",
      name: "Xerophilic",
      country: "Australia 🇦🇺",
      text: "Very fast and good service. Exceeded expectations.",
    },
    {
      img: "https://i.postimg.cc/7YyDX7Lw/3.png",
      name: "Habib786",
      country: "Spain 🇪🇸",
      text: "Great teaching style, good communication. Really satisfied.",
    },
    {
      img: "https://i.postimg.cc/CM8SjJSc/1.png",
      name: "Muzammil Perv112",
      country: "United States",
      text: "Great work, very fast and good communication. Really satisfied and will work again. Many thanks!",
    },
    {
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5f50a36de4ffcbddb7caec31d603f03b-1704065713606/5c4455ee-6fe6-4815-b5b7-30649b148a48.png",
      name: "Moemia",
      country: "United Kingdom",
      text: "Great work, very fast and good communication. Really satisfied and will work again. Many thanks! Helped me deploy my React app to Firebase hosting.",
    },
  ];
  
  

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
            {testimonials.map((testimonial, index) => (
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
                <div className="content-slide"> 
                <p>{testimonial.text}</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.country}</span>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i} />
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
