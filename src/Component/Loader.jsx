import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const dotsRef = useRef([]);
  const overlayRef = useRef(null);
  const codeLinesRef = useRef([]);
  const techIconsRef = useRef([]);
  const terminalRef = useRef(null);
  const particlesRef = useRef([]);
  const waveRef = useRef(null);
  const textRef = useRef(null);
  const morphRef = useRef(null);
  const linesRef = useRef([]);
  const circlesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(loaderRef.current, { opacity: 1 });
    gsap.set(logoRef.current, { scale: 0, rotation: -180 });
    gsap.set(progressRef.current, { scaleX: 0 });
    gsap.set(dotsRef.current, { opacity: 0, y: 20 });
    gsap.set(codeLinesRef.current, { opacity: 0, x: -50 });
    gsap.set(techIconsRef.current, { scale: 0, rotation: 180 });
    gsap.set(terminalRef.current, { opacity: 0, y: 30 });
    gsap.set(particlesRef.current, { opacity: 0, scale: 0 });
    gsap.set(waveRef.current, { scaleY: 0 });
    gsap.set(textRef.current, { opacity: 0, y: 20 });
    gsap.set(morphRef.current, { scale: 0, rotation: 0 });
    gsap.set(linesRef.current, { scaleX: 0 });
    gsap.set(circlesRef.current, { scale: 0, rotation: 0 });

    // Smooth animation sequence
    tl.to(logoRef.current, {
      scale: 1,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.7)"
    })
    .to(particlesRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.5")
    .to(waveRef.current, {
      scaleY: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .to(terminalRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .to(codeLinesRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4")
    .to(techIconsRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.2)"
    }, "-=0.3")
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2")
    .to(progressRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.1")
    .to(dotsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=1.5")
    .to(dotsRef.current, {
      y: -8,
      duration: 0.4,
      stagger: 0.05,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    }, "-=0.1")
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        if (onComplete) onComplete();
      }
    }, "+=0.5");

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Minimalist background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Clean overlay */}
      <div 
        ref={waveRef}
        className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15"
      />
      
      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Minimalist Logo */}
        <div 
          ref={logoRef}
          className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-2 border-slate-700/20 dark:border-slate-700/20"
        >
          <div className="w-14 h-14 rounded-full bg-slate-800/20 dark:bg-slate-800/20 flex items-center justify-center">
            <div className="text-slate-200 dark:text-slate-200 text-lg font-display font-bold">
              MD
            </div>
          </div>
        </div>

        {/* Clean Terminal Window */}
        <div 
          ref={terminalRef}
          className="w-80 bg-slate-800/90 dark:bg-slate-800/90 rounded-lg border border-slate-700 dark:border-slate-700 shadow-lg"
        >
          <div className="flex items-center px-4 py-3 bg-slate-700 dark:bg-slate-700 border-b border-slate-600 dark:border-slate-600 rounded-t-lg">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-3 text-slate-300 dark:text-slate-300 text-xs font-sans">daniyal@portfolio:~$</div>
          </div>
          <div className="p-4 font-sans text-sm leading-relaxed">
            {[
              { text: "const daniyal = {", color: "text-blue-400 dark:text-blue-400" },
              { text: "  name: 'M Daniyal',", color: "text-slate-300 dark:text-slate-300" },
              { text: "  title: 'Full Stack Developer',", color: "text-cyan-400 dark:text-cyan-400" },
              { text: "  expertise: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],", color: "text-green-400 dark:text-green-400" },
              { text: "  experience: '5+ years',", color: "text-yellow-400 dark:text-yellow-400" },
              { text: "  status: 'Initializing portfolio...'", color: "text-purple-400 dark:text-purple-400" },
              { text: "};", color: "text-blue-400 dark:text-blue-400" }
            ].map((line, index) => (
              <div
                key={index}
                ref={el => codeLinesRef.current[index] = el}
                className={`${line.color} mb-1 font-medium`}
              >
                {line.text}
              </div>
            ))}
          </div>
        </div>

        {/* Clean Tech Stack Icons */}
        <div className="flex space-x-4">
          {[
            { icon: "⚛️", name: "React", color: "text-blue-400" },
            { icon: "▲", name: "Next.js", color: "text-gray-400" },
            { icon: "🟢", name: "Node.js", color: "text-green-400" },
            { icon: "🐘", name: "PostgreSQL", color: "text-blue-300" }
          ].map((tech, index) => (
            <div
              key={index}
              ref={el => techIconsRef.current[index] = el}
              className="w-12 h-12 bg-slate-700/80 dark:bg-slate-700/80 rounded-lg flex items-center justify-center border border-slate-600 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              title={tech.name}
            >
              <span className={`text-xl ${tech.color}`}>{tech.icon}</span>
            </div>
          ))}
        </div>

        {/* Clean Progress bar */}
        <div className="w-64 h-2 bg-slate-700 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full origin-left"
          />
        </div>

        {/* Clean Loading text */}
        <div 
          ref={textRef}
          className="flex items-center space-x-2 text-slate-300 dark:text-slate-300 text-lg font-medium"
        >
          <span className="font-sans">Crafting Digital Excellence</span>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={el => dotsRef.current[index] = el}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Clean corner elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-8 right-8 w-10 h-10 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
      <div className="absolute top-8 right-8 w-8 h-8 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-8 left-8 w-6 h-6 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
    </div>
  );
};

export default Loader;
