import React, { useState } from "react";

const FiverrIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleFiverr = () => {
    window.open("https://www.fiverr.com/daniyalamjad14", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-32 left-6 z-[9998]">
      <button
        onClick={handleFiverr}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
  );
};

export default FiverrIcon;
