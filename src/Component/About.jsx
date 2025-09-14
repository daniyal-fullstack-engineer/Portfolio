import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "../hooks/useSmoothScroll";

const About = () => {
  const { scrollToSection } = useSmoothScroll();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const techStackRef = useRef(null);
  const achievementsRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaSubtitleRef = useRef(null);
  const ctaDescriptionRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const ctaIconRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, contentRef.current, techStackRef.current, achievementsRef.current, ctaRef.current], {
      opacity: 0,
      y: 60
    });

    gsap.set([ctaTitleRef.current, ctaSubtitleRef.current, ctaDescriptionRef.current, ctaButtonsRef.current, ctaIconRef.current], {
      opacity: 0,
      y: 80,
      scale: 0.8
    });

    gsap.set(backgroundRef.current, {
      scale: 1.1,
      opacity: 0
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate elements
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
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(techStackRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .to(achievementsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.2")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.1");

    // CTA Section Detailed Animations
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    ctaTl.to(ctaIconRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(ctaTitleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(ctaSubtitleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(ctaDescriptionRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .to(ctaButtonsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.2");

    // Animate tech cards on scroll
    gsap.utils.toArray('.tech-card').forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 30,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.1
      });
    });

    // Animate achievement cards
    gsap.utils.toArray('.achievement-card').forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 40,
        rotationY: 15
      }, {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        ease: "power3.out",
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

    // CTA Continuous Animations
    if (ctaIconRef.current) {
      gsap.to(ctaIconRef.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      });
    }

    // CTA Button Hover Animations
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

  const techStack = {
    frontend: [
      { name: "Next.js", icon: "fab fa-react", level: 95, color: "from-blue-500 to-cyan-500", description: "Full-stack React framework" },
      { name: "React.js", icon: "fab fa-react", level: 95, color: "from-blue-400 to-blue-600", description: "Component-based UI library" },
      { name: "React Native", icon: "fab fa-react", level: 88, color: "from-blue-300 to-blue-700", description: "Cross-platform mobile development" },
      { name: "Tailwind CSS", icon: "fab fa-css3-alt", level: 90, color: "from-cyan-400 to-blue-500", description: "Utility-first CSS framework" },
      { name: "Shadcn/ui", icon: "fas fa-palette", level: 85, color: "from-purple-400 to-pink-500", description: "Modern component library" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", level: 88, color: "from-purple-500 to-indigo-600", description: "Responsive CSS framework" },
      { name: "GSAP", icon: "fas fa-magic", level: 80, color: "from-green-400 to-emerald-500", description: "High-performance animations" }
    ],
    backend: [
      { name: "Node.js", icon: "fab fa-node-js", level: 92, color: "from-green-500 to-emerald-500", description: "Server-side JavaScript runtime" },
      { name: "Firebase", icon: "fab fa-google", level: 85, color: "from-orange-400 to-yellow-500", description: "Backend-as-a-Service platform" },
      { name: "Server-side", icon: "fas fa-server", level: 90, color: "from-gray-500 to-slate-600", description: "Backend development & APIs" }
    ],
    database: [
      { name: "PostgreSQL", icon: "fas fa-database", level: 88, color: "from-blue-600 to-indigo-600", description: "Advanced relational database" },
      { name: "MongoDB", icon: "fas fa-leaf", level: 85, color: "from-green-600 to-emerald-600", description: "NoSQL document database" },
      { name: "Mongoose", icon: "fas fa-project-diagram", level: 87, color: "from-red-500 to-pink-500", description: "MongoDB object modeling" }
    ],
    hosting: [
      { name: "Vercel", icon: "fas fa-cloud", level: 90, color: "from-gray-400 to-gray-600", description: "Frontend hosting & deployment" },
      { name: "Netlify", icon: "fas fa-globe", level: 85, color: "from-green-400 to-teal-500", description: "Static site hosting" },
      { name: "AWS", icon: "fab fa-aws", level: 80, color: "from-orange-500 to-yellow-600", description: "Cloud infrastructure" },
      { name: "Domain Management", icon: "fas fa-link", level: 88, color: "from-purple-500 to-indigo-600", description: "DNS & domain configuration" },
      { name: "SSL/HTTPS", icon: "fas fa-shield-alt", level: 90, color: "from-green-500 to-emerald-600", description: "Security & certificates" }
    ]
  };

  const achievements = [
    { icon: "fa-code", number: "50+", label: "Web & Mobile Apps" },
    { icon: "fa-users", number: "30+", label: "Happy Clients" },
    { icon: "fa-clock", number: "5+", label: "Years Experience" },
    { icon: "fa-mobile-alt", number: "20+", label: "Mobile Applications" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Enhanced Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30 dark:from-blue-900/30 dark:via-transparent dark:to-purple-900/30"
      ></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-blue-300/20 dark:border-blue-600/10 animate-pulse" style={{animationDelay: `${i * 0.01}s`}}></div>
          ))}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float shadow-lg"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20 animate-float shadow-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-float shadow-lg" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-12 opacity-20 animate-float shadow-lg" style={{animationDelay: '3s'}}></div>

        {/* Floating Tech Icons */}
        <div className="absolute top-32 right-32 text-blue-400/40 text-3xl animate-bounce-slow">
            <i className="fab fa-react"></i>
          </div>
        <div className="absolute top-64 left-32 text-purple-400/40 text-2xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>
            <i className="fab fa-node-js"></i>
          </div>
        <div className="absolute bottom-64 right-40 text-indigo-400/40 text-3xl animate-bounce-slow" style={{animationDelay: '1s'}}>
          <i className="fab fa-js-square"></i>
          </div>
        <div className="absolute bottom-32 left-40 text-blue-400/40 text-2xl animate-bounce-slow" style={{animationDelay: '1.5s'}}>
            <i className="fab fa-python"></i>
          </div>
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-2xl animate-pulse-slow shadow-2xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/25 to-indigo-500/25 rounded-full blur-2xl animate-pulse-slow shadow-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse-slow shadow-2xl" style={{animationDelay: '2s'}}></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div ref={titleRef} className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 dark:from-blue-900/40 dark:to-purple-900/40 border border-blue-700/50 dark:border-blue-700/50 mb-6 sm:mb-8 backdrop-blur-xl shadow-lg">
            <div className="relative">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute inset-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <i className="fas fa-user text-blue-400 dark:text-blue-400 text-sm sm:text-lg"></i>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-300 dark:text-blue-300 tracking-wide">About Me</span>
            <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
        </div>
          
          <h2 id="about-heading" ref={subtitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white dark:text-white mb-6 sm:mb-8 leading-tight px-4">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent relative">
              M Daniyal
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-indigo-400/10 rounded-2xl blur-xl -z-10"></div>
            </span>
          </h2>
          
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
        </div>
          
          <p ref={contentRef} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Expert full-stack developer specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">React Native</span>, <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>, and modern databases. 
            Creating scalable web and mobile applications with cutting-edge technologies, hosting, and domain management.
          </p>
      </div>

        {/* Redesigned Layout - No Empty Space */}
        <div ref={techStackRef} className="mb-24">
          {/* About Content - Full Width */}
          <div className="mb-12 sm:mb-16">
            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-3xl border border-white/30 dark:border-slate-700/40 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5"></div>
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-code text-white text-lg sm:text-xl lg:text-2xl"></i>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                      Full-Stack & Mobile Developer
              </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">5+ Years Experience</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                      I'm a passionate full-stack developer specializing in <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">Next.js</span>, <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">React.js</span>, and <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">React Native</span> for cross-platform development. 
                      With expertise in <span className="font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">Node.js</span>, <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">PostgreSQL</span>, <span className="font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">MongoDB</span>, and <span className="font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">Firebase</span>, 
                      I create scalable web and mobile applications that drive business success.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                      My tech stack includes cutting-edge frameworks like <span className="font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">Tailwind CSS</span>, <span className="font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">Shadcn/ui</span>, 
                      and <span className="font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">GSAP</span> for creating stunning user interfaces with smooth animations. 
                      I also handle complete deployment solutions including <span className="font-bold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">Vercel</span>, <span className="font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">Netlify</span>, <span className="font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">AWS</span>, and domain management.
                    </p>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                      I believe in writing clean, maintainable code and creating exceptional user experiences. 
                      Every project I work on combines technical excellence with creative innovation to deliver 
                      solutions that not only meet requirements but exceed expectations.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => scrollToSection('contact', -80)}
                        className="btn-primary group px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                        <i className="fas fa-paper-plane group-hover:animate-bounce text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>Get In Touch</span>
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio', -80)}
                        className="btn-secondary group px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                        <i className="fas fa-eye group-hover:animate-pulse text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>View Work</span>
                </button>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned Tech Stack - Modern Grid Layout */}
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-3xl border border-white/30 dark:border-slate-700/40 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5"></div>
            <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-cogs text-white text-lg sm:text-xl lg:text-2xl"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                    My Tech Stack
              </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">15+ Technologies</p>
                </div>
              </div>
              
              {/* Modern Skills Grid - All Technologies Together */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {[...techStack.frontend, ...techStack.backend, ...techStack.database, ...techStack.hosting].map((tech, index) => (
                  <div key={index} className="tech-card group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-700/80 dark:to-slate-600/80 border border-slate-200/50 dark:border-slate-600/50 hover:shadow-2xl hover:scale-105 sm:hover:scale-110 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                    {/* Card Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Tech Icon */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <i className={`${tech.icon} text-lg sm:text-xl lg:text-2xl`}></i>
                      </div>
                      
                      {/* Tech Name */}
                      <h5 className="font-bold text-sm sm:text-base lg:text-lg text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">{tech.name}</h5>
                      
                      {/* Animated Skill Level */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">{tech.level}%</span>
                          <div className="flex gap-0.5 sm:gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                                  i < Math.floor(tech.level / 20) 
                                    ? `bg-gradient-to-r ${tech.color}` 
                                    : 'bg-slate-200 dark:bg-slate-600'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        {/* Animated Progress Bar */}
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{ 
                              width: `${tech.level}%`,
                              animationDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{tech.description}</p>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${tech.color} transition-all duration-500`}></div>
                  </div>
                ))}
              </div>
              
              {/* Skills Summary */}
              <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/30 dark:border-blue-700/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="fas fa-paint-brush text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm sm:text-base">Frontend</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{techStack.frontend.length} Technologies</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200/30 dark:border-green-700/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="fas fa-server text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm sm:text-base">Backend</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{techStack.backend.length} Technologies</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/30 dark:border-purple-700/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="fas fa-database text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm sm:text-base">Database</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{techStack.database.length} Technologies</p>
                </div>

                <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-200/30 dark:border-indigo-700/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="fas fa-cloud-upload-alt text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm sm:text-base">Hosting</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{techStack.hosting.length} Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Achievements */}
        <div ref={achievementsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="achievement-card text-center p-4 sm:p-6 lg:p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-3xl border border-white/30 dark:border-slate-700/40 hover:shadow-4xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 group overflow-hidden relative"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <i className={`fas ${achievement.icon} text-white text-xl sm:text-2xl lg:text-3xl`}></i>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{achievement.number}</div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 uppercase tracking-wider">{achievement.label}</div>
                  </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-500"></div>
                  </div>
          ))}
                </div>

        {/* Enhanced Call to Action with GSAP */}
        <div ref={ctaRef} className="text-center">
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/30 dark:border-slate-700/40 shadow-3xl overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
            <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-indigo-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400/60 rounded-full animate-float"></div>
              <div className="absolute top-3/4 right-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-indigo-400/60 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-cyan-400/60 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div ref={ctaIconRef} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                  <i className="fas fa-handshake text-white text-2xl sm:text-3xl md:text-4xl"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h3 ref={ctaTitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white">
                Ready to Work Together?
              </h3>
                  <p ref={ctaSubtitleRef} className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Let's Create Something Amazing</p>
                </div>
              </div>
              
              <p ref={ctaDescriptionRef} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
                Let's discuss your project and bring your ideas to life with cutting-edge technology and creative solutions.
                I'm here to help you achieve your digital goals with professional expertise and innovative approaches.
              </p>
              
              <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
                <button 
                  onClick={() => scrollToSection('contact', -80)}
                  className="cta-button btn-primary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                  <i className="fas fa-rocket group-hover:animate-bounce text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>Start a Project</span>
                </button>
                <button 
                  onClick={() => scrollToSection('services', -80)}
                  className="cta-button btn-secondary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                  <i className="fas fa-cogs group-hover:animate-spin text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>View Services</span>
                </button>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default About;

