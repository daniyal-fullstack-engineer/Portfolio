import React from "react";
import useCustomUltraSmoothScroll from "../hooks/useCustomUltraSmoothScroll";

const About = () => {
  const { scrollToElement } = useCustomUltraSmoothScroll();

  const techStack = {
    frontend: [
      { name: "Next.js", icon: "fab fa-react", level: 95, color: "from-blue-500 to-cyan-500", description: "Full-stack React framework" },
      { name: "React.js", icon: "fab fa-react", level: 95, color: "from-blue-400 to-blue-600", description: "Component-based UI library" },
      { name: "React Native", icon: "fab fa-react", level: 88, color: "from-blue-300 to-blue-700", description: "Cross-platform mobile development" },
      { name: "Ant Design", icon: "fas fa-palette", level: 85, color: "from-blue-600 to-blue-800", description: "Enterprise UI design language" },
      { name: "Material-UI", icon: "fab fa-google", level: 82, color: "from-blue-500 to-indigo-600", description: "React component library" },
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
      { name: "PHP", icon: "fab fa-php", level: 78, color: "from-indigo-500 to-purple-600", description: "Server-side scripting language" },
      { name: "WordPress", icon: "fab fa-wordpress", level: 85, color: "from-blue-600 to-blue-800", description: "Content management system" },
      { name: "PostgreSQL", icon: "fas fa-database", level: 88, color: "from-blue-600 to-indigo-700", description: "Advanced relational database" },
      { name: "MongoDB", icon: "fas fa-leaf", level: 85, color: "from-green-400 to-green-600", description: "NoSQL document database" },
      { name: "SQL", icon: "fas fa-database", level: 90, color: "from-blue-500 to-cyan-600", description: "Structured query language" },
      { name: "Redis", icon: "fas fa-memory", level: 82, color: "from-red-500 to-red-700", description: "In-memory data structure store" }
    ],
    tools: [
      { name: "Git", icon: "fab fa-git-alt", level: 95, color: "from-orange-500 to-red-500", description: "Version control system" },
      { name: "Docker", icon: "fab fa-docker", level: 85, color: "from-blue-500 to-blue-700", description: "Containerization platform" },
      { name: "AWS", icon: "fab fa-aws", level: 80, color: "from-orange-400 to-orange-600", description: "Cloud computing services" },
      { name: "Vercel", icon: "fas fa-rocket", level: 90, color: "from-gray-700 to-gray-900", description: "Frontend cloud platform" },
      { name: "Cursor", icon: "fas fa-mouse-pointer", level: 88, color: "from-purple-500 to-pink-500", description: "AI-powered code editor" },
      { name: "ChatGPT API", icon: "fas fa-robot", level: 85, color: "from-green-500 to-emerald-500", description: "AI integration and automation" },
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
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 animate-pulse" style={{animationDelay: `${i * 0.01}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg rotate-45 blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-14 sm:w-28 h-14 sm:h-28 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-10 sm:w-20 h-10 sm:h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg rotate-12 blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Tech Icons Floating */}
        <div className="absolute top-16 sm:top-32 right-8 sm:right-32 text-blue-400/30 text-2xl sm:text-4xl animate-bounce-slow">
            <i className="fab fa-react"></i>
          </div>
        <div className="absolute top-32 sm:top-64 left-8 sm:left-32 text-purple-400/30 text-xl sm:text-3xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>
            <i className="fab fa-node-js"></i>
          </div>
        <div className="absolute bottom-32 sm:bottom-64 right-10 sm:right-40 text-indigo-400/30 text-2xl sm:text-4xl animate-bounce-slow" style={{animationDelay: '1s'}}>
          <i className="fab fa-js-square"></i>
          </div>
        <div className="absolute bottom-16 sm:bottom-32 left-10 sm:left-40 text-cyan-400/30 text-xl sm:text-3xl animate-bounce-slow" style={{animationDelay: '1.5s'}}>
            <i className="fab fa-python"></i>
          </div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Modern Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl border border-blue-700/30 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <i className="fas fa-user text-blue-400 text-lg"></i>
            <span className="text-sm font-semibold text-blue-300 tracking-wide">About Me</span>
            </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 px-4">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
                I&apos;m a passionate full-stack developer with expertise in modern web technologies, 
            dedicated to creating exceptional digital experiences that drive business growth.
          </p>
      </div>

        {/* Modern Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Main Story Card */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-700/30 shadow-2xl overflow-hidden">
              {/* Card Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <i className="fas fa-user text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">My Story</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Full-Stack Developer & Digital Creator</p>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-slate-300 leading-relaxed">
                  <p className="text-sm sm:text-base lg:text-lg">
                    With over <span className="text-blue-400 font-semibold">5 years of experience</span> in full-stack development, 
                    I&apos;ve had the privilege of working with diverse clients and creating solutions that make a real impact.
                </p>
                <p className="text-sm sm:text-base">
                    My journey began with a curiosity about how websites work, which evolved into a passion for building 
                    digital experiences that combine <span className="text-purple-400 font-semibold">technical expertise</span> with 
                    <span className="text-pink-400 font-semibold"> creative problem-solving</span>.
                </p>
                <p className="text-sm sm:text-base">
                    I specialize in modern web and mobile technologies including React, Next.js, React Native, Node.js, and Python. 
                    From responsive web applications to cross-platform mobile apps, I create solutions that work seamlessly across all devices.
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                    </p>
                  </div>
                  
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button 
                  onClick={() => scrollToSection('contact', -80)}
                    className="btn-primary group flex items-center justify-center gap-3"
                >
                    <i className="fas fa-paper-plane"></i>
                  <span>Get In Touch</span>
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio', -80)}
                    className="btn-secondary group flex items-center justify-center gap-3"
                >
                    <i className="fas fa-eye"></i>
                  <span>View Work</span>
                </button>
    <button
      onClick={() => scrollToElement(document.getElementById('tech-skills'), -80)}
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-3 btn-primary"
    >
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span>Show My Story</span>
                  </button>
                </div>
              </div>
                  </div>
                </div>

          {/* Quick Stats Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-chart-line text-white"></i>
                </div>
                <h4 className="text-lg font-bold text-white">Quick Stats</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Experience</span>
                  <span className="text-white font-semibold">5+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Projects</span>
                  <span className="text-white font-semibold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Clients</span>
                  <span className="text-white font-semibold">30+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Satisfaction</span>
                  <span className="text-green-400 font-semibold">100%</span>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-code text-white"></i>
                </div>
                <h4 className="text-lg font-bold text-white">Top Skills</h4>
              </div>
              
              <div className="space-y-3">
                {['React.js', 'Next.js', 'React Native', 'Node.js', 'Ant Design', 'WordPress'].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Tech Skills Section */}
        <div id="tech-skills" className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-700/50 dark:border-purple-700/50 mb-6">
              <i className="fas fa-code text-purple-400 dark:text-purple-400"></i>
              <span className="text-sm font-medium text-purple-300 dark:text-purple-300">Technical Expertise</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Skills</span>
            </h3>
            <p className="text-slate-300 dark:text-slate-300 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I use to bring ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Frontend Technologies */}
            <div className="bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-palette text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-bold text-white dark:text-white">Frontend</h4>
              </div>
              <div className="space-y-3">
                  {techStack.frontend.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                      <i className={`${tech.icon} text-white text-sm`}></i>
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
            <div className="bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-server text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-bold text-white dark:text-white">Backend</h4>
              </div>
              <div className="space-y-3">
                  {techStack.backend.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                      <i className={`${tech.icon} text-white text-sm`}></i>
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
            <div className="bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-tools text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-bold text-white dark:text-white">Tools & Others</h4>
              </div>
              <div className="space-y-3">
                  {techStack.tools.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                      <i className={`${tech.icon} text-white text-sm`}></i>
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

        {/* Modern Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-xl border border-green-700/30 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              <i className="fas fa-trophy text-green-400 text-lg"></i>
              <span className="text-sm font-semibold text-green-300 tracking-wide">Achievements</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Numbers that reflect my dedication and expertise in delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
              <div key={index} className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 shadow-2xl text-center hover:scale-105 transition-all duration-300 overflow-hidden">
                {/* Card Background Effect */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-20 rounded-full blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <i className={`${achievement.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
                  </div>
          ))}
          </div>
                </div>

        {/* Modern Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-700/30 shadow-2xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <i className="fas fa-rocket text-white text-3xl"></i>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                    Ready to Start Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Project?</span>
              </h3>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Let&apos;s create something amazing together
                  </p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed text-lg">
                I&apos;m always excited to work on new projects and help bring your ideas to life. 
                Whether you need a simple website or a complex web application, I&apos;m here to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact', -80)}
                  className="btn-primary group px-8 py-4 text-lg min-h-[56px] flex items-center justify-center gap-3"
                >
                  <i className="fas fa-rocket"></i>
                  <span>Start a Project</span>
                </button>
                <button 
                  onClick={() => scrollToSection('services', -80)}
                  className="btn-secondary group px-8 py-4 text-lg min-h-[56px] flex items-center justify-center gap-3"
                >
                  <i className="fas fa-cogs"></i>
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