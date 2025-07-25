import React from 'react';
import { 
  Shield, 
  Map, 
  Network, 
  Award, 
  Zap, 
  Microscope, 
  Brain, 
  Target, 
  Globe, 
  Building, 
  Users,
  Database,
  Camera,
  CheckCircle,
  Heart
} from 'lucide-react';
import './FeaturedProjects.css';

import jendo from './jendo.jpg';
import myndrone from './mind-drone.png';
import ophtha from './optha.jpg';
import missionmanagement from './Mission-Command.jpg';
import networkpng from './planning-management.png'; 
import datamanagement from './slamds.jpg';
import armyIMG from './am.png'; 

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className='featuredProjectTitle'>Featured Projects</h2>
          <p>Breakthrough innovations that are transforming industries</p>
        </div>
        
        <div className="projects-grid">
          {/* JENDO - Featured Project */}
          <div className="project-card featured">
            <div className="project-image">
              <img 
                src={jendo} 
                alt="JENDO Vascular Health Test" 
                className="project-img"
              />
              <div className="project-overlay">
                <div className="project-tech">
                  <span className="tech-tag">AI</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Medical Tech</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>JENDO - Vascular Health Test</h3>
              <p>Revolutionary non-invasive cardiovascular health monitoring technology that analyzes endothelial dysfunction to predict future cardiovascular risks.</p>
              <div className="project-highlights">
                <div className="highlight">
                  <Award className="highlight-icon" size={20} />
                  <span>Patented in USA, Japan & Sri Lanka</span>
                </div>
                <div className="highlight">
                  <Zap className="highlight-icon" size={20} />
                  <span>Cloud-based AI Processing</span>
                </div>
                <div className="highlight">
                  <Microscope className="highlight-icon" size={20} />
                  <span>PPG & Temperature Analysis</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* MYNDRONE */}
          <div className="project-card">
            <div className="project-image">
              <img 
                src={myndrone} 
                alt="MYNDRONE EEG Controlled Drone" 
                className="project-img"
              />
              <div className="project-overlay">
                <div className="project-tech">
                  <span className="tech-tag">EEG</span>
                  <span className="tech-tag">IoT</span>
                  <span className="tech-tag">5G</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>MYNDRONE - EEG Controlled Drone</h3>
              <p>Mind-controlled drone technology using EEG signals for stress reduction and human health improvement in Industry 4.0 applications.</p>
              <div className="project-highlights">
                <div className="highlight">
                  <Brain className="highlight-icon" size={20} />
                  <span>Brain-Computer Interface</span>
                </div>
                <div className="highlight">
                  <Target className="highlight-icon" size={20} />
                  <span>Stress Reduction Focus</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* OPHTHA */}
          <div className="project-card">
            <div className="project-image">
              <img 
                src={ophtha} 
                alt="OPHTHA Automatic Eye Screening" 
                className="project-img"
              />
              <div className="project-overlay">
                <div className="project-tech">
                  <span className="tech-tag">AI</span>
                  <span className="tech-tag">Computer Vision</span>
                  <span className="tech-tag">Healthcare</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>OPHTHA - Automatic Eye Screening</h3>
              <p>AI-driven diabetes retinopathy detection system using fundus images for clinical-level diagnostics and early intervention.</p>
              <div className="project-highlights">
                <div className="highlight">
                  <Globe className="highlight-icon" size={20} />
                  <span>Japan METI Funded</span>
                </div>
                <div className="highlight">
                  <Heart className="highlight-icon" size={20} />
                  <span>Clinical Grade Accuracy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sri Lanka Accident Data Management System - Featured */}
          <div className="project-card featured">
            <div className="project-image project-placeholder">
              <img 
                src={datamanagement} 
                alt="Data Management System" 
                className="project-img"
              />
              <div className="project-overlay">
                <div className="project-tech">
                  <span className="tech-tag">WHO Partnership</span>
                  <span className="tech-tag">Government</span>
                  <span className="tech-tag">Data Analytics</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Sri Lanka Accident Data Management System (SLADMS)</h3>
              <p>National road traffic accident monitoring system developed in collaboration with WHO and Sri Lanka Police, establishing comprehensive reporting and management mechanisms.</p>
              <div className="project-highlights">
                <div className="highlight">
                  <Award className="highlight-icon" size={20} />
                  <span>First Private-WHO Partnership in Sri Lanka</span>
                </div>
                <div className="highlight">
                  <Shield className="highlight-icon" size={20} />
                  <span>Government-Grade Security</span>
                </div>
                <div className="highlight">
                  <Globe className="highlight-icon" size={20} />
                  <span>International Standards Compliance</span>
                </div>
                <div className="highlight">
                  <CheckCircle className="highlight-icon" size={20} />
                  <span>Continuous WHO Funding</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card featured">
            <div className="project-image">
              <img 
                src={armyIMG} 
                alt="JENDO Vascular Health Test" 
                className="project-img"
              />
              <div className="project-overlay">
                <div className="project-tech">
                  <span className="tech-tag">GIS</span>
                  <span className="tech-tag">Military</span>
                  <span className="tech-tag">Training</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Military Geographic Information System</h3>
              <p>Advanced GIS solution for Sri Lanka Army enabling military training and intelligent mission planning based on British military standards.</p>
              <div className="project-highlights">
                <div className="highlight">
                  <Award className="highlight-icon" size={20} />
                  <span>British Military Standards</span>
                </div>
                <div className="highlight">
                  <Zap className="highlight-icon" size={20} />
                  <span>Mandatory Soldier Training</span>
                </div>
                <div className="highlight">
                  <Microscope className="highlight-icon" size={20} />
                  <span>Active at Batalanda Camp</span>
                </div>
              </div>
            </div>
          </div>
          

          {/* Access Network Planning and Operations Management System */}
          <div className="project-card">
            <div className="project-image project-placeholder">
              <img 
                src={networkpng} 
                alt="Network Planning and Operations Management" 
                className="project-img"
              />
             
              <div className="project-overlay">
                <div className="project-tech">
                  <span className="tech-tag">Cloud</span>
                  <span className="tech-tag">Mobile</span>
                  <span className="tech-tag">Fiber Optics</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Access Network Planning & Operations Management (ANTOMS)</h3>
              <p>Cloud-based system and mobile application for fiber operation planning, execution, and monitoring in Sri Lanka's telecommunications infrastructure.</p>
              <div className="project-highlights">
                <div className="highlight">
                  <Network className="highlight-icon" size={20} />
                  <span>Fiber-to-Home Technology</span>
                </div>
                <div className="highlight">
                  <Database className="highlight-icon" size={20} />
                  <span>1.5M+ Images (2TB+ Data)</span>
                </div>
                <div className="highlight">
                  <Camera className="highlight-icon" size={20} />
                  <span>Real-time Field Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;