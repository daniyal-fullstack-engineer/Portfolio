import React, { useState, useEffect } from "react";
import AOS from "aos";
import { errorMessges, successMessges, validateInput } from "../CommonFunction";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await validateInput(formData);
    if (!result) return false;

    setIsLoading(true);

    try {
      const response = await fetch("https://backend-potfolio223.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        successMessges("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        errorMessges("Failed to send email. Please try again.");
      }
    } catch (error) {
      errorMessges("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section-padding"  data-scroll-index={6} id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title" data-aos="fade-up">
              <h4>Contact us</h4>
              <h2>
                Get <span>in touch</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-4 col-md-5">
            <div className="contact-info" data-aos="fade-up" data-aos-delay="700">
              <h3>For any Queries and Support</h3>
              <div className="contact-info-item">
                <i className="fa-solid fa-location-arrow" />
                <h4>Location</h4>
                <p>Lahore, Punjab, Pakistan</p>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-envelope" />
                <h4>Write to us at</h4>
                <p>daniyalamjadali@gmail.com</p>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-phone" />
                <h4>Call us on</h4>
                <p>+923045485310</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="500">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="btn-2"
                      disabled={isLoading}
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          style={{ width: "25px", height: "25px" }}
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
}
