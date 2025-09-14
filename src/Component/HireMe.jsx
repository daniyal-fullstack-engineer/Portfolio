import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HireMe() {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0,
    support: 0
  });
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, featuresRef.current, buttonsRef.current, statsRef.current], {
      opacity: 0,
      y: 60
    });

    gsap.set(backgroundRef.current, {
      scale: 1.1,
      opacity: 0
    });

    // Set initial states for feature cards and stats
    gsap.set('.feature-card', {
      opacity: 0,
      y: 50,
      scale: 0.9
    });

    gsap.set('.stat-item', {
      opacity: 0,
      y: 30,
      scale: 0.8
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
    .to(featuresRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.2")
    .to(statsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.1");

    // Animate feature cards with stagger
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.1
      });
    });

    // Animate stats with stagger and counter animation
    gsap.utils.toArray('.stat-item').forEach((stat, index) => {
      gsap.fromTo(stat, {
        opacity: 0,
        y: 30,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            // Start counter animation when stats come into view
            animateCounter(index);
          }
        },
        delay: index * 0.1
      });
    });

    // Continuous background animation
    gsap.to(backgroundRef.current, {
      rotation: 360,
      duration: 60,
      ease: "none",
      repeat: -1
    });

    // Feature card hover animations
    gsap.utils.toArray('.feature-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          rotation: 2,
          duration: 0.4,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    // Stat item hover animations
    gsap.utils.toArray('.stat-item').forEach((stat) => {
      stat.addEventListener('mouseenter', () => {
        gsap.to(stat, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Button hover animations
    gsap.utils.toArray('.hire-button').forEach((button) => {
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

  // Counter animation function
  const animateCounter = (index) => {
    const targets = [50, 100, 5, 24]; // Target values for each stat
    const target = targets[index];
    const duration = 2000; // 2 seconds
    const steps = 60; // Number of animation steps
    const stepDuration = duration / steps;
    const increment = target / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setAnimatedStats(prev => {
        const newStats = { ...prev };
        switch(index) {
          case 0: newStats.projects = Math.floor(current); break;
          case 1: newStats.satisfaction = Math.floor(current); break;
          case 2: newStats.experience = Math.floor(current); break;
          case 3: newStats.support = Math.floor(current); break;
        }
        return newStats;
      });
    }, stepDuration);
  };

  const handleViewCV = () => {
    window.open('/DaniyalCv.pdf', '_blank');
  };

  const handleHireMe = () => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: "fas fa-clock",
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quality Assured",
      description: "Professional development with attention to detail"
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Continuous support and communication throughout the project"
    }
  ];

  const stats = [
    { number: `${animatedStats.projects}+`, label: "Projects Completed" },
    { number: `${animatedStats.satisfaction}%`, label: "Client Satisfaction" },
    { number: `${animatedStats.experience}+`, label: "Years Experience" },
    { number: `${animatedStats.support}/7`, label: "Support Available" }
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
        id="hire-me"
      >
        {/* Enhanced Background Elements */}
        <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
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
            <i className="fas fa-handshake"></i>
          </div>
          <div className="absolute top-1/2 left-16 text-purple-400/30 text-xl animate-float" style={{animationDelay: '1s'}}>
            <i className="fas fa-rocket"></i>
          </div>
          <div className="absolute bottom-32 right-16 text-indigo-400/30 text-lg animate-float" style={{animationDelay: '2s'}}>
            <i className="fas fa-lightbulb"></i>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Main Content Card */}
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/30 dark:border-slate-700/40 shadow-3xl overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            
            {/* Enhanced Header Section */}
            <div ref={titleRef} className="text-center mb-12">
              <div ref={subtitleRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
                <i className="fas fa-handshake text-blue-600 dark:text-blue-400 animate-pulse"></i>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Let's Work Together</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Have Any <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Project</span> in Mind?
              </h2>
              
              <div className="flex justify-center mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Description Section */}
            <div ref={descriptionRef} className="text-center mb-12">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                I'd love to hear about it! Whether it's a small idea or a grand vision, 
                I'm ready to bring it to life. Let's collaborate and create something amazing together.
              </p>
              
              {/* Enhanced Features Grid */}
              <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card group p-6 rounded-3xl bg-white/80 dark:bg-slate-700/80 backdrop-blur-xl border border-white/30 dark:border-slate-600/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className={`${feature.icon} text-white text-xl`}></i>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div ref={buttonsRef} className="text-center mb-12">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
                <button 
                  onClick={handleViewCV} 
                  className="hire-button btn-primary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i className="fas fa-file-pdf text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>View My CV</span>
                </button>
                
                <button 
                  onClick={handleHireMe} 
                  className="hire-button btn-secondary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  <i className="fas fa-rocket text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>Hire Me Now</span>
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">Or reach out directly:</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a 
                    href="mailto:your-email@example.com" 
                    className="btn-ghost group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    <i className="fas fa-envelope text-sm sm:text-base md:text-lg lg:text-xl"></i>
                    <span>Email Me</span>
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="btn-ghost group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    <i className="fas fa-phone text-sm sm:text-base md:text-lg lg:text-xl"></i>
                    <span>Call Me</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white counter group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </>
  );
}
