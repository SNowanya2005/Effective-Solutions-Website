import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo from './effective-solutions.webp';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('home');
    } else {
      closeMenu();
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container">
        <div className="navigation__content">
          {/* Logo */}
          <div className="navigation__logo" onClick={closeMenu}>
            <img className='logo' src={logo} alt="effective solutions logo"/>
            <span className="logo__text">
              <span className="logo__text--blue">EFFECTIVE</span>
              <span className="logo__text--gray">SOLUTIONS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="navigation__menu">
            <Link 
              to="/" 
              className={`navigation__link ${isActive('/') ? 'navigation__link--active' : ''}`}
              onClick={handleHomeClick}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`navigation__link ${isActive('/about') ? 'navigation__link--active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link 
              to="/services" 
              className={`navigation__link ${isActive('/services') ? 'navigation__link--active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link> 


            <Link 
              to="/blogs" 
              className={`navigation__link ${isActive('/blogs') ? 'navigation__link--active' : ''}`}
              onClick={closeMenu}
            >
              Blog
            </Link> 

             <Link 
              to="/careers" 
              className={`navigation__link ${isActive('/careers') ? 'navigation__link--active' : ''}`}
              onClick={closeMenu}
            >
              Career
            </Link> 
      
          </div>

          {/* Contact Info */}
          <div className="navigation__contact">
            <button 
              className="navigation__contact-icon"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  scrollToSection('call-to-action-section');
                } else {
                  window.location.href = './#call-to-action-section';
                }
              }}
              aria-label="Contact us"
            >
              <Phone size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="navigation__mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navigation__mobile ${isMenuOpen ? 'navigation__mobile--open' : ''}`}>
          <div className="navigation__mobile-content">
            <Link 
              to="/" 
              className={`navigation__mobile-link ${isActive('/') ? 'navigation__mobile-link--active' : ''}`}
              onClick={handleHomeClick}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`navigation__mobile-link ${isActive('/about') ? 'navigation__mobile-link--active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link 
              to="/services" 
              className={`navigation__mobile-link ${isActive('/services') ? 'navigation__mobile-link--active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>

            <Link 
              to="/services" 
              className={`navigation__mobile-link ${isActive('/services') ? 'navigation__mobile-link--active' : ''}`}
              onClick={closeMenu}
            >
              Blogs
            </Link>
            
            
            
            <div className="navigation__mobile-contact">
              <button 
                className="navigation__contact-icon"
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === '/') {
                    scrollToSection('contact');
                  } else {
                    window.location.href = '../CallToAction/CallToAction';
                  }
                }}
                aria-label="Contact us"
              >
                <Phone size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;