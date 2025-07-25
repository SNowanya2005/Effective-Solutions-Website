import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './hero.css';
import calltoaction from '../CallToAction/CallToAction';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const textArray = [
    'Passion into Professional Excellence',
    'Ideas into Cutting-Edge Innovations',
    'Vision into Industry-Leading Products',
    'Complex Challenges into Simple IT Solutions'
  ];

  useEffect(() => {
    let timeout;
    const currentFullText = textArray[currentTextIndex];
    
    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTextIndex, textArray]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="grid-pattern"></div>
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="content-left">
            <h2 className="hero-title">
              Turning <span className="title-gradient">Complex</span><br />
              <span className="title-gradient">Challenges</span> into Simple<br />
              <span className="title-gradient">IT Solutions</span>
            </h2>
            
            <div className="rotating-text-container">
              <span className="rotating-text">
                Transforming <span className="rotating-highlight">{displayText}</span>
                <span className="cursor">|</span>
              </span>
            </div>
            
            <p className="hero-description">
              We empower innovative Sri Lankans to lead industries worldwide through 
              cutting-edge Biomedical, IoT, and Software Solutions with patents secured 
              in USA, Japan, and Sri Lanka.
            </p>

            {/* CTA Buttons */}
            <div className="view-more-buttons">
              <button 
                className="btn-primary"
                onClick={calltoaction}
              >
                Get Started
                <ArrowRight className="btn-icon" />
              </button>
              
              <button 
                className="btn-secondary"
                onClick={scrollToAbout}
              >
                <Play className="btn-icon" />
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - 3D Globe */}
          <div className="content-right">
            <div className="globe-container">
              {/* Floating Tech Badges */}
              <div className="tech-badge tech-badge-ai">AI/ML</div>
              <div className="tech-badge tech-badge-iot">IoT</div>
              <div className="tech-badge tech-badge-5g">MedTech</div>
              <div className="tech-badge tech-badge-cloud">Cloud</div>

              {/* Main Globe */}
              <div className="globe">
                <div className="globe-inner">
                  {/* Continents */}
                  <div className="continent continent-1"></div>
                  <div className="continent continent-2"></div>
                  <div className="continent continent-3"></div>
                  <div className="continent continent-4"></div>
                  <div className="continent continent-5"></div>
                  <div className="continent continent-6"></div>
                </div>

                {/* Country Markers */}
                <div className="marker marker-usa">
                  <div className="marker-dot"></div>
                  <div className="marker-pulse"></div>
                  <div className="marker-label">USA Patent</div>
                </div>
                <div className="marker marker-japan">
                  <div className="marker-dot"></div>
                  <div className="marker-pulse"></div>
                  <div className="marker-label">Japan Patent</div>
                </div>
                <div className="marker marker-srilanka">
                  <div className="marker-dot"></div>
                  <div className="marker-pulse"></div>
                  <div className="marker-label">Sri Lanka Patent</div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="connection-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
                <div className="line line-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;