import React, { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "dark"; // Default to dark mode
    }
    return "dark"; // Default to dark mode
  });

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (isScrollingDown && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else if (isScrollingUp || currentScrollY < 100) {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'pricing', 'contact'];
      const scrollPosition = currentScrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Theme management
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute("data-theme", "light");
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Initial theme application
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark mode instead of checking system preference
      setTheme('dark');
    }
  }, []);

  // GSAP animations for navbar visibility
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        y: isNavbarVisible ? 0 : -100,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isNavbarVisible]);

  // GSAP animations for mobile menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current, 
          { 
            opacity: 0, 
            y: -20,
            scale: 0.95
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)"
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.in"
        });
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const navItems = [
    { href: '#home', label: 'Home', section: 'home' },
    { href: '#about', label: 'About', section: 'about' },
    { href: '#services', label: 'Services', section: 'services' },
    { href: '#portfolio', label: 'Portfolio', section: 'portfolio' },
    { href: '#testimonials', label: 'Testimonials', section: 'testimonials' },
    { href: '#pricing', label: 'Pricing', section: 'pricing' },
    { href: '#contact', label: 'Contact', section: 'contact' },
  ];

  return (
    <nav 
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/50 dark:border-slate-700/50' 
          : 'bg-transparent'
      }`}
      style={{
        transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Enhanced Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 relative group"
            data-scroll-nav={0}
            onClick={closeMenu}
          >
            {/* Logo Icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:rotate-12">
              <span className="text-white font-bold text-sm sm:text-base">MD</span>
            </div>
            <span className="relative z-10 font-mono tracking-wide">M Daniyal</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a 
                key={item.section}
                href={item.href} 
                className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group overflow-hidden ${
                  activeSection === item.section
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25 scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105'
                }`}
                data-scroll-nav={index}
              >
                <span className="relative z-10 text-sm font-medium tracking-wide transition-all duration-300 group-hover:scale-105">{item.label}</span>
                {activeSection === item.section && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg shadow-blue-500/25"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300"></div>
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10 scale-110"></div>
              </a>
            ))}
            
            {/* Theme Toggle Button - Hidden */}
            {/* <button 
              onClick={toggleTheme} 
              className="ml-4 flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" className="text-yellow-500">
                  <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" className="text-orange-500">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94" />
                  <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
                </svg>
              )}
              <span className="text-sm font-medium hidden lg:block">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button> */}
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="md:hidden p-2.5 sm:p-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 relative group border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-blue-500/25 hover:scale-105 overflow-hidden touch-manipulation"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10 scale-110"></div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div 
            ref={mobileMenuRef}
            className="px-3 pt-3 pb-4 space-y-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-2 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl"
          >
            {navItems.map((item, index) => (
              <a 
                key={item.section}
                href={item.href} 
                className={`block px-4 py-3.5 sm:py-4 rounded-xl font-medium transition-all duration-300 relative group touch-manipulation min-h-[48px] flex items-center ${
                  activeSection === item.section
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25'
                    : 'text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'
                }`}
                data-scroll-nav={index}
                onClick={closeMenu}
              >
                <span className="relative z-10 text-sm font-medium tracking-wide">{item.label}</span>
                {activeSection === item.section && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg shadow-blue-500/25"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300"></div>
              </a>
            ))}
            
            {/* Mobile Theme Toggle - Hidden */}
            {/* <button 
              onClick={toggleTheme} 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" className="text-yellow-500">
                  <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" className="text-orange-500">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94" />
                  <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
                </svg>
              )}
              <span className="text-sm font-medium">Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;