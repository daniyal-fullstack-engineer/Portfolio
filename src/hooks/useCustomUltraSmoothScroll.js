import { useEffect, useCallback } from 'react';

const useCustomUltraSmoothScroll = () => {
  // Simple and reliable smooth scroll implementation
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Enable smooth scrolling via CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollPaddingTop = '80px';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollPaddingTop = '0';
    };
  }, []);

  // Simple scroll to element
  const scrollToElement = useCallback((element, offset = -80) => {
    if (!element || typeof window === 'undefined') return;

    const elementPosition = element.getBoundingClientRect().top;
    const targetPosition = elementPosition + window.pageYOffset + offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }, []);

  // Simple scroll to top
  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Simple scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    window.scrollTo({
      top: maxScroll,
      behavior: 'smooth'
    });
  }, []);

  // Simple scroll by amount
  const scrollBy = useCallback((amount) => {
    if (typeof window === 'undefined') return;
    
    window.scrollBy({
      top: amount,
      behavior: 'smooth'
    });
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollBy
  };
};

export default useCustomUltraSmoothScroll;
