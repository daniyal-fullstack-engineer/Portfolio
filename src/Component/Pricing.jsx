import React, { useEffect, useState } from "react";
import AOS from "aos";
import SmoothScroll from "./SmoothScroll";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0); // Default to first tab

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-out",
      offset: 100,
    });
  }, []);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  const handleContactClick = (planTitle) => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceCategories = [
    {
      title: "Website Starter",
      icon: "fas fa-globe",
      color: "from-green-500 to-emerald-500",
      packages: [
        {
          title: "Landing Page",
          price: 299,
          features: [
            "Single Page Design",
            "Mobile Responsive",
            "Contact Form",
            "Basic SEO",
            "Google Analytics",
            "1 Week Delivery"
          ],
          popular: false
        },
        {
          title: "Business Website",
          price: 599,
          features: [
            "Up to 5 Pages",
            "Custom Design",
            "CMS Integration",
            "Advanced SEO",
            "Contact Forms",
            "2 Weeks Delivery"
          ],
          popular: true
        },
        {
          title: "E-commerce Website",
          price: 999,
          features: [
            "Up to 50 Products",
            "Payment Gateway",
            "Order Management",
            "Customer Accounts",
            "Inventory System",
            "3 Weeks Delivery"
          ],
          popular: false
        }
      ]
    },
    {
      title: "Custom Website",
      icon: "fas fa-code",
      color: "from-indigo-500 to-purple-500",
      packages: [
        {
          title: "Custom Basic",
          price: 1299,
          features: [
            "Custom Design",
            "Unique Features",
            "Database Integration",
            "API Development",
            "Admin Panel",
            "4 Weeks Delivery"
          ],
          popular: false
        },
        {
          title: "Custom Pro",
          price: 2499,
          features: [
            "Advanced Custom Features",
            "User Authentication",
            "Real-time Updates",
            "Third-party Integrations",
            "Performance Optimization",
            "6 Weeks Delivery"
          ],
          popular: true
        },
        {
          title: "Custom Enterprise",
          price: 4999,
          features: [
            "Complex Business Logic",
            "Scalable Architecture",
            "Advanced Security",
            "Cloud Infrastructure",
            "Dedicated Support",
            "8 Weeks Delivery"
          ],
          popular: false
        }
      ]
    },
    {
      title: "Mobile App",
      icon: "fas fa-mobile-alt",
      color: "from-orange-500 to-red-500",
      packages: [
        {
          title: "Basic App",
          price: 1999,
          features: [
            "Cross-platform (iOS & Android)",
            "Basic UI/UX",
            "Simple Features",
            "App Store Submission",
            "3 Months Support",
            "6 Weeks Delivery"
          ],
          popular: false
        },
        {
          title: "Professional App",
          price: 3999,
          features: [
            "Advanced UI/UX",
            "Backend Integration",
            "Push Notifications",
            "User Authentication",
            "Analytics Integration",
            "6 Months Support",
            "8 Weeks Delivery"
          ],
          popular: true
        },
        {
          title: "Enterprise App",
          price: 7999,
          features: [
            "Complex Features",
            "Real-time Updates",
            "Advanced Security",
            "Custom Integrations",
            "Cloud Infrastructure",
            "12 Months Support",
            "12 Weeks Delivery"
          ],
          popular: false
        }
      ]
    },
    {
      title: "Bug Fixes",
      icon: "fas fa-bug",
      color: "from-red-500 to-pink-500",
      packages: [
        {
          title: "Quick Fix",
          price: 99,
          features: [
            "1-2 Bug Fixes",
            "24-48 Hours",
            "Email Support",
            "Basic Testing"
          ],
          popular: false
        },
        {
          title: "Standard Fix",
          price: 199,
          features: [
            "3-5 Bug Fixes",
            "3-5 Days",
            "Priority Support",
            "Comprehensive Testing",
            "Performance Check"
          ],
          popular: true
        },
        {
          title: "Premium Fix",
          price: 399,
          features: [
            "Unlimited Bug Fixes",
            "1 Week",
            "Dedicated Support",
            "Full Testing Suite",
            "Code Optimization"
          ],
          popular: false
        }
      ]
    },
    {
      title: "Consultation",
      icon: "fas fa-comments",
      color: "from-teal-500 to-blue-500",
      packages: [
        {
          title: "Basic Consultation",
          price: 99,
          features: [
            "1 Hour Session",
            "Project Planning",
            "Technology Recommendations",
            "Basic Roadmap",
            "Email Follow-up"
          ],
          popular: false
        },
        {
          title: "Professional Consultation",
          price: 199,
          features: [
            "2 Hour Session",
            "Detailed Planning",
            "Architecture Design",
            "Timeline & Budget",
            "1 Week Follow-up"
          ],
          popular: true
        },
        {
          title: "Enterprise Consultation",
          price: 399,
          features: [
            "4 Hour Session",
            "Complete Strategy",
            "Technical Architecture",
            "Team Planning",
            "1 Month Follow-up"
          ],
          popular: false
        }
      ]
    }
  ];

  return (
    <>
      <SmoothScroll />
      <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" id="pricing" data-scroll-index={5}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-12 opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-32 right-32 text-blue-400/30 text-2xl animate-float">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="absolute top-1/2 left-16 text-purple-400/30 text-xl animate-float" style={{animationDelay: '1s'}}>
            <i className="fas fa-tag"></i>
          </div>
          <div className="absolute bottom-32 right-16 text-indigo-400/30 text-lg animate-float" style={{animationDelay: '2s'}}>
            <i className="fas fa-percentage"></i>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-16 fade-in-up" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
              <i className="fas fa-tag text-blue-600 dark:text-blue-400"></i>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Pricing Plans</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Perfect</span> Plan
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional website and mobile app development packages tailored to your business needs. From simple websites to complex mobile applications.
            </p>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleTabSelect(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="mb-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`fade-in-up transition-all duration-500 ${
                  activeTab === categoryIndex ? 'block' : 'hidden'
                }`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${category.icon} text-white text-3xl`}></i>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className={`relative group cursor-pointer transition-all duration-300 ${
                        pkg.popular ? 'lg:scale-105' : ''
                      }`}
                      onClick={() => handleContactClick(`${category.title} - ${pkg.title}`)}
                      data-aos="fade-up"
                      data-aos-delay={100 + (pkgIndex * 100)}
                    >
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                            <i className="fas fa-star"></i>
                            <span>Most Popular</span>
                          </div>
                        </div>
                      )}

                      <div className={`relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                        pkg.popular 
                          ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                          : 'border-slate-200/50 dark:border-slate-700/50 shadow-xl'
                      }`}>
                        
                        {/* Package Header */}
                        <div className="text-center mb-6 sm:mb-8">
                          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.title}</h4>
                        </div>

                        {/* Pricing */}
                        <div className="text-center mb-6 sm:mb-8">
                          <div className="flex items-baseline justify-center mb-2">
                            <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">$</span>
                            <span className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                              {pkg.price}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">One-time payment</p>
                        </div>

                        {/* Features */}
                        <div className="mb-6 sm:mb-8">
                          <ul className="space-y-3">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <i className="fas fa-check text-white text-xs"></i>
                                </div>
                                <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Button */}
                        <button
                          className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                            pkg.popular
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 hover:scale-105'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContactClick(`${category.title} - ${pkg.title}`);
                          }}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Development Section */}
          <div className="text-center fade-in-up" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200/50 dark:border-slate-600/50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative z-10">
                {/* Custom Development Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cogs text-white text-3xl"></i>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  Custom Development
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Have a unique project that doesn't fit our standard packages? Let's discuss your specific requirements and create a completely custom solution tailored to your business needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                  <div className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-6">
                    <i className="fas fa-lightbulb text-2xl text-yellow-500 mb-3"></i>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Unique Ideas</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Complex business logic, custom integrations, or innovative features</p>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-6">
                    <i className="fas fa-rocket text-2xl text-blue-500 mb-3"></i>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Scalable Solutions</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Enterprise-grade applications with advanced architecture</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <a 
                    href="#contact" 
                    className="btn-primary group px-8 sm:px-10 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 lg:py-7 text-base sm:text-lg md:text-xl lg:text-2xl"
                  >
                    <i className="fas fa-comments text-base sm:text-lg md:text-xl lg:text-2xl"></i>
                    <span>Let's Discuss Your Project</span>
                  </a>
                  <a 
                    href="#portfolio" 
                    className="btn-secondary group px-8 sm:px-10 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 lg:py-7 text-base sm:text-lg md:text-xl lg:text-2xl"
                  >
                    <i className="fas fa-eye text-base sm:text-lg md:text-xl lg:text-2xl"></i>
                    <span>View Our Work</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}