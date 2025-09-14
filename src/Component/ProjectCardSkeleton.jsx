import React from 'react';

const ProjectCardSkeleton = ({ className = '' }) => {
  return (
    <div className={`bg-slate-800/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 ${className}`}>
      {/* Enhanced image skeleton with modern design */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {/* Main shimmer background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
          {/* Primary shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          
          {/* Secondary shimmer for depth */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" style={{animationDelay: '0.3s'}}></div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-6 w-6 h-6 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-8 left-8 w-4 h-4 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Center icon placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl shadow-lg animate-pulse"></div>
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl animate-pulse"></div>
            </div>
          </div>
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
        
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
      </div>

      {/* Enhanced content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title and category row */}
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg animate-pulse w-3/4"></div>
            <div className="h-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded animate-pulse w-1/2"></div>
          </div>
          <div className="h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full animate-pulse w-16"></div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse"></div>
          <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-5/6"></div>
          <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-4/6"></div>
        </div>

        {/* Tech stack skeleton */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="h-7 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full animate-pulse px-3"
              style={{width: `${60 + i * 20}px`}}
            ></div>
          ))}
        </div>

        {/* Enhanced button skeleton */}
        <div className="pt-2">
          <div className="h-11 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-lg animate-pulse shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
