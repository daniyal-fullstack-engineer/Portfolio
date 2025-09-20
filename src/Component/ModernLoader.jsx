import React, { useEffect, useRef, useState } from 'react';

const ModernLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Delay before calling onComplete to allow animation to finish
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Animate progress bar
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  // Animate completion
  useEffect(() => {
    if (isComplete && loaderRef.current) {
      loaderRef.current.style.opacity = '0';
      loaderRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (loaderRef.current) {
          loaderRef.current.style.display = 'none';
        }
      }, 500);
    }
  }, [isComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center transition-all duration-500 ease-out"
      style={{ 
        opacity: 1,
        transform: 'scale(1)',
        display: 'block'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div 
          ref={logoRef}
          className="mb-8 animate-bounce"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
            <span className="text-white font-bold text-2xl">MD</span>
          </div>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            M Daniyal
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Full-Stack Developer
          </p>
        </div>

        {/* Progress Container */}
        <div className="w-64 sm:w-80 mx-auto">
          {/* Progress Bar Background */}
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
            {/* Progress Bar */}
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: '0%' }}
            />
          </div>
          
          {/* Progress Text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Loading...</span>
            <span className="text-blue-400 font-medium">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Loading Messages */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-400 text-xs sm:text-sm animate-pulse">
          {progress < 30 && "Initializing..."}
          {progress >= 30 && progress < 60 && "Loading components..."}
          {progress >= 60 && progress < 90 && "Almost ready..."}
          {progress >= 90 && "Finalizing..."}
        </p>
      </div>
    </div>
  );
};

export default ModernLoader;
