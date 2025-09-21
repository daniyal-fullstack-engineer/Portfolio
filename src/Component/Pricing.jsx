import React, { useState, useEffect } from "react";
import useCustomUltraSmoothScroll from "../hooks/useCustomUltraSmoothScroll";

export default function Pricing() {
  const { scrollToElement } = useCustomUltraSmoothScroll();
  const [activeTab, setActiveTab] = useState(0); // Default to first tab
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabSelect = (index) => {
    if (index === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fade out current content
    setTimeout(() => {
    setActiveTab(index);
      // Fade in new content
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleContactClick = (planTitle) => {
    // Smooth scroll to contact section
    scrollToElement(document.getElementById('contact'), -80);
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
      <section className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" id="pricing" data-scroll-index={5}>
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

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-4 sm:mb-6 fade-in-scale stagger-1">
              <i className="fas fa-tag text-blue-600 dark:text-blue-400 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Pricing Plans</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-4 fade-in-up stagger-2">
              Choose Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Perfect</span> Plan
            </h2>
            
            <div className="flex justify-center mb-6 sm:mb-8 fade-in-up stagger-3">
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 fade-in-up stagger-4">
              Professional website and mobile app development packages tailored to your business needs. From simple websites to complex mobile applications.
            </p>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4 fade-in-up stagger-5">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleTabSelect(index)}
                  disabled={isTransitioning}
                  className={`px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 cursor-pointer min-h-[44px] sm:min-h-[48px] md:min-h-[56px] ${
                    isTransitioning 
                      ? 'opacity-50 cursor-not-allowed'
                      : 'cursor-pointer'
                  } ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  <i className={`${category.icon} mr-1 sm:mr-2`}></i>
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="mb-16 relative">
            {/* Loading Indicator */}
            {isTransitioning && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                  <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
              </div>
            )}
            
            {serviceCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`transition-all duration-300 ease-in-out ${
                  activeTab === categoryIndex 
                    ? isTransitioning 
                      ? 'opacity-0 transform translate-y-4' 
                      : 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-4 pointer-events-none absolute inset-0'
                }`}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6 fade-in-scale stagger-1`}>
                    <i className={`${category.icon} text-white text-3xl`}></i>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 fade-in-up stagger-2">
                    {category.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto fade-in-up stagger-3"></div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className={`relative group cursor-pointer transition-all duration-300 ${
                        pkg.popular ? 'lg:scale-105' : ''
                      } ${
                        pkgIndex % 3 === 0 ? 'fade-in-left' : 
                        pkgIndex % 3 === 1 ? 'fade-in-up' : 
                        'fade-in-right'
                      } stagger-${pkgIndex + 4}`}
                      onClick={() => handleContactClick(`${category.title} - ${pkg.title}`)}
                    >
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 fade-in-scale stagger-1">
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
                          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 fade-in-up stagger-1">{pkg.title}</h4>
                        </div>

                        {/* Pricing */}
                        <div className="text-center mb-6 sm:mb-8">
                          <div className="flex items-baseline justify-center mb-2 fade-in-up stagger-2">
                            <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">$</span>
                            <span className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                              {pkg.price}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 fade-in-up stagger-3">One-time payment</p>
                        </div>

                        {/* Features */}
                        <div className="mb-6 sm:mb-8">
                          <ul className="space-y-3">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className={`flex items-start gap-3 fade-in-up stagger-${featureIndex + 4}`}>
                                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 fade-in-scale stagger-1">
                                  <i className="fas fa-check text-white text-xs"></i>
                                </div>
                                <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base fade-in-up stagger-2">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Button */}
                        <button
                          className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer min-h-[48px] fade-in-up stagger-${pkg.features.length + 4} ${
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
          <div className="text-center">
            <div className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl fade-in-scale stagger-1"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl fade-in-scale stagger-2"></div>
              </div>
              
              <div className="relative z-10">
                {/* Custom Development Icon */}
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/25 fade-in-scale stagger-1">
                  <i className="fas fa-cogs text-white text-4xl"></i>
                </div>
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 border border-purple-200/50 dark:border-purple-700/50 mb-6 fade-in-scale stagger-2">
                  <i className="fas fa-star text-purple-600 dark:text-purple-400"></i>
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Premium Service</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 fade-in-up stagger-3">
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">Custom Development</span>
                </h3>
                
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-8 fade-in-up stagger-4"></div>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up stagger-5">
                  Have a unique project that doesn&apos;t fit my standard packages? Let&apos;s discuss your specific requirements and create a completely custom solution tailored to your business needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                  <div className="bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 dark:border-slate-600/50 shadow-xl fade-in-left stagger-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg fade-in-scale stagger-1">
                      <i className="fas fa-lightbulb text-white text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 fade-in-up stagger-2">Unique Ideas</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed fade-in-up stagger-3">Complex business logic, custom integrations, or innovative features that require specialized development expertise.</p>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 dark:border-slate-600/50 shadow-xl fade-in-right stagger-7">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg fade-in-scale stagger-1">
                      <i className="fas fa-rocket text-white text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 fade-in-up stagger-2">Scalable Solutions</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed fade-in-up stagger-3">Enterprise-grade applications with advanced architecture designed to grow with your business needs.</p>
                  </div>
                </div>
                
                {/* Enhanced CTA Section */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-8 fade-in-scale stagger-8">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 fade-in-up stagger-1">Ready to Start Your Custom Project?</h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 fade-in-up stagger-2">Let&apos;s discuss your vision and bring it to life with a tailored solution.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center fade-in-up stagger-3">
                  <button 
                    onClick={() => scrollToElement(document.getElementById('contact'), -80)}
                      className="btn-primary group flex items-center justify-center gap-3 cursor-pointer shadow-lg"
                  >
                      <i className="fas fa-comments"></i>
                    <span>Let&apos;s Discuss Your Project</span>
                  </button>
                  <button 
                    onClick={() => scrollToElement(document.getElementById('portfolio'), -80)}
                      className="btn-secondary group flex items-center justify-center gap-3 cursor-pointer shadow-lg"
                  >
                      <i className="fas fa-eye"></i>
                      <span>View My Work</span>
                  </button>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center fade-in-left stagger-9">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3 fade-in-scale stagger-1">
                      <i className="fas fa-clock text-white text-lg"></i>
                    </div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2 fade-in-up stagger-2">Fast Delivery</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300 fade-in-up stagger-3">Quick turnaround times</p>
                  </div>
                  <div className="flex flex-col items-center fade-in-up stagger-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 fade-in-scale stagger-1">
                      <i className="fas fa-shield-alt text-white text-lg"></i>
                    </div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2 fade-in-up stagger-2">Quality Assured</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300 fade-in-up stagger-3">Professional development</p>
                  </div>
                  <div className="flex flex-col items-center fade-in-right stagger-11">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 fade-in-scale stagger-1">
                      <i className="fas fa-headset text-white text-lg"></i>
                    </div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2 fade-in-up stagger-2">24/7 Support</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300 fade-in-up stagger-3">Continuous communication</p>
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