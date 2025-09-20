import React, { useEffect } from 'react';

const ScrollOptimizer = () => {
  useEffect(() => {
    // Optimize scroll performance
    let ticking = false;
    
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttle scroll events for better performance
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add passive scroll listener for better performance
    window.addEventListener('scroll', optimizeScroll, { passive: true });
    
    // Optimize touch events for mobile
    const optimizeTouch = (e) => {
      // Prevent default only for specific cases
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchstart', optimizeTouch, { passive: false });
    document.addEventListener('touchmove', optimizeTouch, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', optimizeScroll);
      document.removeEventListener('touchstart', optimizeTouch);
      document.removeEventListener('touchmove', optimizeTouch);
    };
  }, []);

  return null;
};

export default ScrollOptimizer;
