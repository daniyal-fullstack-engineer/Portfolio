import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";

const About = () => {
  const { scrollToSection } = useSmoothScroll();

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
      { name: "Node.js", icon: "fab fa-node-js", level: 92, color: "from-green-500 to-emerald-600", description: "JavaScript runtime environment" },
      { name: "Express.js", icon: "fas fa-server", level: 90, color: "from-gray-500 to-gray-700", description: "Web application framework" },
      { name: "Python", icon: "fab fa-python", level: 85, color: "from-yellow-500 to-orange-500", description: "Versatile programming language" },
      { name: "Django", icon: "fab fa-python", level: 80, color: "from-green-600 to-green-800", description: "High-level Python web framework" },
      { name: "PostgreSQL", icon: "fas fa-database", level: 88, color: "from-blue-600 to-indigo-700", description: "Advanced relational database" },
      { name: "MongoDB", icon: "fas fa-leaf", level: 85, color: "from-green-400 to-green-600", description: "NoSQL document database" },
      { name: "Redis", icon: "fas fa-memory", level: 82, color: "from-red-500 to-red-700", description: "In-memory data structure store" }
    ],
    tools: [
      { name: "Git", icon: "fab fa-git-alt", level: 95, color: "from-orange-500 to-red-500", description: "Version control system" },
      { name: "Docker", icon: "fab fa-docker", level: 85, color: "from-blue-500 to-blue-700", description: "Containerization platform" },
      { name: "AWS", icon: "fab fa-aws", level: 80, color: "from-orange-400 to-orange-600", description: "Cloud computing services" },
      { name: "Vercel", icon: "fas fa-rocket", level: 90, color: "from-gray-700 to-gray-900", description: "Frontend cloud platform" },
      { name: "Figma", icon: "fab fa-figma", level: 88, color: "from-purple-500 to-pink-500", description: "Design and prototyping tool" },
      { name: "VS Code", icon: "fas fa-code", level: 95, color: "from-blue-500 to-blue-700", description: "Code editor" }
    ]
  };

  const achievements = [
    {
      icon: "fas fa-trophy",
      title: "5+ Years Experience",
      description: "Extensive experience in full-stack development",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "fas fa-project-diagram",
      title: "50+ Projects Completed",
      description: "Successfully delivered projects across various industries",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: "fas fa-users",
      title: "30+ Happy Clients",
      description: "Built lasting relationships with satisfied clients",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "fas fa-star",
      title: "100% Client Satisfaction",
      description: "Maintained perfect client satisfaction rate",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 shadow-lg"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20 shadow-lg"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 shadow-lg"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-12 opacity-20 shadow-lg"></div>

        {/* Floating Tech Icons */}
        <div className="absolute top-32 right-32 text-blue-400/40 text-3xl">
            <i className="fab fa-react"></i>
          </div>
        <div className="absolute top-64 left-32 text-purple-400/40 text-2xl">
            <i className="fab fa-node-js"></i>
          </div>
        <div className="absolute bottom-64 right-40 text-indigo-400/40 text-3xl">
          <i className="fab fa-js-square"></i>
          </div>
        <div className="absolute bottom-32 left-40 text-blue-400/40 text-2xl">
            <i className="fab fa-python"></i>
          </div>
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-2xl shadow-2xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/25 to-indigo-500/25 rounded-full blur-2xl shadow-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-2xl shadow-2xl"></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-700/50 dark:border-blue-700/50 mb-6">
            <i className="fas fa-user text-blue-400 dark:text-blue-400"></i>
            <span className="text-sm font-medium text-blue-300 dark:text-blue-300">About Me</span>
            </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                I&apos;m a passionate full-stack developer with expertise in modern web technologies, 
            dedicated to creating exceptional digital experiences that drive business growth.
          </p>
      </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-6">My Story</h3>
              <div className="space-y-4 text-slate-300 dark:text-slate-300 leading-relaxed">
                <p>
                  With over 5 years of experience in full-stack development, I&apos;ve had the privilege of working 
                  with diverse clients and creating solutions that make a real impact. My journey began with 
                  a curiosity about how websites work, which evolved into a passion for building digital experiences.
                </p>
                <p>
                  I specialize in modern web technologies including React, Next.js, Node.js, and Python. 
                  My approach combines technical expertise with creative problem-solving to deliver 
                  solutions that are both functional and beautiful.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying up-to-date with the latest industry trends.
                    </p>
                  </div>
                  
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                <button 
                  onClick={() => scrollToSection('contact', -80)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                  <i className="fas fa-paper-plane text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>Get In Touch</span>
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio', -80)}
                  className="bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-lg font-semibold border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105 group px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                  <i className="fas fa-eye text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>View Work</span>
                </button>
              </div>
                  </div>
                </div>

          {/* Right Column - Tech Stack */}
          <div className="space-y-8">
            <div className="bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-6">Tech Stack</h3>
              
              {/* Frontend Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-400 dark:text-blue-400 mb-4">Frontend</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {techStack.frontend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className={`w-10 h-10 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${tech.icon} text-white text-lg`}></i>
              </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{tech.name}</div>
                        <div className="text-slate-400 text-xs">{tech.description}</div>
            </div>
          </div>
                  ))}
                </div>
              </div>
              
              {/* Backend Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-green-400 dark:text-green-400 mb-4">Backend</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {techStack.backend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className={`w-10 h-10 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${tech.icon} text-white text-lg`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{tech.name}</div>
                        <div className="text-slate-400 text-xs">{tech.description}</div>
                      </div>
                  </div>
                ))}
                </div>
                </div>
                
              {/* Tools & Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-purple-400 dark:text-purple-400 mb-4">Tools & Others</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {techStack.tools.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className={`w-10 h-10 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${tech.icon} text-white text-lg`}></i>
                  </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{tech.name}</div>
                        <div className="text-slate-400 text-xs">{tech.description}</div>
                </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <p className="text-slate-300 dark:text-slate-300 max-w-2xl mx-auto">
              Numbers that reflect my dedication and expertise in delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-slate-700/50 text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${achievement.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-white dark:text-white mb-2">{achievement.title}</h4>
                <p className="text-slate-300 dark:text-slate-300 text-sm">{achievement.description}</p>
                  </div>
          ))}
          </div>
                </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/30 dark:border-slate-700/40 shadow-3xl overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
            <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-indigo-400/15 to-cyan-400/15 rounded-full blur-2xl"></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400/60 rounded-full"></div>
              <div className="absolute top-3/4 right-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400/60 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-indigo-400/60 rounded-full"></div>
              <div className="absolute top-1/2 right-1/3 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-cyan-400/60 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                  <i className="fas fa-rocket text-white text-2xl sm:text-3xl md:text-4xl"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                    Ready to Start Your Project?
              </h3>
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                    Let&apos;s create something amazing together
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always excited to work on new projects and help bring your ideas to life. 
                Whether you need a simple website or a complex web application, I&apos;m here to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
                <button 
                  onClick={() => scrollToSection('contact', -80)}
                  className="cta-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                  <i className="fas fa-rocket text-sm sm:text-base md:text-lg lg:text-xl"></i>
                  <span>Start a Project</span>
                </button>
                <button 
                  onClick={() => scrollToSection('services', -80)}
                  className="cta-button bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-lg font-semibold border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105 group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                >
                  <i className="fas fa-cogs text-sm sm:text-base md:text-lg lg:text-xl"></i>
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