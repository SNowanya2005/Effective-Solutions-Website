import React, { useState } from 'react';
import { Brain, Heart, Cpu, Code, Zap, ArrowRight } from 'lucide-react';
import './Whatwedo.css';
import health from './health.png';
import minddrone from './mind-drone.png';
import enterprisesoftwares from './enterprise-softwares.png'

const WhatWeDo = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'biomedical',
      title: 'Biomedical Solutions',
      subtitle: 'Healthcare Innovation',
      description: 'Revolutionary healthcare technologies that save lives through AI-powered diagnostics and non-invasive monitoring systems.',
      icon: <Heart />,
      color: '#ff6b6b',
      media: {
      type: 'video',
      image: health // Add image path
    },
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
      features: [
        'AI-driven eye screening (OPHTHA)',
        'Vascular health monitoring (JENDO)',
        'MINDRONE - Mind-controlled drone using EEG brain signals',
        'Non-invasive diagnostic tools',
        'FDA-approved technologies'
      ],
    },
    {
      id: 'software',
      title: 'Enterprise Software',
      subtitle: 'Digital Transformation',
      description: 'Custom software solutions that streamline operations, enhance productivity, and drive digital transformation across industries.',
      icon: <Code />,
      color: '#fd79a8',
      media: {
      type: 'video',
      image: enterprisesoftwares // Add image path
    },
      gradient: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
      features: [
        'E-commerce platforms',
        'Management systems',
        'Mobile applications',
        'Cloud-based solutions'
      ],
    }
  ];

  return (
    <section 
      className="what-we-do"
      style={{
        background: '#4a88b5',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="what-we-do__container">
        {/* Left Side - Content */}
        <div className="what-we-do__content">
          <div className="what-we-do__header">
            <h2 className="what-we-do__title">
              Transforming Industries Through
              <span className="title-highlight"> Innovation</span>
            </h2>
            <p className="what-we-do__subtitle">
              We specialize in cutting-edge technologies that solve real-world problems 
              and drive meaningful change across healthcare, industry, and society.
            </p>
          </div>

          <div className="services-tabs">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                style={{ '--service-color': service.color }}
              >
                <div className="service-tab__icon">
                  {service.icon}
                </div>
                <div className="service-tab__content">
                  <h3 className="service-tab__title">{service.title}</h3>
                  <p className="service-tab__subtitle">{service.subtitle}</p>
                </div>
                <div className="service-tab__arrow">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
 
          <div className="service-detail">
            <div className="service-detail__content">
              <h3 className="service-detailstitle">
                {services[activeService].title}
              </h3>
              <p className="service-details__description">
                {services[activeService].description}
              </p>
              <ul className="service-details__features">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="service-details__feature">
                    <div className="feature-dot" style={{ backgroundColor: services[activeService].color }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="what-we-do__visual">
          <div className="visual-container">
            {/* Background Shapes */}
            <div className="bg-shapes">
              <div className="bg-shape bg-shape-1"></div>
              <div className="bg-shape bg-shape-2"></div>
              <div className="bg-shape bg-shape-3"></div>
            </div>

            {/* Main Media Display */}
            <div 
              className="media-display"
              style={{ 
                background: services[activeService].gradient,
                '--service-color': services[activeService].color 
              }}
            >
              <div className="media-display__content">
                <div className="media-placeholder">
                          <img 
                      src={services[activeService].media.image} 
                      alt={services[activeService].title}
                      className="media-image"
                    />
                </div>
                <div className="media-overlay">
                  <div className="media-type-indicator">
                    {services[activeService].media.type === 'video' ? '▶' : '🖼'}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="floating-cards">
              <div className="floating-card floating-card-1">
                <div className="floating-card__icon">🏆</div>
                <div className="floating-card__text">
                  <div className="floating-card__number">3</div>
                  <div className="floating-card__label">Patents</div>
                </div>
              </div>
              
              <div className="floating-card floating-card-2">
                <div className="floating-card__icon">🌍</div>
                <div className="floating-card__text">
                  <div className="floating-card__number">3+</div>
                  <div className="floating-card__label">Countries</div>
                </div>
              </div>

              <div className="floating-card floating-card-3">
                <div className="floating-card__icon">⚡</div>
                <div className="floating-card__text">
                  <div className="floating-card__number">50+</div>
                  <div className="floating-card__label">Projects</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="decorative-elements">
              <div className="deco-circle deco-circle-1"></div>
              <div className="deco-circle deco-circle-2"></div>
              <div className="deco-line deco-line-1"></div>
              <div className="deco-line deco-line-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;