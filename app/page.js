'use client'

import { useEffect, useState } from "react";
import Home from '../src/MainPages/Home';
import Loader from '../src/Component/Loader';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(true); // Start with content visible

  useEffect(() => {
    // Always show loader on page load/refresh
    window.scrollTo(0, 0);
    
    // Fallback: ensure content shows after 5 seconds even if loader doesn't complete
    const fallbackTimer = setTimeout(() => {
      if (loading) {
        setShowContent(true);
        setLoading(false);
      }
    }, 5000);
    
    return () => clearTimeout(fallbackTimer);
  }, [loading]);

  const handleLoaderComplete = () => {
    // Start showing content immediately
    setShowContent(true);
    // Hide loader after a very short delay to ensure smooth transition
    setTimeout(() => {
      setLoading(false);
    }, 50);
  };

  return (
    <div className="relative min-h-screen bg-slate-900">
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div className={`absolute inset-0 transition-opacity duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Home />
      </div>
    </div>
  );
}
