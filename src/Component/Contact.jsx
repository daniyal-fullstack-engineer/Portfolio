import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { useToast } from "./ToastContainer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { showSuccess, showError } = useToast();
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const backgroundRef = useRef(null);

  // Enhanced validation functions
  const validateForm = () => {
    const newErrors = {};
    
    try {
      // Name validation
      if (!formData.name || !formData.name.trim()) {
        newErrors.name = "Name is required";
      } else if (formData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
      
      // Phone validation (optional but if provided, should be valid)
      if (formData.phone && formData.phone.trim()) {
        const cleanPhone = formData.phone.replace(/\s/g, '');
        
        // Check if phone number starts with country code (+)
        if (!cleanPhone.startsWith('+')) {
          newErrors.phone = "Please include country code (e.g., +1 for US, +44 for UK)";
        } else {
          // Validate phone number with country code
          const phoneRegex = /^\+[1-9]\d{6,14}$/;
          if (!phoneRegex.test(cleanPhone)) {
            newErrors.phone = "Please enter a valid phone number with country code";
          }
        }
      }
      
      // Subject validation
      if (!formData.subject || !formData.subject.trim()) {
        newErrors.subject = "Subject is required";
      } else if (formData.subject.trim().length < 5) {
        newErrors.subject = "Subject must be at least 5 characters";
      }
      
      // Message validation
      if (!formData.message || !formData.message.trim()) {
        newErrors.message = "Message is required";
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      }
    } catch (error) {
      console.error("Validation error:", error);
      newErrors.general = "Validation error occurred";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    try {
      const { name, value } = e.target;
      
      // Validate input name exists in formData
      if (!formData.hasOwnProperty(name)) {
        console.warn(`Unknown form field: ${name}`);
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: value || ""
      }));
      
      // Clear error when user starts typing
      if (errors && errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ""
        }));
      }
    } catch (error) {
      console.error("Input change error:", error);
    }
  };


  useEffect(() => {
    // Lightweight animations using CSS transitions
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use our enhanced validation
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://backend-potfolio223.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        // Show success toast
        showSuccess("🎉 Email sent successfully! I'll get back to you soon.", 6000);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({}); // Clear any errors
      } else {
        // Show error toast
        showError("❌ Failed to send email. Please try again.", 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Show error toast
      showError("⚠️ An error occurred. Please try again later.", 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "daniyalamjadali@gmail.com",
      link: "mailto:daniyalamjadali@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+92 304 5485310",
      link: "tel:+923045485310"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Lahore, Pakistan",
      link: "#"
    }
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
        data-scroll-index={6} 
        id="contact"
      >
        {/* Enhanced Background Elements */}
        <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-4 md:right-20 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-8 md:w-10 h-8 md:h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-12 opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-32 right-8 md:right-32 text-blue-400/30 text-lg md:text-2xl animate-float">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="absolute top-1/2 left-8 md:left-16 text-purple-400/30 text-base md:text-xl animate-float" style={{animationDelay: '1s'}}>
            <i className="fas fa-phone"></i>
          </div>
          <div className="absolute bottom-32 right-8 md:right-16 text-indigo-400/30 text-sm md:text-lg animate-float" style={{animationDelay: '2s'}}>
            <i className="fas fa-paper-plane"></i>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Section Title */}
          <div ref={titleRef} className="text-center mb-12 sm:mb-16">
            <div ref={subtitleRef} className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-700/50 dark:border-blue-700/50 mb-4 sm:mb-6">
              <i className="fas fa-envelope text-blue-400 dark:text-blue-400 animate-pulse text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm font-medium text-blue-300 dark:text-blue-300">Contact Us</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white dark:text-white mb-4 sm:mb-6 px-4">
              Get <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">In Touch</span>
            </h2>
            
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p ref={descriptionRef} className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to start your project? Have questions about my services? I&apos;d love to hear from you. Let&apos;s discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Enhanced Contact Form */}
            <div ref={formRef}>
              <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/30 dark:border-slate-700/40 shadow-3xl overflow-hidden">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Send me a message</h3>
                  
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`form-input w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 dark:bg-slate-700 border rounded-lg sm:rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.name 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-200 dark:border-slate-600'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`form-input w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 dark:bg-slate-700 border rounded-lg sm:rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.email 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-200 dark:border-slate-600'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`form-input w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 dark:bg-slate-700 border rounded-lg sm:rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.phone 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-200 dark:border-slate-600'
                          }`}
                          placeholder="+1 (555) 123-4567 (with country code)"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`form-input w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 dark:bg-slate-700 border rounded-lg sm:rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.subject 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-200 dark:border-slate-600'
                          }`}
                          placeholder="Project inquiry"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`form-input w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 dark:bg-slate-700 border rounded-lg sm:rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-200 dark:border-slate-600'
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                          <i className="fas fa-exclamation-circle"></i>
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isLoading}
                      icon="fas fa-paper-plane"
                      className="w-full"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div ref={contactInfoRef}>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Let&apos;s connect</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                    I&apos;m always excited to work on new projects and help bring innovative ideas to life. 
                    Whether you have a clear vision or just a concept, I&apos;m here to help you succeed.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="contact-card group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/30 dark:border-slate-700/40 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className={`${info.icon} text-white text-sm sm:text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 sm:pt-8">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">Follow me</h4>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href="#"
                      className="social-link group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <i className="fab fa-linkedin-in text-sm sm:text-base relative z-10"></i>
                    </a>
                    <a
                      href="#"
                      className="social-link group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/25 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <i className="fab fa-github text-sm sm:text-base relative z-10"></i>
                    </a>
                    <a
                      href="#"
                      className="social-link group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <i className="fab fa-twitter text-sm sm:text-base relative z-10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}