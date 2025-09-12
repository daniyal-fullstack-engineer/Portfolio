import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const DarkBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Only initialize Lenis on desktop devices
    if (!isMobile) {
      // Initialize Lenis smooth scroll for desktop only
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

      // Lenis animation frame
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <main 
      ref={bannerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-0 mt-0 -mt-16 pb-20 sm:pb-24 md:pb-32" 
      id="home-section"
      role="main"
      aria-label="Main content"
    >
      {/* Enhanced Background with Animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30 dark:from-blue-900/30 dark:via-transparent dark:to-purple-900/30"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-purple-500/30 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 dark:from-purple-500/30 dark:to-indigo-500/30 rounded-lg rotate-45 animate-float opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 dark:from-indigo-500/30 dark:to-cyan-500/30 rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/30 dark:to-blue-500/30 rounded-lg rotate-12 animate-float opacity-60" style={{animationDelay: '3s'}}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 dark:from-purple-400/20 dark:to-indigo-400/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 dark:from-indigo-400/20 dark:to-cyan-400/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-32 right-32 text-blue-300/40 dark:text-blue-300/40 text-2xl animate-bounce-slow hover:text-blue-400 dark:hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer">
        <i className="fas fa-laptop-code"></i>
      </div>
      <div className="absolute top-64 left-32 text-purple-300/40 dark:text-purple-300/40 text-xl animate-bounce-slow hover:text-purple-400 dark:hover:text-purple-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>
        <i className="fas fa-mobile-alt"></i>
      </div>
      <div className="absolute bottom-64 right-40 text-indigo-300/40 dark:text-indigo-300/40 text-2xl animate-bounce-slow hover:text-indigo-400 dark:hover:text-indigo-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
        <i className="fas fa-code"></i>
      </div>
      <div className="absolute bottom-32 left-40 text-cyan-300/40 dark:text-cyan-300/40 text-xl animate-bounce-slow hover:text-cyan-400 dark:hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}>
        <i className="fas fa-chart-line"></i>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/20 dark:border-blue-400/20 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300/60 dark:bg-blue-300/60 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-300/60 dark:bg-purple-300/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-cyan-300/60 dark:bg-cyan-300/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-slate-600/30 dark:border-slate-600/30 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-24 md:pt-32">
        {/* Greeting */}
        <div className="mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4 md:mt-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 dark:from-blue-900/40 dark:to-purple-900/40 border border-blue-700/50 dark:border-blue-700/50 backdrop-blur-xl shadow-lg">
            <div className="relative">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute inset-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <i className="fas fa-hand-wave text-blue-400 dark:text-blue-400 text-base sm:text-lg"></i>
            <span className="text-blue-300 dark:text-blue-300 text-xs sm:text-sm font-medium tracking-wide">
              Hello, I'm
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
          <span className="block text-white dark:text-white">M Daniyal</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 dark:text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          I craft exceptional digital experiences through modern web and mobile development, 
          combining creativity with cutting-edge technology to bring your ideas to life.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
          <a 
            href="#portfolio" 
            className="btn-primary group px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl min-h-[48px] touch-manipulation flex items-center justify-center gap-2 active:scale-95"
          >
            <i className="fas fa-eye group-hover:animate-pulse text-sm sm:text-base md:text-lg lg:text-xl"></i>
            <span>View My Work</span>
          </a>
          
          <a 
            href="#contact" 
            className="btn-secondary group px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl min-h-[48px] touch-manipulation flex items-center justify-center gap-2 active:scale-95"
          >
            <i className="fas fa-paper-plane group-hover:animate-bounce text-sm sm:text-base md:text-lg lg:text-xl"></i>
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-2">50+</div>
            <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-2">30+</div>
            <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 uppercase tracking-wider">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-2">3+</div>
            <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 uppercase tracking-wider">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-2">15+</div>
            <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 uppercase tracking-wider">Technologies</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-slate-400 dark:text-slate-400">
          <span className="text-sm font-medium tracking-wider uppercase animate-pulse">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400/50 dark:border-slate-400/50 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mt-2 animate-bounce"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DarkBanner;