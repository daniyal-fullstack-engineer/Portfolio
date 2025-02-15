import React from "react";
import { ToastContainer } from 'react-toastify';
import './App.css';
import './assets/js/main';
import Home from './MainPages/Home';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormTesting from "./Component/FormTesting";

function App() {
  return (
    <>
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
