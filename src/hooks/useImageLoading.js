'use client'
import { useState, useEffect, useCallback } from 'react';

export const useImageLoading = (src, options = {}) => {
  const [imageStatus, setImageStatus] = useState('loading');
  const [imageSrc, setImageSrc] = useState(src);

  const {
    retryAttempts = 3,
    retryDelay = 1000,
    onLoad,
    onError,
    fallbackSrc = null
  } = options;

  const loadImage = useCallback((imageSrc, attempt = 1) => {
    console.log(`Loading image: ${imageSrc} (attempt ${attempt})`);
    const img = new Image();
    
    // Set loading timeout for better UX
    const timeoutId = setTimeout(() => {
      if (imageStatus === 'loading') {
        // Still loading after 10 seconds, try fallback or show error
        if (fallbackSrc && fallbackSrc !== imageSrc) {
          loadImage(fallbackSrc);
        } else {
          setImageStatus('error');
          if (onError) onError();
        }
      }
    }, 10000);
    
    img.onload = () => {
      console.log(`Image loaded successfully: ${imageSrc}`);
      clearTimeout(timeoutId);
      setImageStatus('loaded');
      setImageSrc(imageSrc);
      if (onLoad) onLoad();
    };

    img.onerror = () => {
      console.log(`Image failed to load: ${imageSrc} (attempt ${attempt})`);
      clearTimeout(timeoutId);
      if (attempt < retryAttempts) {
        // Retry with exponential backoff and jitter
        const jitter = Math.random() * 1000; // Add random jitter
        setTimeout(() => {
          loadImage(imageSrc, attempt + 1);
        }, (retryDelay * attempt) + jitter);
      } else if (fallbackSrc && fallbackSrc !== imageSrc) {
        // Try fallback image
        loadImage(fallbackSrc);
      } else {
        // All attempts failed
        setImageStatus('error');
        if (onError) onError();
      }
    };

    // Set crossOrigin for better error handling
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
  }, [retryAttempts, retryDelay, onLoad, onError, fallbackSrc, imageStatus]);

  useEffect(() => {
    if (src) {
      setImageStatus('loading');
      loadImage(src);
    }
  }, [src, loadImage]);

  const retry = useCallback(() => {
    setImageStatus('loading');
    loadImage(src);
  }, [src, loadImage]);

  return {
    imageStatus,
    imageSrc,
    retry,
    isLoading: imageStatus === 'loading',
    isLoaded: imageStatus === 'loaded',
    hasError: imageStatus === 'error'
  };
};

export default useImageLoading;
