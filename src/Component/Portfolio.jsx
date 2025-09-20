'use client'
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import ImageWithSkeleton from "./ImageWithSkeleton";
import Image from "next/image";

const projects = [
    {
        img: "https://i.postimg.cc/76GsJG3q/Screenshot-2025-04-06-025813.png",
        title: "NexOnPackaging Dashboard",
        description: "Advanced admin dashboard with real-time analytics and user management.",
        link: "https://admin.nexonpackaging.com/",
        tech: ["React", "Node.js", "MongoDB"],
        category: "Web App",
        featured: true,
        status: "Live",
        year: "2024"
      },
      {
        img: "https://i.postimg.cc/xjX5C26P/Screenshot-2025-04-06-024751.png",
        title: "NexOnPackaging",
        description: "E-commerce platform for packaging solutions with modern UI/UX.",
        link: "https://www.nexonpackaging.com/",
        tech: ["Next.js", "Tailwind CSS", "Stripe"],
        category: "E-commerce",
    featured: true,
    status: "Live",
    year: "2024"
      },
      {
        img: "https://i.postimg.cc/d1H47SKg/Screenshot-2025-04-06-024039.png",
        title: "My Quicks",
        description: "Fast delivery service platform with real-time tracking.",
        link: "https://myquicks.com/",
        tech: ["React Native", "Firebase", "Maps API"],
        category: "Mobile App",
    featured: true,
    status: "Live",
    year: "2024"
      },
      {
        img: "https://i.postimg.cc/4x98Jmy5/dukhan.png",
        title: "Dukan Mine",
        description: "Mining industry management system with advanced reporting.",
        link: "https://dukanmine.com/",
        tech: ["Vue.js", "Python", "PostgreSQL"],
        category: "Web App",
    featured: false,
    status: "Live",
    year: "2023"
      },
      {
        img: "https://i.postimg.cc/sD0CRsBv/resume-builder.png",
        title: "Resume Builder",
        description: "AI-powered resume builder with multiple templates.",
        link: "https://app.thepathfinderhub.com/",
        tech: ["Next.js", "AI/ML", "PDF Generation"],
        category: "Web App",
    featured: true,
    status: "Live",
    year: "2024"
      },
      {
        img: "https://i.postimg.cc/Nf0vV5j3/roi.png",
        title: "ROI Level Up",
        description: "Investment tracking platform with portfolio analytics.",
        link: "https://roilevelup.com/",
        tech: ["React", "Chart.js", "Financial APIs"],
        category: "Web App",
    featured: false,
    status: "Live",
    year: "2023"
      },
      {
        img: "https://i.postimg.cc/2SQ6j1n0/gym.png",
        title: "Gym Management",
        description: "Complete gym management system with member tracking.",
        link: "https://herakleangym.vercel.app/login",
        tech: ["React", "Firebase", "Payment Gateway"],
        category: "Web App",
    featured: false,
    status: "Live",
    year: "2023"
      },
      {
        img: "https://i.postimg.cc/0QChXsR5/amberoil.png",
        title: "Amber Oil",
        description: "Oil trading platform with market analysis tools.",
        link: "https://www.amberoil.ie/",
        tech: ["Angular", "TypeScript", "Trading APIs"],
        category: "Web App",
    featured: false,
    status: "Live",
    year: "2023"
      },
      {
        img: "https://i.postimg.cc/k5K08STb/mcc.png",
        title: "MCCI",
        description: "Chamber of Commerce website with member portal.",
        link: "https://www.mcci.ie/",
        tech: ["WordPress", "PHP", "MySQL"],
        category: "Website",
    featured: false,
    status: "Live",
    year: "2023"
      },
      {
        img: "https://i.postimg.cc/C5PXYsxW/iki.png",
        title: "IKI",
        description: "Educational platform with interactive learning modules.",
        link: "https://www.ikc.ie/",
        tech: ["React", "LMS", "Video Streaming"],
        category: "Web App",
    featured: false,
    status: "Live",
    year: "2023"
  }
];

const categories = [
  { name: "All", value: "all", icon: "fas fa-th" },
  { name: "Web App", value: "Web App", icon: "fas fa-laptop-code" },
  { name: "Mobile App", value: "Mobile App", icon: "fas fa-mobile-alt" },
  { name: "E-commerce", value: "E-commerce", icon: "fas fa-shopping-cart" },
  { name: "Website", value: "Website", icon: "fas fa-globe" }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Filter animation
      gsap.fromTo(filterRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: 0.2,
          ease: "power3.out",
        scrollTrigger: {
            trigger: filterRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Projects animation
      gsap.fromTo(projectsRef.current?.children, 
        { opacity: 0, y: 60, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
            scale: 1,
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "Development": return "bg-yellow-500";
      case "Planning": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Web App": return "from-blue-500 to-cyan-500";
      case "Mobile App": return "from-purple-500 to-pink-500";
      case "E-commerce": return "from-green-500 to-emerald-500";
      case "Website": return "from-orange-500 to-red-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
      id="portfolio" 
      data-scroll-index={3}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 md:grid-cols-24 h-full">
            {Array.from({ length: 288 }).map((_, i) => (
              <div key={i} className="border border-blue-400/10"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 mb-6">
            <i className="fas fa-code text-blue-500 dark:text-blue-400 text-sm"></i>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Creative</span> Works
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of innovative projects that showcase modern web development, 
            mobile applications, and creative solutions for real-world challenges.
          </p>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h3>
            
            {/* Debug info - remove this after testing */}
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Debug: {projects.length} projects loaded
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">View Mode:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid" 
                    ? "bg-blue-500 text-white" 
                    : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                <i className="fas fa-th"></i>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list" 
                    ? "bg-blue-500 text-white" 
                    : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>

          <div className={`grid gap-6 sm:gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {featuredProjects.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.img} 
                    alt={project.title} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.log('❌ Image error:', project.img);
                      // Show fallback content
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                    onLoad={() => {
                      console.log('✅ Image loaded successfully:', project.img);
                    }}
                    priority={index < 3} // Prioritize first 3 images
                    unoptimized={true} // Disable Next.js optimization temporarily
                  />
                  
                  {/* Fallback content when image fails to load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-image text-white text-2xl"></i>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-400 text-sm">Image Preview</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                      <i className="fas fa-tag"></i>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-black/50 backdrop-blur-sm">
                      <i className="fas fa-calendar"></i>
                      {project.year}
                    </span>
                    </div>
                  
                  {/* Hover Actions */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View Live
                    </a>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                      <i className="fas fa-info-circle"></i>
                      Details
                    </button>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Actions */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <i className="fas fa-arrow-right text-sm"></i>
                    </a>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors duration-300">
                        <i className="fas fa-heart"></i>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors duration-300">
                        <i className="fas fa-share"></i>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          
          {/* Show All Portfolio Button */}
          <div className="text-center mt-12">
            <Link href="/all-projects">
              <Button
                variant="primary"
                size="lg"
                icon="fas fa-arrow-right"
                className="group"
              >
                View All Portfolio
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </Button>
            </Link>
          </div>
        </div>

        {/* Category Filter */}
       

        {/* All Projects Grid */}
        
            
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl p-8 sm:p-12 border border-blue-500/20 dark:border-purple-500/20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="fas fa-rocket"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start a Project
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                icon="fas fa-download"
                onClick={() => {
                  // Add download CV functionality
                  window.open('/DaniyalCv.pdf', '_blank');
                }}
              >
                Download CV
              </Button>
            </div>
          </div>
          </div>
        </div>
      </section>
  );
}