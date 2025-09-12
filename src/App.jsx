import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './MainPages/Home';
import AllProjects from './Component/AllProjects';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import FormTesting from "./Component/FormTesting";
import Loader from "./Component/Loader";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure page starts at top on refresh
    window.scrollTo(0, 0);
    
    // Show loader only on initial page load, not on route changes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reduced loader time

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/testing" element={<FormTesting />} />
          </Routes>
        </Router>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
