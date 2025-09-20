import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // Use native smooth scroll (custom smooth scroll is handled globally)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Ensure page starts at top on refresh and handle page load
  useEffect(() => {
    // Scroll to top immediately on component mount
    window.scrollTo(0, 0);
    
    // Also handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <>
      {/* Modern Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-6 z-[9999] group transition-all duration-500 transform cursor-pointer ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }`}
        title="Back to top"
      >
        {/* Main Button Container */}
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 hover:rotate-3">
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"></div>
          
          {/* Icon Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 drop-shadow-lg" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </div>
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
          
          {/* Progress Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          </div>
          
          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute top-1 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Back to Top
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
      </button>
    </>
  );
};

export default ScrollToTop;
