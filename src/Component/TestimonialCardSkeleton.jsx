import React from 'react';

const TestimonialCardSkeleton = ({ className = '' }) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
      {/* Enhanced quote icon skeleton */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced rating skeleton */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className="w-4 h-4 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 rounded-full animate-pulse"
              style={{animationDelay: `${i * 0.1}s`}}
            ></div>
          ))}
        </div>
      </div>

      {/* Enhanced testimonial text skeleton */}
      <blockquote className="text-center mb-6">
        <div className="space-y-3">
          <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse"></div>
          <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-5/6 mx-auto"></div>
          <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-4/6 mx-auto"></div>
          <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-3/6 mx-auto"></div>
        </div>
      </blockquote>

      {/* Enhanced client info skeleton */}
      <div className="flex flex-col items-center text-center">
        {/* Enhanced avatar skeleton */}
        <div className="relative mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full animate-pulse shadow-lg border-2 border-slate-600"></div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced name skeleton */}
        <div className="mb-2">
          <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-28"></div>
        </div>

        {/* Enhanced location skeleton */}
        <div className="mb-3">
          <div className="h-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded animate-pulse w-24"></div>
        </div>

        {/* Enhanced project tag skeleton */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full animate-pulse">
          <div className="h-3 bg-gradient-to-r from-blue-400/60 to-purple-400/60 rounded animate-pulse w-20"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-6 right-4 w-1 h-1 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-4 right-6 w-3 h-3 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default TestimonialCardSkeleton;
