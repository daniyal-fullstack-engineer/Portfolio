'use client'

import { useEffect, useState } from "react";
import Home from '../src/MainPages/Home';
import UltraSmoothLoader from '../src/Component/UltraSmoothLoader';
import useAppStore from '../src/store/useAppStore';

export default function HomePage() {
  const { hasSeenLoader, setHasSeenLoader } = useAppStore();
  const [loading, setLoading] = useState(!hasSeenLoader);
  const [showContent, setShowContent] = useState(true); // Start with content visible

  useEffect(() => {
    if (!hasSeenLoader) {
      // Show loader only on first visit in this session
      window.scrollTo(0, 0);
      
      // Fallback: ensure content shows after 5 seconds even if loader doesn't complete
      const fallbackTimer = setTimeout(() => {
        if (loading) {
          setShowContent(true);
          setLoading(false);
        }
      }, 5000);
      
      return () => clearTimeout(fallbackTimer);
    }
  }, [hasSeenLoader, loading]);

  const handleLoaderComplete = () => {
    // Mark that loader has been seen in this session
    setHasSeenLoader(true);
    
    // Start showing content immediately
    setShowContent(true);
    // Hide loader after a very short delay to ensure smooth transition
    setTimeout(() => {
      setLoading(false);
    }, 50);
  };

  // Debug: Add a way to reset loader (remove this in production)
  if (typeof window !== 'undefined') {
    window.resetLoader = () => {
      setHasSeenLoader(false);
      window.location.reload();
    };
  }

  return (
    <div className="relative min-h-screen bg-slate-900">
      {loading && <UltraSmoothLoader onComplete={handleLoaderComplete} />}
      <div className={`absolute inset-0 transition-opacity duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Home />
      </div>
    </div>
  );
}
