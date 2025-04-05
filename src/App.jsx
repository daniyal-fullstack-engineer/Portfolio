import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import './App.css';
import './assets/js/main';
import Home from './MainPages/Home';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormTesting from "./Component/FormTesting";
import Loader from "./Component/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hideLoader = setTimeout(() => {
      setLoading(false);
    }, 5000); // remove from DOM after fade-out

    return () => clearTimeout(hideLoader);
  }, []);
  return (
    <>
    {loading && <Loader />}
      <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<FormTesting />} />
      </Routes>
    </Router>
     
      <ToastContainer />
    </>
  );
}

export default App;
