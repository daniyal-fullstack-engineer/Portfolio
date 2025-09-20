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
    { text: 'Initializing', color: 'from-blue-500 to-cyan-500' },
    { text: 'Loading Assets', color: 'from-cyan-500 to-purple-500' },
    { text: 'Optimizing', color: 'from-purple-500 to-pink-500' },
    { text: 'Ready', color: 'from-pink-500 to-indigo-500' }
  ];

  useEffect(() => {
    let progressInterval;
    let phaseIndex = 0;

    const updateProgress = () => {
      setProgress(prev => {
        const increment = prev < 30 ? 10 : prev < 70 ? 7 : prev < 95 ? 3 : 1;
        const newProgress = Math.min(prev + increment, 100);
        
        // Update phase based on progress
        if (newProgress >= 25 && phaseIndex === 0) {
          setCurrentPhase(1);
          phaseIndex = 1;
        } else if (newProgress >= 50 && phaseIndex === 1) {
          setCurrentPhase(2);
          phaseIndex = 2;
        } else if (newProgress >= 80 && phaseIndex === 2) {
          setCurrentPhase(3);
          phaseIndex = 3;
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1200);
          return 100;
        }
        return newProgress;
      });
    };

    progressInterval = setInterval(updateProgress, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  // Animate progress
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  // Ultra-smooth completion animation
  useEffect(() => {
    if (isComplete && loaderRef.current) {
      const tl = gsap.timeline();
      tl.to(loaderRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.inOut"
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
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
        
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
        <div className="w-64 mx-auto">
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
          <p className="text-slate-400 text-sm">
            {phases[currentPhase]?.text || 'Loading'}...
          </p>
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
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-500 text-xs">
          Crafting exceptional digital experiences
        </p>
      </div>
    </div>
  );
};

export default UltraSmoothLoader;
