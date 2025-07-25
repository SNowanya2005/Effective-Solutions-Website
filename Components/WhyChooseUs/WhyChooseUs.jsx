import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section 
      className="why-choose-us-section"
      style={{
        padding: '100px 0',
        background: '#4a88b5',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        position: 'relative',
        boxSizing: 'border-box'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: '#ffffff', 
            marginBottom: '16px',
            position: 'relative'
          }}>
            Why Choose Effective Solutions
            {/* <span style={{
              content: '',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(135deg, #ffffff, #e3f2fd)',
              borderRadius: '2px',
              display: 'block'
            }}></span> */}
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#e3f2fd', 
            maxWidth: '600px', 
            margin: '0 auto', 
            lineHeight: '1.6' 
          }}>
            Leading the future of technology with proven expertise and innovation
          </p>
        </div>
        
        <div className="benefits-Grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          <div className="benefitCard" style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="benefit-icon" style={{
              width: '70px',
              height: '70px',
              margin: '0 auto 25px',
              background: 'linear-gradient(135deg, #4a88b5, #2c5f7a)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>
              Proven Track Record
            </h3>
            <p style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Successfully delivered 15+ enterprise projects with global patents and recognition from international organizations.
            </p>
          </div>
          
          <div className="benefitCard" style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="benefit-icon" style={{
              width: '70px',
              height: '70px',
              margin: '0 auto 25px',
              background: 'linear-gradient(135deg, #4a88b5, #2c5f7a)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>
              Cutting-Edge Innovation
            </h3>
            <p style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Pioneering Industry 4.0 solutions with expertise in AI, IoT, Biomedical technology, and advanced software development.
            </p>
          </div>
          
          <div className="benefitCard" style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="benefit-icon" style={{
              width: '70px',
              height: '70px',
              margin: '0 auto 25px',
              background: 'linear-gradient(135deg, #4a88b5, #2c5f7a)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>
              Expert Team
            </h3>
            <p style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Passionate Sri Lankan innovators collaborating with university research centers and investing in master degree programs.
            </p>
          </div>
          
          <div className="benefitCard" style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="benefit-icon" style={{
              width: '70px',
              height: '70px',
              margin: '0 auto 25px',
              background: 'linear-gradient(135deg, #4a88b5, #2c5f7a)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>
              Trusted by Leaders
            </h3>
            <p style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '0.95rem' }}>
              First private organization in Sri Lanka to partner with WHO, trusted by government institutions and global corporations.
            </p>
          </div>
          
          <div className="benefitCard" style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="benefit-icon" style={{
              width: '70px',
              height: '70px',
              margin: '0 auto 25px',
              background: 'linear-gradient(135deg, #4a88b5, #2c5f7a)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeWidth="2"/>
                <polyline points="7.5,4.21 12,6.81 16.5,4.21" strokeWidth="2"/>
                <polyline points="7.5,19.79 7.5,14.6 3,12" strokeWidth="2"/>
                <polyline points="21,12 16.5,14.6 16.5,19.79" strokeWidth="2"/>
                <polyline points="12,22.81 12,17" strokeWidth="2"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>
              End-to-End Solutions
            </h3>
            <p style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Complete system design, development, implementation, and ongoing support with proprietary IoT platform ANANKE.
            </p>
          </div>
          
          <div className="benefitCard" style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="benefit-icon" style={{
              width: '70px',
              height: '70px',
              margin: '0 auto 25px',
              background: 'linear-gradient(135deg, #4a88b5, #2c5f7a)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'all 0.3s ease'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>
              International Standards
            </h3>
            <p style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Developed solutions meeting British military standards, Japanese industry requirements, and international healthcare protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;