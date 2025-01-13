import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      className="contact section-padding"
      id="contact"
      data-scroll-index={6}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h4>Contact us</h4>
              <h2>
                Get <span>in touch</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="contact-info">
              <h3>For any Queries and Support</h3>
              <div className="contact-info-item">
                <i className="fa-solid fa-location-arrow" />
                <h4>Location</h4>
                <p>Akbar Chowk, Faisal Town, Lahore, Punjab, Pakistan</p>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-envelope" />
                <h4>Write to us at</h4>
                <p>hamidraza7614@gmail.com</p>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-location-arrow" />
                <h4>Call us on</h4>
                <p>+923227588875</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
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
                    <div className="form-group">
                      <input
                        type="email"
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
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <button type="submit" className="btn-2">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {status && <p className="status-message">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
