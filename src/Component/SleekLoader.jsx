import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SleekLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const logoRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef([]);

  const loadingMessages = [
    'Initializing...',
    'Loading components...',
    'Setting up environment...',
    'Almost ready...',
    'Finalizing...'
  ];

  useEffect(() => {
    let progressInterval;
    let messageIndex = 0;

    const updateProgress = () => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12 + 3; // Random increment between 3-15
        
        // Update loading message based on progress
        if (newProgress >= 20 && messageIndex === 0) {
          setLoadingText(loadingMessages[1]);
          messageIndex = 1;
        } else if (newProgress >= 40 && messageIndex === 1) {
          setLoadingText(loadingMessages[2]);
          messageIndex = 2;
        } else if (newProgress >= 70 && messageIndex === 2) {
          setLoadingText(loadingMessages[3]);
          messageIndex = 3;
        } else if (newProgress >= 90 && messageIndex === 3) {
          setLoadingText(loadingMessages[4]);
          messageIndex = 4;
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
          return 100;
        }
        return newProgress;
      });
    };

    progressInterval = setInterval(updateProgress, 80);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  // Animate progress
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  // Animate completion
  useEffect(() => {
    if (isComplete && loaderRef.current) {
      const tl = gsap.timeline();
      tl.to(loaderRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "power2.inOut"
      }).to(loaderRef.current, {
        display: 'none',
        duration: 0
      });
    }
  }, [isComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
      style={{ 
        opacity: 1,
        transform: 'scale(1)',
        display: 'block'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg rotate-45 blur-xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg rotate-12 blur-xl animate-pulse" style={{animationDelay: '3s'}} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 animate-pulse" style={{animationDelay: `${i * 0.01}s`}} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo with Rotating Ring */}
        <div className="relative mb-8">
          <div 
            ref={ringRef}
            className="absolute inset-0 w-24 h-24 border-2 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"
            style={{ animationDuration: '2s' }}
          />
          <div 
            ref={logoRef}
            className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 animate-pulse"
          >
            <span className="text-white font-bold text-2xl">MD</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-fade-in">
            M Daniyal
          </h2>
          <p className="text-slate-300 text-sm sm:text-base animate-fade-in" style={{animationDelay: '0.2s'}}>
            Full-Stack Developer
          </p>
        </div>

        {/* Progress Container */}
        <div className="w-64 sm:w-80 mx-auto">
          {/* Progress Bar Background */}
          <div className="w-full h-1 bg-slate-700/50 rounded-full overflow-hidden mb-4 backdrop-blur-sm">
            {/* Progress Bar */}
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: '0%' }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          
          {/* Progress Text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400 animate-fade-in">{loadingText}</span>
            <span className="text-blue-400 font-medium animate-fade-in">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-6 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-500 text-xs animate-fade-in">
          Crafting digital experiences
        </p>
      </div>
    </div>
  );
};

export default SleekLoader;
