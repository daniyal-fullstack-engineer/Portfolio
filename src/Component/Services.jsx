import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function Services() {
  const { scrollToSection } = useSmoothScroll();

  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["Cross-platform", "Native Performance", "App Store Ready", "Push Notifications"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description: "Robust server-side solutions with APIs, databases, and cloud infrastructure using Node.js and Python.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Scalable Architecture"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with user experience and accessibility in mind.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "fas fa-database",
      title: "Database Design",
      description: "Efficient database architecture and optimization for both SQL and NoSQL database systems.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup & Recovery"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Vercel, and other platforms.",
      features: ["Cloud Migration", "Auto-scaling", "CDN Setup", "Monitoring & Analytics"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}></div>
      </div>

      {/* Floating Elements Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-4 md:right-20 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-4 md:left-20 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg rotate-12 opacity-20"></div>
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
        
        {/* Floating Service Icons */}
        <div className="absolute top-32 right-8 md:right-32 text-blue-400/30 text-xl md:text-2xl">
          <i className="fas fa-palette"></i>
        </div>
        <div className="absolute top-64 left-8 md:left-32 text-purple-400/30 text-lg md:text-xl">
          <i className="fas fa-code"></i>
        </div>
        <div className="absolute bottom-64 right-8 md:right-40 text-indigo-400/30 text-xl md:text-2xl">
          <i className="fas fa-cogs"></i>
        </div>
        <div className="absolute bottom-32 left-8 md:left-40 text-cyan-400/30 text-lg md:text-xl">
          <i className="fas fa-mobile-alt"></i>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400/20 text-3xl md:text-4xl">
          <i className="fas fa-rocket"></i>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-700/50 dark:border-blue-700/50 mb-6">
            <i className="fas fa-cogs text-blue-400 dark:text-blue-400"></i>
            <span className="text-sm font-medium text-blue-300 dark:text-blue-300">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive development services to help you build, scale, and maintain your digital presence. 
            From concept to deployment, I&apos;m here to bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-slate-700/50 hover:border-white/20 dark:hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full"></div>
                  <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400/60 rounded-full"></div>
                </div>
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-white dark:text-white mb-4 group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-300 dark:text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    <span className="text-slate-300 dark:text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30 dark:border-slate-700/40 shadow-3xl overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full"></div>
              <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400/60 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your project requirements and create something amazing together. 
                I&apos;m here to help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button 
                  onClick={() => scrollToSection('contact', -80)}
                  className="btn-primary animate-fade-in-up"
                >
                  <i className="fas fa-rocket mr-2"></i>
                  Start a Project
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio', -80)}
                  className="btn-secondary animate-fade-in-up"
                  style={{animationDelay: '0.1s'}}
                >
                  <i className="fas fa-eye mr-2"></i>
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}