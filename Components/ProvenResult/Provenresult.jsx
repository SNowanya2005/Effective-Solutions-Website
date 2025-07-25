import React from 'react';
import './Provenresult.css';

const Provenresult = () => {
  return (
    <section className="proven-results-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Proven Results</h2>
          <p>Delivering excellence through innovation and cutting-edge technology</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div className="stat-number">3</div>
            <div className="stat-label">Patents Secured</div>
            <div className="stat-desc">USA, Japan & Sri Lanka</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                <path d="M10 6h4"/>
                <path d="M10 10h4"/>
                <path d="M10 14h4"/>
                <path d="M10 18h4"/>
              </svg>
            </div>
            <div className="stat-number">15+</div>
            <div className="stat-label">Enterprise Projects</div>
            <div className="stat-desc">Successfully Delivered</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="m22 21-3-3m0 0-3-3m3 3 3-3m-3 3-3 3"/>
              </svg>
            </div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Global Clients</div>
            <div className="stat-desc">Across Multiple Industries</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
              </svg>
            </div>
            <div className="stat-number">2025</div>
            <div className="stat-label">Target Year</div>
            <div className="stat-desc">Advanced Tech Hub</div>
          </div>
        </div>
        
        <div className="achievements-banner">
          <div className="achievement-item">
            <span className="achievement-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            </span>
            <span>First Private Organization to Partner with WHO in Sri Lanka</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
            </span>
            <span>Only Sri Lankan Project Funded by METI Japan</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18h8"/>
                <path d="M3 22h18"/>
                <path d="M14 22a7 7 0 1 0 0-14h-1"/>
                <path d="M9 14h2"/>
                <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
                <path d="M12 6V3a1 1 0 0 0-2 0v3"/>
              </svg>
            </span>
            <span>Leading Industry 4.0 Innovation in South Asia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provenresult;