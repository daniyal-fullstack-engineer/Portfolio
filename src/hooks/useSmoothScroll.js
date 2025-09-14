import { useCallback, useEffect, useState } from 'react';

const useSmoothScroll = () => {
  const [isReady, setIsReady] = useState(false);

  // Ensure everything is ready before allowing navigation
  useEffect(() => {
    const checkReady = () => {
      // Wait for DOM to be ready and Lenis to be initialized
      if (document.readyState === 'complete') {
        setIsReady(true);
      } else {
        setTimeout(checkReady, 100);
      }
    };
    
    checkReady();
  }, []);

  const scrollToSection = useCallback((sectionId, offset = -80) => {
    console.log(`Attempting to scroll to: ${sectionId}`);
    
    // Wait a bit for DOM to be fully ready, especially on first load
    const performScroll = () => {
      const element = document.getElementById(sectionId);
      console.log('Element found:', element);
      console.log('Lenis available:', !!window.lenis);
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;
        console.log(`Scrolling to position: ${offsetPosition}`);

        // Use Lenis if available and ready, otherwise fallback to native smooth scroll
        if (window.lenis && window.lenis.scrollTo) {
          console.log('Using Lenis scroll');
          try {
            window.lenis.scrollTo(offsetPosition, { duration: 1.2 });
          } catch (error) {
            console.log('Lenis failed, falling back to native scroll');
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } else {
          console.log('Using native scroll');
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        console.error(`Element with id "${sectionId}" not found`);
        // Retry once after a short delay in case element isn't ready yet
        setTimeout(() => {
          const retryElement = document.getElementById(sectionId);
          if (retryElement) {
            console.log('Element found on retry, scrolling...');
            const elementPosition = retryElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Multiple fallback attempts to ensure scrolling works on first click
    const attemptScroll = (attempt = 1) => {
      if (attempt > 3) {
        console.error('Failed to scroll after 3 attempts');
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        performScroll();
      } else if (attempt === 1) {
        // First attempt failed, wait a bit and try again
        setTimeout(() => attemptScroll(2), 100);
      } else if (attempt === 2) {
        // Second attempt failed, wait longer and try again
        setTimeout(() => attemptScroll(3), 200);
      } else {
        console.error(`Element with id "${sectionId}" not found after 3 attempts`);
      }
    };

    // Start the scroll attempt
    if (document.readyState === 'complete') {
      attemptScroll();
    } else {
      setTimeout(() => attemptScroll(), 50);
    }
  }, []);

  const scrollToHome = useCallback(() => {
    console.log('Scrolling to home (top)');
    
    const performScroll = () => {
      // Use Lenis if available and ready, otherwise fallback to native smooth scroll
      if (window.lenis && window.lenis.scrollTo) {
        console.log('Using Lenis for home scroll');
        try {
          window.lenis.scrollTo(0, { duration: 1.2 });
        } catch (error) {
          console.log('Lenis failed, falling back to native scroll');
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      } else {
        console.log('Using native scroll for home');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Small delay to ensure everything is ready
    if (document.readyState === 'complete') {
      performScroll();
    } else {
      setTimeout(performScroll, 50);
    }
  }, []);

  const scrollToElement = useCallback((element, offset = -80) => {
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      // Use Lenis if available, otherwise fallback to native smooth scroll
      if (window.lenis) {
        window.lenis.scrollTo(offsetPosition, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const scrollToTop = useCallback(() => {
    // Use Lenis if available, otherwise fallback to native smooth scroll
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    // Use Lenis if available, otherwise fallback to native smooth scroll
    if (window.lenis) {
      window.lenis.scrollTo(document.documentElement.scrollHeight, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  return {
    scrollToSection,
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollToHome
  };
};

export default useSmoothScroll;
