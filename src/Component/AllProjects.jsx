import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// Import the same projects data
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

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const navigate = useNavigate();

  // Initialize smooth scroll and scroll to top when component mounts
  useEffect(() => {
    // Clean up any existing Lenis instance
    if (window.lenis) {
      window.lenis.destroy();
      window.lenis = null;
    }

    // Initialize Lenis smooth scroll for AllProjects
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Make Lenis globally available
    window.lenis = lenis;

    // Lenis animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll to top
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter categories
  const categories = ['All', 'Web App', 'E-commerce', 'Mobile App', 'Website'];
  
  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }
    
    // Filter by search term (using debounced value)
    if (debouncedSearchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }, [activeFilter, debouncedSearchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 dark:from-purple-500/30 dark:to-indigo-500/30 rounded-lg rotate-45 animate-float opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 dark:from-indigo-500/30 dark:to-cyan-500/30 rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/30 dark:to-blue-500/30 rounded-lg rotate-12 animate-float opacity-60" style={{animationDelay: '3s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-400/20 dark:to-indigo-400/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 dark:from-indigo-400/20 dark:to-cyan-400/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Tech Icons with Enhanced Movement */}
        <div className="absolute top-32 right-32 text-blue-400/40 dark:text-blue-300/50 text-2xl animate-bounce-slow hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer">
          <i className="fas fa-laptop-code"></i>
        </div>
        <div className="absolute top-64 left-32 text-purple-400/40 dark:text-purple-300/50 text-xl animate-bounce-slow hover:text-purple-500 dark:hover:text-purple-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-mobile-alt"></i>
        </div>
        <div className="absolute bottom-64 right-40 text-indigo-400/40 dark:text-indigo-300/50 text-2xl animate-bounce-slow hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
          <i className="fas fa-code"></i>
        </div>
        <div className="absolute bottom-32 left-40 text-cyan-400/40 dark:text-cyan-300/50 text-xl animate-bounce-slow hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}>
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="absolute top-1/2 right-1/4 text-green-400/40 dark:text-green-300/50 text-xl animate-bounce-slow hover:text-green-500 dark:hover:text-green-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '2s'}}>
          <i className="fas fa-rocket"></i>
        </div>
        <div className="absolute top-1/3 left-1/4 text-orange-400/40 dark:text-orange-300/50 text-lg animate-bounce-slow hover:text-orange-500 dark:hover:text-orange-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '2.5s'}}>
          <i className="fas fa-palette"></i>
        </div>

        {/* Additional Floating Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-200/10 dark:border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/60 dark:bg-blue-300/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400/60 dark:bg-purple-300/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-cyan-400/60 dark:bg-cyan-300/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-slate-300/30 dark:border-slate-600/30 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-lg border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <i className="fas fa-arrow-left"></i>
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white">M Daniyal</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <i className="fas fa-code text-blue-600 dark:text-blue-400"></i>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Complete Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            All My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of {projects.length} projects spanning web applications, mobile apps, e-commerce platforms, and business solutions.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-slate-600 dark:text-slate-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No Projects Found</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                        <p className="text-white/80 text-sm">Click to view details</p>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Portfolio Button */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Back to Featured Projects
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Return to the main portfolio section to see the curated selection of my best work.
            </p>
            <Link to="/">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                Back to Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
