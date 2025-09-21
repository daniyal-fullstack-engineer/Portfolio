'use client'
import React from 'react';
import useImageLoading from '../hooks/useImageLoading';
import Image from 'next/image';

const ImageWithSkeleton = ({ 
  src, 
  alt, 
  className = '', 
  skeletonClassName = '',
  fallbackSrc = null,
  onLoad,
  onError,
  ...props 
}) => {
  const { imageStatus, imageSrc, retry, isLoading, isLoaded, hasError } = useImageLoading(src, {
    retryAttempts: 3,
    retryDelay: 1000,
    onLoad: () => {
      if (onLoad) onLoad();
    },
    onError: () => {
      if (onError) onError();
    },
    fallbackSrc
  });

  // Enhanced animated skeleton component that covers entire image space
  const SkeletonLoader = ({ borderRadiusClass = 'rounded-lg' }) => (
    <div className={`absolute inset-0 w-full h-full bg-slate-800 overflow-hidden ${borderRadiusClass} ${skeletonClassName}`}>
      {/* Main shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* Secondary shimmer for depth */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" style={{animationDelay: '0.5s'}}></div>
      
      {/* Subtle pulse overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 animate-pulse opacity-60"></div>
      
      {/* Content placeholder that fills the entire space */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {/* Modern icon placeholder */}
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg animate-pulse shadow-lg"></div>
          <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg animate-pulse"></div>
        </div>
        
        {/* Elegant loading indicator */}
        <div className="absolute bottom-3 left-3 right-3 space-y-2">
          <div className="h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-pulse"></div>
          <div className="h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-pulse w-4/5"></div>
          <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-pulse w-2/3"></div>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  // Enhanced error fallback component that covers entire image space
  const ErrorFallback = ({ borderRadiusClass = 'rounded-lg' }) => (
    <div className={`absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600/50 overflow-hidden ${borderRadiusClass} ${skeletonClassName}`}>
      {/* Subtle error shimmer */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
      
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-4">
        {/* Modern error icon */}
        <div className="relative mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          {/* Error indicator dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Error text with better styling */}
        <div className="text-center space-y-1">
          <div className="text-sm font-medium text-slate-300">Image Unavailable</div>
          <div className="text-xs text-slate-500">Click to retry loading</div>
        </div>
      </div>
      
      {/* Elegant retry overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
        <button 
          onClick={retry}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Retry
        </button>
      </div>
    </div>
  );

  // Extract border radius classes from className
  const getBorderRadiusClass = (className) => {
    if (className.includes('rounded-full')) return 'rounded-full';
    if (className.includes('rounded-3xl')) return 'rounded-3xl';
    if (className.includes('rounded-2xl')) return 'rounded-2xl';
    if (className.includes('rounded-xl')) return 'rounded-xl';
    if (className.includes('rounded-lg')) return 'rounded-lg';
    if (className.includes('rounded-md')) return 'rounded-md';
    if (className.includes('rounded-sm')) return 'rounded-sm';
    return 'rounded-lg'; // default
  };

  const borderRadiusClass = getBorderRadiusClass(className);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && <SkeletonLoader borderRadiusClass={borderRadiusClass} />}
      
      {hasError && <ErrorFallback borderRadiusClass={borderRadiusClass} />}
      
      <Image
        src={imageSrc}
        alt={alt}
        width={500}
        height={300}
        className={`w-full h-full object-cover transition-opacity duration-500 ${borderRadiusClass} ${
          isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
