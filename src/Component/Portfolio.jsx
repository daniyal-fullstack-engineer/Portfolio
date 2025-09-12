import React, { useRef, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Button from "./Button";

const projects = [
    {
        img: "https://i.postimg.cc/76GsJG3q/Screenshot-2025-04-06-025813.png",
        title: "NexOnPackaging Dashboard",
        description: "Advanced admin dashboard with real-time analytics and user management.",
        link: "https://admin.nexonpackaging.com/",
        tech: ["React", "Node.js", "MongoDB"],
        category: "Web App",
        featured: true
      },
      {
        img: "https://i.postimg.cc/xjX5C26P/Screenshot-2025-04-06-024751.png",
        title: "NexOnPackaging",
        description: "E-commerce platform for packaging solutions with modern UI/UX.",
        link: "https://www.nexonpackaging.com/",
        tech: ["Next.js", "Tailwind CSS", "Stripe"],
        category: "E-commerce",
        featured: true
      },
      {
        img: "https://i.postimg.cc/d1H47SKg/Screenshot-2025-04-06-024039.png",
        title: "My Quicks",
        description: "Fast delivery service platform with real-time tracking.",
        link: "https://myquicks.com/",
        tech: ["React Native", "Firebase", "Maps API"],
        category: "Mobile App",
        featured: true
      },
      {
        img: "https://i.postimg.cc/4x98Jmy5/dukhan.png",
        title: "Dukan Mine",
        description: "Mining industry management system with advanced reporting.",
        link: "https://dukanmine.com/",
        tech: ["Vue.js", "Python", "PostgreSQL"],
        category: "Web App",
        featured: false
      },
      {
        img: "https://i.postimg.cc/sD0CRsBv/resume-builder.png",
        title: "Resume Builder",
        description: "AI-powered resume builder with multiple templates.",
        link: "https://app.thepathfinderhub.com/",
        tech: ["Next.js", "AI/ML", "PDF Generation"],
        category: "Web App",
        featured: true
      },
      {
        img: "https://i.postimg.cc/Nf0vV5j3/roi.png",
        title: "ROI Level Up",
        description: "Investment tracking platform with portfolio analytics.",
        link: "https://roilevelup.com/",
        tech: ["React", "Chart.js", "Financial APIs"],
        category: "Web App",
        featured: false
      },
      {
        img: "https://i.postimg.cc/2SQ6j1n0/gym.png",
        title: "Gym Management",
        description: "Complete gym management system with member tracking.",
        link: "https://herakleangym.vercel.app/login",
        tech: ["React", "Firebase", "Payment Gateway"],
        category: "Web App",
        featured: false
      },
      {
        img: "https://i.postimg.cc/0QChXsR5/amberoil.png",
        title: "Amber Oil",
        description: "Oil trading platform with market analysis tools.",
        link: "https://www.amberoil.ie/",
        tech: ["Angular", "TypeScript", "Trading APIs"],
        category: "Web App",
        featured: false
      },
      {
        img: "https://i.postimg.cc/k5K08STb/mcc.png",
        title: "MCCI",
        description: "Chamber of Commerce website with member portal.",
        link: "https://www.mcci.ie/",
        tech: ["WordPress", "PHP", "MySQL"],
        category: "Website",
        featured: false
      },
      {
        img: "https://i.postimg.cc/C5PXYsxW/iki.png",
        title: "IKI",
        description: "Educational platform with interactive learning modules.",
        link: "https://www.ikc.ie/",
        tech: ["React", "LMS", "Video Streaming"],
        category: "Web App",
        featured: false
      },
      {
        img: "https://i.postimg.cc/DZhtczNY/pegobal.png",
        title: "PE Global",
        description: "Global recruitment platform with job matching AI.",
        link: "https://www.peglobal.net/",
        tech: ["Next.js", "AI/ML", "Job APIs"],
        category: "Web App",
        featured: true
      },
];

export default function PortfolioCardStackFinal() {
  const component = useRef(null);
  const stackContainer = useRef(null);
  
  // Show only featured projects (first 6)
  const featuredProjects = projects.filter(project => project.featured).slice(0, 6);

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-item");
      
      gsap.set(cards, {
        top: (i) => i * 15,
        scale: (i) => 1 - i * 0.05,
        zIndex: (i) => cards.length - i,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackContainer.current,
          start: "top top",
          end: `+=${(cards.length) * 500}`, // Increased end value slightly for last card
          pin: true,
          scrub: 1.5,
        }
      });

      cards.slice(0, -1).forEach((card, i) => {
        const nextCard = cards[i + 1];
        tl.to(card, {
          // ✅ FIX 2: Added autoAlpha for a clean fade-out and hide.
          autoAlpha: 0,
          yPercent: -120,
          ease: "power1.inOut"
        }, `card-${i}`)
        .to(nextCard, {
            top: 0,
            scale: 1,
            ease: "power1.inOut"
        }, `card-${i}`);
      });

    }, component);
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === stackContainer.current) {
          trigger.kill();
        }
      });
      ctx.revert();
    };
  }, []);

  return (
    <div ref={component} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-slate-300 dark:border-slate-600 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>

        {/* Floating Geometric Shapes with Enhanced Animations */}
        <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full opacity-20 dark:opacity-30 animate-float hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute top-40 right-4 md:right-20 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-purple-400 to-indigo-400 dark:from-purple-500 dark:to-indigo-500 rounded-lg rotate-45 opacity-20 dark:opacity-30 animate-float hover:rotate-90 transition-transform duration-500" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-4 md:left-20 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-indigo-400 to-cyan-400 dark:from-indigo-500 dark:to-cyan-500 rounded-full opacity-20 dark:opacity-30 animate-float hover:scale-125 transition-transform duration-300" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-500 dark:to-blue-500 rounded-lg rotate-12 opacity-20 dark:opacity-30 animate-float hover:rotate-45 transition-transform duration-500" style={{animationDelay: '3s'}}></div>
        
        {/* Enhanced Gradient Orbs with Movement */}
        <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-full blur-xl animate-pulse-slow hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute top-3/4 right-1/4 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-400/30 dark:to-indigo-400/30 rounded-full blur-xl animate-pulse-slow hover:scale-110 transition-transform duration-500" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 dark:from-indigo-400/30 dark:to-cyan-400/30 rounded-full blur-xl animate-pulse-slow hover:scale-110 transition-transform duration-500" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Tech Icons with Enhanced Movement */}
        <div className="absolute top-32 right-8 md:right-32 text-blue-400/40 dark:text-blue-300/50 text-xl md:text-2xl animate-bounce-slow hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer">
          <i className="fas fa-laptop-code"></i>
        </div>
        <div className="absolute top-64 left-8 md:left-32 text-purple-400/40 dark:text-purple-300/50 text-lg md:text-xl animate-bounce-slow hover:text-purple-500 dark:hover:text-purple-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-mobile-alt"></i>
        </div>
        <div className="absolute bottom-64 right-8 md:right-40 text-indigo-400/40 dark:text-indigo-300/50 text-xl md:text-2xl animate-bounce-slow hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="absolute bottom-32 left-8 md:left-40 text-cyan-400/40 dark:text-cyan-300/50 text-lg md:text-xl animate-bounce-slow hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}>
          <i className="fas fa-chart-line"></i>
        </div>

        {/* Additional Floating Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-200/20 dark:border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400 dark:bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-cyan-400 dark:bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Professional Header Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <i className="fas fa-code text-blue-600 dark:text-blue-400 animate-spin-slow"></i>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            My Creative <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            A showcase of my latest work, featuring modern web applications, e-commerce platforms, and business solutions built with cutting-edge technologies.
          </p>
          <p className="mt-8 text-slate-500 dark:text-slate-400 animate-pulse">Scroll down to explore</p>
        </div>
      </section>


      {/* Stacked Cards Section */}
      <section className="relative z-10">
        <div ref={stackContainer} className="relative h-screen">
          {featuredProjects.map((project, index) => (
            <div key={index} className="card-item absolute inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                <div className="relative h-60 sm:h-72 md:h-96 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm sm:text-base">Click to view details</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-200/50 dark:border-blue-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      icon="fas fa-eye"
                      className="flex-1"
                    >
                      Preview
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      icon="fas fa-external-link-alt"
                      className="flex-1"
                      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                    >
                      Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* View All Projects Button Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <i className="fas fa-rocket text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Explore More Projects
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover my complete portfolio including web applications, mobile apps, e-commerce platforms, and business solutions. See all {projects.length} projects with detailed case studies.
            </p>
            <Link to="/all-projects" className="inline-block">
              <Button
                variant="primary"
                size="lg"
                icon="fas fa-arrow-right"
                className="group"
              >
                View All Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </Button>
            </Link>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>All {projects.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-code text-blue-500"></i>
                <span>Multiple Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-mobile-alt text-purple-500"></i>
                <span>Web & Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}
