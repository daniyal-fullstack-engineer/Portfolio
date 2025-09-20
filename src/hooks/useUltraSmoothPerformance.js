import { useEffect, useCallback } from 'react';

const useUltraSmoothPerformance = () => {
  useEffect(() => {
    // Performance optimizations for ultra-smooth experience
    
    // 1. Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
      
      // Preload critical images
      const criticalImages = [
        '/images/logo.png',
        '/images/hero-bg.jpg'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // 2. Optimize scroll performance
    const optimizeScrollPerformance = () => {
      // Disable scroll chaining on mobile
      document.body.style.overscrollBehavior = 'none';
      
      // Optimize touch scrolling
      document.body.style.touchAction = 'pan-y';
      
      // Enable hardware acceleration
      document.body.style.transform = 'translateZ(0)';
      document.body.style.backfaceVisibility = 'hidden';
    };

    // 3. Optimize animations
    const optimizeAnimations = () => {
      // Use will-change for animated elements
      const animatedElements = document.querySelectorAll('.animate-pulse, .animate-bounce, .animate-spin');
      animatedElements.forEach(el => {
        el.style.willChange = 'transform, opacity';
        el.style.transform = 'translateZ(0)';
      });
    };

    // 4. Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading optimization
        img.loading = 'lazy';
        img.decoding = 'async';
        
        // Add smooth loading transition
        img.style.transition = 'opacity 0.3s ease-in-out';
        img.style.opacity = '0';
        
        img.onload = () => {
          img.style.opacity = '1';
        };
      });
    };

    // 5. Optimize interactions
    const optimizeInteractions = () => {
      // Add passive event listeners for better performance
      const passiveEvents = ['touchstart', 'touchmove', 'wheel'];
      
      passiveEvents.forEach(eventType => {
        document.addEventListener(eventType, () => {}, { passive: true });
      });
    };

    // 6. Memory management
    const optimizeMemory = () => {
      // Clean up unused resources
      const cleanup = () => {
        // Remove unused event listeners
        window.removeEventListener('beforeunload', cleanup);
      };
      
      window.addEventListener('beforeunload', cleanup);
    };

    // Initialize all optimizations
    const initializeOptimizations = () => {
      preloadCriticalResources();
      optimizeScrollPerformance();
      optimizeAnimations();
      optimizeImages();
      optimizeInteractions();
      optimizeMemory();
    };

    // Run optimizations after DOM is ready
    if (document.readyState === 'complete') {
      initializeOptimizations();
    } else {
      document.addEventListener('DOMContentLoaded', initializeOptimizations);
    }

    // Cleanup function
    return () => {
      // Remove any added event listeners or cleanup
      document.removeEventListener('DOMContentLoaded', initializeOptimizations);
    };
  }, []);

  // Ultra-smooth scroll to element with performance optimization
  const ultraSmoothScrollTo = useCallback((element, offset = -80) => {
    if (!element) return;

    // Use requestAnimationFrame for smooth animation
    const animateScroll = () => {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      // Use native smooth scroll (custom smooth scroll is handled globally)
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
        block: 'start'
      });
    };

    requestAnimationFrame(animateScroll);
  }, []);

  // Ultra-smooth fade in animation
  const ultraSmoothFadeIn = useCallback((element, duration = 0.6) => {
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;

    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }, []);

  return {
    ultraSmoothScrollTo,
    ultraSmoothFadeIn
  };
};

export default useUltraSmoothPerformance;
