import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './MainPages/Home';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormTesting from "./Component/FormTesting";
import Loader from "./Component/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure page starts at top on refresh
    window.scrollTo(0, 0);
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testing" element={<FormTesting />} />
          </Routes>
        </Router>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
