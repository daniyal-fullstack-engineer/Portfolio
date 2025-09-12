import React, { useEffect, useRef } from 'react';

const MobileGestures = () => {
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchEndRef = useRef({ x: 0, y: 0 });
  const lastTouchTimeRef = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      lastTouchTimeRef.current = Date.now();
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      touchEndRef.current = { x: touch.clientX, y: touch.clientY };
      
      const deltaX = touchEndRef.current.x - touchStartRef.current.x;
      const deltaY = touchEndRef.current.y - touchStartRef.current.y;
      const deltaTime = Date.now() - lastTouchTimeRef.current;
      
      // Swipe detection
      const minSwipeDistance = 50;
      const maxSwipeTime = 500;
      
      if (deltaTime < maxSwipeTime) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          if (Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
              // Swipe right
              handleSwipeRight();
            } else {
              // Swipe left
              handleSwipeLeft();
            }
          }
        } else {
          // Vertical swipe
          if (Math.abs(deltaY) > minSwipeDistance) {
            if (deltaY > 0) {
              // Swipe down
              handleSwipeDown();
            } else {
              // Swipe up
              handleSwipeUp();
            }
          }
        }
      }
    };

    const handleSwipeRight = () => {
      // Navigate to previous section or go back
      const currentSection = getCurrentSection();
      if (currentSection > 0) {
        navigateToSection(currentSection - 1);
      }
    };

    const handleSwipeLeft = () => {
      // Navigate to next section
      const currentSection = getCurrentSection();
      const totalSections = document.querySelectorAll('[data-scroll-index]').length;
      if (currentSection < totalSections - 1) {
        navigateToSection(currentSection + 1);
      }
    };

    const handleSwipeUp = () => {
      // Scroll up or show more content
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    };

    const handleSwipeDown = () => {
      // Scroll down or show more content
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    const getCurrentSection = () => {
      const sections = document.querySelectorAll('[data-scroll-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          return parseInt(section.getAttribute('data-scroll-index'));
        }
      }
      return 0;
    };

    const navigateToSection = (index) => {
      const section = document.querySelector(`[data-scroll-index="${index}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Double tap to scroll to top
    const handleDoubleTap = (e) => {
      const now = Date.now();
      if (now - lastTouchTimeRef.current < 300) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      lastTouchTimeRef.current = now;
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchend', handleDoubleTap, { passive: true });

    // Add haptic feedback for supported devices
    const addHapticFeedback = () => {
      if ('vibrate' in navigator) {
        navigator.vibrate(50); // Short vibration
      }
    };

    // Add haptic feedback to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('touchstart', addHapticFeedback, { passive: true });
    });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchend', handleDoubleTap);
      interactiveElements.forEach(el => {
        el.removeEventListener('touchstart', addHapticFeedback);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MobileGestures;
