import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MinimalLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [phase, setPhase] = useState(0);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  const phases = [
    { text: 'Initializing', duration: 800 },
    { text: 'Loading', duration: 1200 },
    { text: 'Optimizing', duration: 1000 },
    { text: 'Ready', duration: 600 }
  ];

  useEffect(() => {
    let progressInterval;
    let phaseIndex = 0;
    let phaseTimeout;

    const updateProgress = () => {
      setProgress(prev => {
        const increment = prev < 20 ? 8 : prev < 60 ? 6 : prev < 90 ? 4 : 2;
        const newProgress = Math.min(prev + increment, 100);
        
        // Update phase based on progress
        if (newProgress >= 25 && phaseIndex === 0) {
          setPhase(1);
          phaseIndex = 1;
        } else if (newProgress >= 50 && phaseIndex === 1) {
          setPhase(2);
          phaseIndex = 2;
        } else if (newProgress >= 85 && phaseIndex === 2) {
          setPhase(3);
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

    progressInterval = setInterval(updateProgress, 60);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(phaseTimeout);
    };
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
        scale: 0.95,
        duration: 0.8,
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
      className="fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center"
      style={{ 
        opacity: 1,
        transform: 'scale(1)',
        display: 'block'
      }}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div 
          ref={logoRef}
          className="mb-12"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">MD</span>
          </div>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-1">
            M Daniyal
          </h2>
          <p className="text-slate-400 text-sm">
            Full-Stack Developer
          </p>
        </div>

        {/* Progress Container */}
        <div className="w-48 mx-auto">
          {/* Progress Bar */}
          <div className="w-full h-0.5 bg-slate-700 rounded-full overflow-hidden mb-3">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: '0%' }}
            />
          </div>
          
          {/* Phase Text */}
          <p className="text-slate-500 text-xs">
            {phases[phase]?.text || 'Loading'}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinimalLoader;
