import React, { useState } from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function HireMe() {
  const { scrollToSection } = useSmoothScroll();
  const [isHovered, setIsHovered] = useState(false);


  const handleViewCV = () => {
    window.open('/DaniyalCv.pdf', '_blank');
  };

  const handleHireMe = () => {
    // Smooth scroll to contact section
    scrollToSection('contact', -80);
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
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <section 
        className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
        id="hire-me"
      >
        {/* Enhanced Background Elements */}
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
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
                <i className="fas fa-handshake text-blue-600 dark:text-blue-400 animate-pulse"></i>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Let&apos;s Work Together</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Have Any <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Project</span> in Mind?
              </h2>
              
              <div className="flex justify-center mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Description Section */}
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                I&apos;d love to hear about it! Whether it&apos;s a small idea or a grand vision, 
                I&apos;m ready to bring it to life. Let&apos;s collaborate and create something amazing together.
              </p>
              
              {/* Enhanced Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="group p-6 rounded-3xl bg-white/80 dark:bg-slate-700/80 backdrop-blur-xl border border-white/30 dark:border-slate-600/40 shadow-xl hover:shadow-2xl transition-all duration-300">
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
            <div className="text-center mb-12">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
                <button 
                  onClick={handleViewCV} 
                  className="btn-primary group flex items-center justify-center gap-3"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i className="fas fa-file-pdf text-lg"></i>
                  <span>View My CV</span>
                </button>

                <button 
                  onClick={handleHireMe} 
                  className="btn-secondary group flex items-center justify-center gap-3"
                >
                  <i className="fas fa-rocket text-lg"></i>
                  <span>Hire Me Now</span>
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">Or reach out directly:</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a 
                    href="mailto:your-email@example.com" 
                    className="btn-secondary group flex items-center justify-center gap-3"
                  >
                    <i className="fas fa-envelope text-lg"></i>
                    <span>Email Me</span>
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="btn-secondary group flex items-center justify-center gap-3"
                  >
                    <i className="fas fa-phone text-lg"></i>
                    <span>Call Me</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
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
