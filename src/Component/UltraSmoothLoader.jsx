import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const UltraSmoothLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const ringRef = useRef(null);

  const phases = [
    { text: 'Initializing', color: 'from-blue-500 to-cyan-500', icon: 'fas fa-cog' },
    { text: 'Loading Assets', color: 'from-cyan-500 to-purple-500', icon: 'fas fa-download' },
    { text: 'Optimizing', color: 'from-purple-500 to-pink-500', icon: 'fas fa-rocket' },
    { text: 'Ready', color: 'from-pink-500 to-indigo-500', icon: 'fas fa-check' }
  ];

  useEffect(() => {
    // Add loading class to body to hide scrollbar
    document.body.classList.add('loading');
    
    let progressInterval;
    let phaseIndex = 0;

    const updateProgress = () => {
      setProgress(prev => {
        const increment = prev < 20 ? 8 : prev < 50 ? 6 : prev < 80 ? 4 : prev < 95 ? 2 : 1;
        const newProgress = Math.min(prev + increment, 100);
        
        // Update phase based on progress
        if (newProgress >= 20 && phaseIndex === 0) {
          setCurrentPhase(1);
          phaseIndex = 1;
        } else if (newProgress >= 45 && phaseIndex === 1) {
          setCurrentPhase(2);
          phaseIndex = 2;
        } else if (newProgress >= 75 && phaseIndex === 2) {
          setCurrentPhase(3);
          phaseIndex = 3;
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    };

    progressInterval = setInterval(updateProgress, 40);

    return () => {
      clearInterval(progressInterval);
      // Remove loading class from body when component unmounts
      document.body.classList.remove('loading');
    };
  }, [onComplete]);

  // Animate progress
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  // Simple fade out animation
  useEffect(() => {
    if (isComplete && loaderRef.current) {
      const tl = gsap.timeline();
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }).to(loaderRef.current, {
        display: 'none',
        duration: 0
      });
      
      // Remove loading class from body when animation completes
      setTimeout(() => {
        document.body.classList.remove('loading');
      }, 500);
    }
  }, [isComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
      style={{ 
        opacity: 1,
        display: 'block'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Additional Floating Shapes */}
        <div className="absolute top-1/6 right-1/6 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/6 left-1/6 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/8 w-12 h-12 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 right-1/8 w-14 h-14 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg rotate-12 animate-float" style={{animationDelay: '3s'}} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 animate-pulse" style={{animationDelay: `${i * 0.01}s`}} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Animated Icons Around Loader */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-1/4 left-1/4 text-blue-400/60 text-2xl animate-bounce-slow">
          <i className="fas fa-laptop-code"></i>
        </div>
        
        {/* Top Right */}
        <div className="absolute top-1/3 right-1/4 text-purple-400/60 text-xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-mobile-alt"></i>
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-1/3 left-1/3 text-indigo-400/60 text-2xl animate-bounce-slow" style={{animationDelay: '1s'}}>
          <i className="fas fa-code"></i>
        </div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-1/4 right-1/3 text-cyan-400/60 text-xl animate-bounce-slow" style={{animationDelay: '1.5s'}}>
          <i className="fas fa-chart-line"></i>
        </div>
        
        {/* Left Side */}
        <div className="absolute top-1/2 left-1/6 text-green-400/60 text-lg animate-bounce-slow" style={{animationDelay: '2s'}}>
          <i className="fas fa-database"></i>
        </div>
        
        {/* Right Side */}
        <div className="absolute top-1/2 right-1/6 text-yellow-400/60 text-lg animate-bounce-slow" style={{animationDelay: '2.5s'}}>
          <i className="fas fa-server"></i>
        </div>
        
        {/* Top Center */}
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 text-pink-400/60 text-lg animate-bounce-slow" style={{animationDelay: '3s'}}>
          <i className="fas fa-rocket"></i>
        </div>
        
        {/* Bottom Center */}
        <div className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 text-orange-400/60 text-lg animate-bounce-slow" style={{animationDelay: '3.5s'}}>
          <i className="fas fa-cog"></i>
        </div>
        
        {/* Small Animated Dots */}
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" />
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/5 left-1/5 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/5 right-1/5 w-2 h-2 bg-pink-400/60 rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-1/2 left-1/12 w-1 h-1 bg-green-400/60 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/12 w-1 h-1 bg-yellow-400/60 rounded-full animate-ping" style={{animationDelay: '2.5s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen">
        {/* Logo with Rotating Ring */}
        <div className="relative mb-10">
          <div 
            ref={ringRef}
            className="absolute inset-0 w-28 h-28 border-2 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"
            style={{ animationDuration: '3s' }}
          />
          <div 
            ref={logoRef}
            className="relative w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
          >
            <span className="text-white font-bold text-2xl">MD</span>
          </div>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            M Daniyal
          </h2>
          <p className="text-slate-300 text-sm">
            Full-Stack Developer
          </p>
        </div>

        {/* Progress Container */}
        <div className="w-64 mx-auto flex flex-col items-center">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-slate-700/50 rounded-full overflow-hidden mb-4">
            <div
              ref={progressRef}
              className={`h-full bg-gradient-to-r ${phases[currentPhase]?.color || 'from-blue-500 to-purple-500'} rounded-full transition-all duration-500 ease-out relative`}
              style={{ width: '0%' }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
          
          {/* Phase Text */}
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-2">
            <i className={`${phases[currentPhase]?.icon || 'fas fa-spinner'} animate-spin`}></i>
            <span>{phases[currentPhase]?.text || 'Loading'}...</span>
          </div>
          
          {/* Progress Percentage */}
          <div className="text-center">
            <span className="text-white font-semibold text-lg">{progress}%</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-1 mt-6">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
        
        {/* Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs">
            Crafting exceptional digital experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltraSmoothLoader;
