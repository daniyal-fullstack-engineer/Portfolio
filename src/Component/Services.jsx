import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaDescriptionRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, servicesRef.current, ctaRef.current], {
      opacity: 0,
      y: 60
    });

    gsap.set([ctaTitleRef.current, ctaDescriptionRef.current, ctaButtonsRef.current], {
      opacity: 0,
      y: 80,
      scale: 0.8
    });

    gsap.set(backgroundRef.current, {
      scale: 1.1,
      opacity: 0
    });

    // Set initial states for service cards
    gsap.set('.service-card', {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotation: 5
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate elements in sequence
    tl.to(backgroundRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(servicesRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.2");

    // CTA Section Detailed Animations
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    ctaTl.to(ctaTitleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    })
    .to(ctaDescriptionRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(ctaButtonsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4");

    // Animate service cards with enhanced effects
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 5
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.15
      });
    });

    // Continuous background animation
    gsap.to(backgroundRef.current, {
      rotation: 360,
      duration: 30,
      ease: "none",
      repeat: -1
    });

    // Service card hover animations
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      const cardInner = card.querySelector('.service-card-inner');
      const icon = card.querySelector('.service-icon');
      const features = card.querySelectorAll('.feature-item');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(cardInner, {
          scale: 1.05,
          rotation: 2,
          duration: 0.4,
          ease: "power2.out"
        });
        
        gsap.to(icon, {
          scale: 1.2,
          rotation: 15,
          duration: 0.4,
          ease: "power2.out"
        });

        features.forEach((feature, featureIndex) => {
          gsap.to(feature, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            delay: featureIndex * 0.05
          });
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(cardInner, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        });
        
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        });

        features.forEach((feature, featureIndex) => {
          gsap.to(feature, {
            x: 10,
            opacity: 0.7,
            duration: 0.4,
            ease: "power2.out",
            delay: featureIndex * 0.02
          });
        });
      });
    });

    // CTA Button hover animations
    gsap.utils.toArray('.cta-button').forEach((button, index) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

  }, []);

  const services = [
    {
      icon: "fa-palette",
      title: "Web Design",
      desc: "I design visually appealing and user-friendly websites by creating wireframes, mockups, and layouts that align with your brand identity and user needs.",
      features: ["UI/UX Design", "Responsive Layout", "Brand Identity", "Wireframing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "fa-code",
      title: "Web Development",
      desc: "I develop responsive and dynamic websites using the latest technologies, ensuring smooth functionality, fast performance, and an optimized user experience.",
      features: ["React/Next.js", "Node.js", "Database Design", "API Integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "fa-cogs",
      title: "Automation",
      desc: "I build automation solutions to streamline repetitive tasks, improve workflow efficiency, and integrate various APIs and tools to enhance productivity.",
      features: ["Process Automation", "API Integration", "Workflow Optimization", "Tool Integration"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "fa-bug",
      title: "Bug Fixes",
      desc: "I identify and resolve bugs, performance issues, and compatibility problems to ensure a seamless and error-free experience for your website or application.",
      features: ["Debugging", "Performance Optimization", "Cross-browser Testing", "Error Resolution"],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: "fa-tools",
      title: "Web Maintenance",
      desc: "I provide regular website updates, security patches, performance optimizations, and content management to keep your website running smoothly and securely.",
      features: ["Security Updates", "Performance Monitoring", "Content Management", "Backup Solutions"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "fa-mobile-alt",
      title: "Mobile App Development",
      desc: "I develop cross-platform mobile applications using modern frameworks, ensuring a smooth and responsive experience on both iOS and Android devices.",
      features: ["React Native", "Cross-platform", "App Store Deployment", "Performance Optimization"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
      id="services"
    >
      {/* Enhanced Background Elements */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-4 md:right-20 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-4 md:left-20 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg rotate-12 opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Service Icons */}
        <div className="absolute top-32 right-8 md:right-32 text-blue-400/30 text-xl md:text-2xl animate-bounce-slow">
          <i className="fas fa-palette"></i>
        </div>
        <div className="absolute top-64 left-8 md:left-32 text-purple-400/30 text-lg md:text-xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-code"></i>
        </div>
        <div className="absolute bottom-64 right-8 md:right-40 text-indigo-400/30 text-xl md:text-2xl animate-bounce-slow" style={{animationDelay: '1s'}}>
          <i className="fas fa-cogs"></i>
        </div>
        <div className="absolute bottom-32 left-8 md:left-40 text-cyan-400/30 text-lg md:text-xl animate-bounce-slow" style={{animationDelay: '1.5s'}}>
          <i className="fas fa-mobile-alt"></i>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400/20 text-3xl md:text-4xl animate-bounce-slow" style={{animationDelay: '2s'}}>
          <i className="fas fa-rocket"></i>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div ref={subtitleRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <i className="fas fa-cogs text-blue-600 dark:text-blue-400 animate-spin-slow"></i>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p ref={descriptionRef} className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive web development services to bring your digital vision to life with cutting-edge technology and creative solutions.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative"
            >
              <div className="service-card-inner relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-slate-200/50 dark:border-slate-700/50 h-full overflow-hidden">
                {/* Enhanced Card Background Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-slate-100/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Enhanced Service Icon */}
                <div className={`service-icon w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                  <i className={`fas ${service.icon} text-white text-xl md:text-2xl`}></i>
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{service.desc}</p>
                  
                  {/* Enhanced Features */}
                  <div className="space-y-2 md:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item flex items-center justify-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 transform translate-x-2 opacity-70 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" style={{transitionDelay: `${featureIndex * 0.1}s`}}>
                        <div className={`w-1.5 md:w-2 h-1.5 md:h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Hover Effects */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} transition-all duration-500`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-1 md:w-1.5 h-1 md:h-1.5 bg-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-indigo-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action with GSAP */}
        <div ref={ctaRef} className="text-center">
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30 dark:border-slate-700/40 shadow-3xl overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-float"></div>
              <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400/60 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10">
              <h3 ref={ctaTitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p ref={ctaDescriptionRef} className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Let's discuss your project requirements and create something amazing together. I'm here to help you achieve your digital goals.
              </p>
              <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a 
                  href="#contact" 
                  className="cta-button btn-primary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  <i className="fas fa-rocket group-hover:animate-bounce text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>Start a Project</span>
                </a>
                <a 
                  href="#portfolio" 
                  className="cta-button btn-secondary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  <i className="fas fa-eye group-hover:animate-pulse text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>View Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}