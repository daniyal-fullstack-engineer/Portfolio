// components/Loader.js
import React, { useEffect, useState } from 'react';


const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
