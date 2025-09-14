import React, { useEffect, useState, useRef } from "react";
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './MainPages/Home';
import AllProjects from './Component/AllProjects';
import AllTestimonials from './Component/AllTestimonials';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import FormTesting from "./Component/FormTesting";
import Loader from "./Component/Loader";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top with multiple methods for better compatibility
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Ensure any custom scroll classes are removed
    document.body.classList.remove('all-projects-active');
    
    // Reset scroll behavior
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Small delay to ensure scroll happens after any component cleanup
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 100);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Always show loader on page load/refresh
    window.scrollTo(0, 0);
    
    // The loader will call handleLoaderComplete when its animation is done
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <HelmetProvider>
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/all-testimonials" element={<AllTestimonials />} />
            <Route path="/testing" element={<FormTesting />} />
          </Routes>
        </Router>
      )}
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
