import React, { useEffect, useRef, useState } from 'react';
import { 
  CheckCircle, 
  Trophy, 
  Users, 
  TrendingUp,
  Globe,
  Rocket,
  Target,
  Award,
  Briefcase,
  Calendar,
  Star,
  Zap,
  MapPin,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Github,
  Building,
  Heart,
  Clock,
  ChevronDown
} from 'lucide-react';

import './AboutUs.css';
import './image1.jpg'; // Replace with actual image paths


import jendo_1 from './IMG1.jpg';
// import jendo2 from './jendo2.jpeg';
// import jendo3 from './jendo3.jpeg';
// import jendo4 from './jendo4.jpeg';

import image1 from './image1.jpg'; 
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image from './image8 .jpg';


import img1 from './IMG-1.jpg';
import img2 from './effective-solutions.webp';
import img3 from './IMG-2.jpg';
import img4 from './IMG-4.jpg';
import img5 from './jendo.png';
import img6 from './IMG-7.jpg';
import ceo from './ceo&founder.jpg';
import director from './director.jpg';


import ophtha1 from './oph.jpeg';
import ophtha3 from './ophtha3.jpeg';

import ourstory from './ourstoryimg.jpg';

const AboutUs = () => {
  const timelineRef = useRef(null);

  const journeyMilestones = [
    {
      year: "2013",
      title: "Our Humble Beginning",
      description: "Started as a passionate group of engineering undergraduates at University of Moratuwa.",
      icon: <Rocket size={24} />,
      achievements: ["Founded by 5 engineering graduates", "First office in Moratuwa", "Initial focus on software development"],
      bgColor: "#3B82F6",
      image: img1
    },
    {
      year: "2014",
      title: "Company Registration",
      description: "Officially registered as Effective Solutions (Pvt) Ltd.",
      icon: <Zap size={24} />,
      achievements: ["First undergraduate startup from University of Moratuwa to become a Private Limited Company", "Successfully developed comprehensive business model and legal framework", "Established formal organizational structure and governance" ,"Created foundation for scalable business operations"],
      bgColor: "#10B981",
      image: img2
    },
    {
      year: "2014",
      title: "First Official Product Luanch",
      description: "Launched Route Radar - Our first mobile tracking platform.",
      icon: <Globe size={24} />,
      achievements: ["Successfully launched Route Radar tracking platform", "Acquired paying customers in first month", "Established fleet management market presence", "Received industry recognition for innovation"],
      bgColor: "#F59E0B",
      image: img3
    },
    {
      year: "2015",
      title: "Phase Two Expansion",
      description: "Rapid expansion with new office space and tripled workforce.",
      icon: <Trophy size={24} />,
      achievements: ["Moved into a larger office space to accommodate growth", "Tripled the workforce to 15 employees within five months", "Increased company valuation to X million Rs.", "Strengthened market position and operational capacity"],
      bgColor: "#8B5CF6",
      image: img4
    },
    {
      year: "2021",
      title: "Technology Leadership",
      description: "Launched JENDO, OPHTHA, and MYNDRONE - revolutionary healthcare solutions.",
      icon: <Target size={24} />,
      achievements: ["JENDO vascular health test", "OPHTHA eye screening", "MYNDRONE EEG drone control"],
      bgColor: "#EF4444",
      image: img5
    },
    {
      year: "2024",
      title: "Industry 4.0 Pioneer",
      description: "Leading the transformation of industries through AI, IoT, and advanced software solutions.",
      icon: <Star size={24} />,
      achievements: ["500+ projects completed", "Global team of 50+ experts", "Expanding into new markets"],
      bgColor: "#06B6D4",
      image: img6
    }
  ];

  const stats = [
    { 
      number: "500+", 
      label: "Projects Completed", 
      icon: <CheckCircle size={32} strokeWidth={2} />,
      color: "#10B981"
    },
    { 
      number: "50+", 
      label: "Awards Won", 
      icon: <Trophy size={32} strokeWidth={2} />,
      color: "#F59E0B"
    },
    { 
      number: "20+", 
      label: "Team Members", 
      icon: <Users size={32} strokeWidth={2} />,
      color: "#3B82F6"
    },
    { 
      number: "10+", 
      label: "Years Experience", 
      icon: <TrendingUp size={32} strokeWidth={2} />,
      color: "#8B5CF6"
    }
  ];

  const values = [
    {
      icon: <Globe size={40} strokeWidth={2} />,
      title: "Global Presence",
      description: "Operations spanning across Sri Lanka, Japan, and England, serving clients worldwide.",
      color: "#3B82F6"
    },
    {
      icon: <Rocket size={40} strokeWidth={2} />,
      title: "Innovation Focus",
      description: "Delivering cutting-edge solutions that drive technological advancement.",
      color: "#10B981"
    },
    {
      icon: <Target size={40} strokeWidth={2} />,
      title: "Industry Excellence",
      description: "Award-winning technology solutions across various sectors.",
      color: "#F59E0B"
    }
  ];

  const teamMembers = [
    {
      name: "Keerthi Kodithuwakku",
      position: "CEO & Founder",
      linkedin: "https://www.linkedin.com/in/keerthi-kodithuwakku-b98149219/",
      email: "keerthi.effectivesolutions@gmail.com",
      image: ceo
    },
    {
      name: "Heminda Jayawardhana",
      position: "Director",
      linkedin: "https://www.linkedin.com/in/heminda/",
      email: "#",
      image: director
    }
  ];

  const locations = [
    { name: "Sri Lanka", type: "Headquarters" },
    { name: "Japan", type: "Regional Office" },
    { name: "England", type: "Regional Office" }
  ];

  const [activeCategory, setActiveCategory] = useState('innovation-focus');
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [isLoading, setIsLoading] = useState(false);

// Gallery data
const galleryData = {
  'innovation-focus': {
    title: 'Innovation Focus',
    icon: <Rocket size={24} />,
    images: [
      jendo_1,
      ophtha1,
      ophtha3
    ]
  },
  'global-presence': {
    title: 'Global Presence',
    icon: <Globe size={24} />,
    images: [
      image5
    ]
  },
  'awards': {
    title: 'Awards & Recognition',
    icon: <Trophy size={24} />,
    images: [
      image1,
      image2,
      image3,
      image4,
      image6,
      image7,
      image8,
      image
    ]
  }
};

// Auto-rotation effect
useEffect(() => {
  const interval = setInterval(() => {
    const currentImages = galleryData[activeCategory].images;
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  }, 3000); // Change every 3 seconds

  return () => clearInterval(interval);
}, [activeCategory]);

// Listen for category changes from value cards
useEffect(() => {
  const handleCategoryChange = (event) => {
    const newCategory = event.detail.category;
    handleCategoryChange(newCategory);
  };

  window.addEventListener('categoryChange', handleCategoryChange);
  return () => window.removeEventListener('categoryChange', handleCategoryChange);
}, []);

const handleCategoryClick = (category) => {
  if (category === activeCategory) return;
  
  setIsLoading(true);
  setTimeout(() => {
    setActiveCategory(category);
    setCurrentImageIndex(0);
    setIsLoading(false);
  }, 500);
};


  // Intersection Observer for timeline animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-visible');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    // Progress line animation
    const updateProgress = () => {
      const timelineContainer = timelineRef.current;
      if (!timelineContainer) return;

      const rect = timelineContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;
      const scrolled = Math.max(0, windowHeight - rect.top);
      const progress = Math.min(1, scrolled / (containerHeight + windowHeight * 0.5));
      
      const progressLine = document.querySelector('.timeline-progress');
      if (progressLine) {
        progressLine.style.height = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background-grid"></div>
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
        
        <div className="container">
          <div className="herocontent">
            <h2 className="hero-title">
              Building Trust Through Technology – <span className="title-gradient">Simplifying Tomorrow’s Challenges Today.</span><br />
             
            </h2>
            <p className="herodescription">
              Transforming ideas into digital reality through cutting-edge technology and innovation
            </p>
            
            {/* Scroll indicator */}
            <div className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Effective Solutions (Pvt) Ltd is an award-winning technology company in Sri Lanka, 
                renowned for delivering high-quality, innovative solutions across various industries. 
                Founded in 2013 by five engineering graduates from the University of Moratuwa, the 
                company has expanded its global footprint to Japan and England, transforming 
                business requirements into functional digital solutions.
              </p>
            </div>
            <div className="story-image">
              <img className="story-placeholder"
                src={ourstory} 
                alt="Our Story"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="statssection">
        <div className="container">
          <div className="statsgrid">
            {stats.map((stat, index) => (
              <div key={index} className="statcard" style={{'--delay': `${index * 0.1}s`}}>
                <div className="staticon" style={{color: stat.color}}>
                  {stat.icon}
                </div>
                <div className="statnumber" style={{color: stat.color}}>
                  {stat.number}
                </div>
                <div className="statlabel">
                  {stat.label}
                </div>
                <div className="stataccent" style={{background: stat.color}}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card clickable-card" 
                style={{'--delay': `${index * 0.2}s`}}
                onClick={() => {
                  // Smooth scroll to gallery section
                  const gallerySection = document.getElementById('gallery-section');
                  if (gallerySection) {
                    gallerySection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                    
                    // Set active category after scroll
                    setTimeout(() => {
                      const categoryMap = {
                        'Global Presence': 'global-presence',
                        'Innovation Focus': 'innovation-focus',
                        'Industry Excellence': 'awards'
                      };
                      const categoryId = categoryMap[value.title];
                      if (categoryId) {
                        // Trigger category change in gallery
                        const event = new CustomEvent('categoryChange', { 
                          detail: { category: categoryId } 
                        });
                        window.dispatchEvent(event);
                      }
                    }, 1000);
                  }
                }}
              >
                <div className="value-icon" style={{color: value.color}}>
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                
                {/* Click indicator */}
                <div className="click-indicator">
                  <ArrowRight size={20} />
                </div>
                
                {/* Hover overlay */}
                <div className="value-card-overlay">
                  <span>View Gallery</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section - Enhanced Timeline */}
      <section className="journey-section">
        <div className="journey-background"></div>
        
        <div className="container">
          <div className="journey-header">
            <h2 className="section-title">
              Our Journey
              <div className="title-underline"></div>
            </h2>
            <p className="journey-subtitle">
              Discover the milestones that shaped our path to innovation
            </p>
          </div>

          <div ref={timelineRef} className="journey-timeline">
            {/* Timeline Line */}
            <div className="timeline-line">
              <div className="timeline-progress"></div>
            </div>

            {journeyMilestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                style={{'--delay': `${index * 0.1}s`}}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot">
                  <div className="timeline-dot-inner" style={{background: milestone.bgColor}}>
                    {milestone.icon}
                  </div>
                  <div className="timeline-dot-ring"></div>
                </div>

                {/* Timeline Content */}
                <div className="timeline-content">
                  <div className="timeline-card">
                    {/* Top accent line */}
                    <div className="timeline-card-accent" style={{background: milestone.bgColor}}></div>

                    {/* Arrow connector */}
                    <div className="timeline-arrow"></div>

                    {/* Year Badge */}
                    <div className="timeline-year-badge" style={{background: milestone.bgColor}}>
                      {milestone.year}
                    </div>

                    <div className="timeline-body">
                      <h3 className="timeline-title">{milestone.title}</h3>
                      <p className="timeline-description">{milestone.description}</p>

                      {/* Achievements */}
                      <div className="timeline-achievements">
                        {milestone.achievements.map((achievement, i) => (
                          <div key={i} className="achievement-item" style={{'--achievement-delay': `${i * 0.1}s`}}>
                            <CheckCircle size={16} className="achievement-icon" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <div className="timeline-footer">
                        <button className="read-more-btn" style={{'--btn-color': milestone.bgColor}}>
                          Read more
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NEW: Timeline Image - positioned opposite to content */}
                <div className="timeline-image">
                  {milestone.image ? (
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="timeline-image-placeholder">
                      <span>Image for {milestone.year}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="awards-section">
        <div className="container">
          <div className="awards-header">
            <div className="awards-badge">
              <Award size={24} />
              <span>Award Winning</span>
            </div>
            <h2 className="awards-title">
              Recognized Excellence in
              <span className="awards-highlight"> Technology Innovation</span>
            </h2>
            <p className="awards-subtitle">
              Our commitment to excellence has been recognized by industry leaders worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <h2 className="gallery-title">Our Journey in Images</h2>
            <p className="gallery-subtitle">Explore our achievements across different domains</p>
          </div>

          <div className="gallery-navigation">
            {Object.entries(galleryData).map(([key, data]) => (
              <button
                key={key}
                className={`gallery-nav-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => handleCategoryClick(key)}
              >
                <div className="nav-btn-icon">
                  {data.icon}
                </div>
                <span>{data.title}</span>
              </button>
            ))}
          </div>

          <div className="gallery-content">
            {isLoading ? (
              <div className="gallery-loading">
                <div className="loading-spinner">
                  <Clock size={24} />
                </div>
                <p>Loading images...</p>
              </div>
            ) : (
              <div className="gallery-display">
                <div className="gallery-main-image">
                  <img
                    src={galleryData[activeCategory].images[currentImageIndex]}
                    alt={`${galleryData[activeCategory].title} - Image ${currentImageIndex + 1}`}
                    className="main-image"
                  />
                  <div className="image-overlay">
                    <div className="image-info">
                      <h3>{galleryData[activeCategory].title}</h3>
                      <p>Image {currentImageIndex + 1} of {galleryData[activeCategory].images.length}</p>
                    </div>
                  </div>
                </div>

                <div className="gallery-thumbnails">
                  {galleryData[activeCategory].images.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="gallery-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{
                  width: `${((currentImageIndex + 1) / galleryData[activeCategory].images.length) * 100}%`
                }}
              ></div>
            </div>
            <span className="progress-text">
              {currentImageIndex + 1} / {galleryData[activeCategory].images.length}
            </span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>Led by these faces</h2>
            <p>Meet our passionate team of innovators and technology experts</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card" style={{'--delay': `${index * 0.2}s`}}>
                <div className="team-image">
                  <img className="team-placeholder" src={member.image}>
                  
                  </img>
                </div>
                
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  
                  <div className="team-social">
                    <a href={member.linkedin} className="social-link">
                      <Linkedin size={16} />
                    </a>
                    <a href={`mailto:${member.email}`} className="social-link">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Commitment */}
      <section className="presence-commitment">
        <div className="container">
          <div className="presence-content">
            <div className="presence-section">
              <h2>Our Global Presence</h2>
              <p>
                To better serve our clients and stay at the forefront of technological advancements, 
                we have established a global presence with operations in Japan and England. This 
                expansion allows us to transform diverse business requirements into functional digital 
                solutions, catering to a broad spectrum of industries.
              </p>
              <div className="locations">
                {locations.map((location, index) => (
                  <div key={index} className="location">
                    <div className="location-icon">
                      <MapPin size={20} />
                    </div>
                    <h4>{location.name}</h4>
                    <p>{location.type}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="commitment-section">
              <h2>Our Commitment</h2>
              <p>
                At Effective Solutions, we are committed to delivering innovative technological 
                solutions that drive efficiency and growth. Our journey reflects our dedication to 
                excellence and our passion for transforming ideas into impactful solutions.
              </p>
              <p>
                We invite you to explore our services and discover how we can collaborate to innovate 
                your business.
              </p>
              <a href="#contact" className="cta-button">
                Get in touch 
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h2>Contact Us</h2>
            <p>Ready to start your next project? Get in touch with our team.</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon contact-icon-email">
                <Mail size={24} />
              </div>
              <h3>Email Us</h3>
              <p>info@effectivesolutions.lk</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon contact-icon-phone">
                <Phone size={24} />
              </div>
              <h3>Call Us</h3>
              <p>+94 11 234 5678</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon contact-icon-location">
                <Building size={24} />
              </div>
              <h3>Visit Us</h3>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;