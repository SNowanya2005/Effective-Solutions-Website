import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  

  return (
    <section className="trusted-by">
      <div className="container">
        <div className="trusted-by__header">
          <h2 className="trusted-by__title">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="trusted-by__subtitle">
            From global organizations to innovative startups, we've earned the trust 
            of clients across healthcare, government, telecommunications, and technology sectors.
          </p>
        </div>

        <div className="trusted-by__stats">
          <div className="stat-cards">
            <div className="stat-card-number">200+</div>
            <div className="stat-card-label">Projects Delivered</div>
          </div>
          <div className="stat-cards">
            <div className="stat-card-number">100+</div>
            <div className="stat-card-label">Industry Partners</div>
          </div>
          <div className="stat-cards">
            <div className="stat-card-number">3</div>
            <div className="stat-card-label">International Patents</div>
          </div>
          <div className="stat-cards">
            <div className="stat-card-number">10+</div>
            <div className="stat-card-label">Years of Excellence</div>
          </div>
        </div>

        <div className="trusted-by__achievements">
  <div className="achievement-highlight">
    <div className="achievement-highlight__icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    </div>
    <div className="achievement-highlight__content">
      <h3>First Private Organization in Sri Lanka</h3>
      <p>To partner with WHO for a national project</p>
    </div>
  </div>
  
        <div className="achievement-highlight">
          <div className="achievement-highlight__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
          </div>
          <div className="achievement-highlight__content">
            <h3>International Recognition</h3>
            <p>Patents secured in USA, Japan, and Sri Lanka</p>
          </div>
        </div>
        
        <div className="achievement-highlight">
          <div className="achievement-highlight__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
            </svg>
          </div>
          <div className="achievement-highlight__content">
            <h3>Industry 4.0 Pioneer</h3>
            <p>Leading technological innovation in biomedical and IoT</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TrustedBy;