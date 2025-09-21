'use client';

import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Add a small delay to ensure all components are rendered
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observe all elements with scroll animation classes
      const animatedElements = document.querySelectorAll(
        '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale, .fade-in-rotate'
      );

      animatedElements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        animatedElements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    }, 100); // 100ms delay

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimations;
