import React from 'react';

const SkeletonLoader = ({ type = 'card', count = 1, className = '' }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`animate-pulse bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl ${className}`}>
            {/* Image skeleton */}
            <div className="h-60 sm:h-72 md:h-96 bg-slate-200 dark:bg-slate-700 rounded-xl mb-6"></div>
            
            {/* Content skeleton */}
            <div className="space-y-4">
              {/* Title skeleton */}
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-lg w-3/4"></div>
              
              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
              </div>
              
              {/* Tech tags skeleton */}
              <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-16"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-20"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-14"></div>
              </div>
              
              {/* Buttons skeleton */}
              <div className="flex gap-4 pt-4">
                <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-xl flex-1"></div>
                <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-xl flex-1"></div>
              </div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="space-y-3">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
            </div>
          </div>
        );

      case 'avatar':
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          </div>
        );

      case 'button':
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-xl w-24"></div>
          </div>
        );

      case 'tech-card':
        return (
          <div className={`animate-pulse bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-500 ${className}`}>
            {/* Icon skeleton */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 bg-slate-200 dark:bg-slate-700 rounded-xl sm:rounded-2xl"></div>
            
            {/* Name skeleton */}
            <div className="h-4 sm:h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mx-auto mb-2"></div>
            
            {/* Level skeleton */}
            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto mb-2"></div>
            
            {/* Progress bar skeleton */}
            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-2">
              <div className="h-2 bg-slate-300 dark:bg-slate-500 rounded-full w-3/4"></div>
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-1">
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`animate-pulse bg-slate-200 dark:bg-slate-700 rounded ${className}`}>
            <div className="h-4 w-full"></div>
          </div>
        );
    }
  };

  if (count > 1) {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }, (_, index) => (
          <div key={index}>
            {renderSkeleton()}
          </div>
        ))}
      </div>
    );
  }

  return renderSkeleton();
};

export default SkeletonLoader;
