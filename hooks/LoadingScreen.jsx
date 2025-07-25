import React, { useState, useEffect } from 'react';
import logo from './effective-solutions.webp'; // Ensure the logo path is correct
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 4000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="effectivesolutions-loading">
      {/* Main container */}
      <div className="loading-wrapper">
        {/* ES Logo Container */}
        <div className="es-logo-container">
          {/* Outer circle with gradient border */}
          <div className="logo-outer-circle">
            {/* Inner white background */}
            <div className="logo-inner-bg">
              {/* ES Logo Elements */}
              <img className="es-elements" src={logo} alt="Effective Solutions Logo" />
            </div>
          </div>
        </div>
        
        {/* Company Information */}
        <div className="company-details">
          <h1 className="main-title">Effective Solutions</h1>
          <p className="tagline">Transforming Ideas Into Digital Reality</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;