'use client';

import React, { useState, useEffect } from 'react';

const GlobalFloatingIcons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Global Floating Tech Icons - Visible on All Pages */}
     

      {/* Global Floating Social Icons - Visible on All Pages */}
      {/* Fiverr Icon */}
      <div className=" bottom-20 left-6 z-[9998]" style={{ position: 'fixed' }}>
        <button
          onClick={() => window.open("https://www.fiverr.com/daniyalamjad14", "_blank", "noopener,noreferrer")}
          className="group relative w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 hover:rotate-3 flex items-center justify-center cursor-pointer"
          title="Hire me on Fiverr"
          aria-label="Fiverr Profile"
        >
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"></div>
          
          {/* Fiverr Icon */}
          <div className="relative z-10">
            <div className="w-7 h-7 flex items-center justify-center text-white font-bold text-xl transition-all duration-300 group-hover:scale-110">
              F
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style={{
                 background: `conic-gradient(from 0deg, rgba(34, 197, 94, 0.8) 0deg, transparent 360deg)`
               }}>
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute top-1 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Hire me on Fiverr
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
        </button>
      </div>

      {/* WhatsApp Icon - Hidden when back-to-top shows */}
      <div className={`fixed bottom-20 right-6 z-[9997] transition-all duration-500 ${
        showBackToTop 
          ? 'opacity-0 scale-75 translate-y-4 pointer-events-none' 
          : 'opacity-100 scale-100 translate-y-0'
      }`} style={{ position: 'fixed' }}>
        <button
          onClick={() => window.open("https://wa.me/923045485310", "_blank", "noopener,noreferrer")}
          className="group relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:rotate-3 flex items-center justify-center animate-bounce-slow cursor-pointer"
          title="Chat on WhatsApp (+92 304 5485310)"
          aria-label="WhatsApp Chat"
        >
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"></div>
          
          {/* WhatsApp Icon */}
          <div className="relative z-10">
            <svg 
              className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style={{
                 background: `conic-gradient(from 0deg, rgba(34, 197, 94, 0.8) 0deg, transparent 360deg)`
               }}>
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute top-1 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>

              {/* Tooltip */}
              <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                <div className="font-semibold">Chat on WhatsApp</div>
                <div className="text-green-300 dark:text-green-600">+92 304 5485310</div>
                <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-900 dark:border-b-slate-100"></div>
              </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
        </button>
      </div>

      {/* Back to Top Button - Shows when scrolling */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-20 right-6 z-[9999] group transition-all duration-500 transform cursor-pointer ${
          showBackToTop 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }`}
        style={{ position: 'fixed' }}
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

export default GlobalFloatingIcons;
