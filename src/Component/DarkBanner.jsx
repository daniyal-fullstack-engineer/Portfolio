import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const DarkBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
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
  }, []);

  return (
    <main 
      ref={bannerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-0 mt-0 -mt-16" 
      id="home-section"
      role="main"
      aria-label="Main content"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/30 dark:via-transparent dark:to-purple-900/30"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-24 md:pt-32">
        {/* Greeting */}
        <div className="mb-4 sm:mb-6 md:mb-8 mt-2 sm:mt-4 md:mt-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/40 dark:to-purple-900/40 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-xl shadow-lg">
            <div className="relative">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute inset-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <i className="fas fa-hand-wave text-blue-600 dark:text-blue-400 text-base sm:text-lg"></i>
            <span className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium tracking-wide">
              Hello, I'm
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
          <span className="block text-slate-900 dark:text-white">M Daniyal</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          I craft exceptional digital experiences through modern web and mobile development, 
          combining creativity with cutting-edge technology to bring your ideas to life.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
          <a 
            href="#portfolio" 
            className="btn-primary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            <i className="fas fa-eye group-hover:animate-pulse text-sm sm:text-base md:text-lg lg:text-xl"></i>
            <span>View My Work</span>
          </a>
          
          <a 
            href="#contact" 
            className="btn-secondary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            <i className="fas fa-paper-plane group-hover:animate-bounce text-sm sm:text-base md:text-lg lg:text-xl"></i>
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2">50+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2">30+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2">3+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2">15+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Technologies</div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400">
          <span className="text-sm font-medium tracking-wider uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400/50 dark:border-slate-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DarkBanner;