import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

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
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
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
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
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
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg">
                Back to Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
