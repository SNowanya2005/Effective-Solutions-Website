import React, { useState } from 'react';
import './Blogs.css';
import blog1 from './blog1.jpg';
import blog2 from './blog2.jpg';
import blog3 from './blog3.jpeg';
import blog4 from './blog4.png';
import blog5 from './blog5.jpg';
import blog6 from './blog6.jpg';
import blog7 from './blog7.png';
import blog8 from './blog8.jpg';

const Blog = () => { 
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'biomedical', name: 'Biomedical Tech', count: 5 },
    { id: 'iot', name: 'IoT & Smart Systems', count: 6 },
    { id: 'industry-40', name: 'Industry 4.0', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Celebrating Start-up Innovation: Highlights from Seedstars Sri Lanka Regional Event',
      category: 'startup-ecosystem',
      excerpt: 'Discover how Seedstars empowers start-ups in emerging markets and highlights from the Sri Lanka Regional Event showcasing local innovation.',
      subtitle: [
        'The Seedstars Experience: Supporting Innovation in Emerging Markets',
        'Highlights from the Sri Lanka Regional Event', 
        'The Winning Start-up: Innovation That Stands Out', 
        'Building Sri Lanka\'s Start-up Ecosystem'
      ],
      content: {
        sections: [
          {
            title: "About Seedstars and Its Global Mission",
            content: "An overview of Seedstars, an organization focused on empowering start-ups in emerging markets, with a specific look at its commitment to fostering innovation in Sri Lanka."
          },
          {
            title: "Why Seedstars Matters for Local Start-ups",
            content: "A discussion on how Seedstars helps start-ups connect with resources, mentorship, and a global network, creating pathways to growth and visibility for early-stage businesses."
          },
          {
            title: "Highlights from the Sri Lanka Regional Event",
            subsections: [
              {
                title: "An Event That Inspires and Empowers",
                content: "Highlights from the day, including inspiring speeches, panel discussions, and networking opportunities that set the stage for a collaborative start-up ecosystem."
              },
              {
                title: "Showcasing Sri Lankan Start-ups: A Competitive Showcase",
                content: "A look at some of the competing start-ups and their innovative solutions, highlighting the diversity and creativity of Sri Lanka's entrepreneurial scene."
              }
            ]
          },
          {
            title: "The Winning Start-up: Innovation That Stands Out",
            content: "An in-depth look at the winning start-up, their innovative solution, and what made them stand out among the competition. This section explores their journey, challenges overcome, and future potential."
          },
          {
            title: "Building Sri Lanka's Start-up Ecosystem",
            content: "Discussion on the broader impact of events like Seedstars on Sri Lanka's start-up ecosystem, including how such initiatives contribute to economic growth, job creation, and technological advancement in the region."
          }
        ]
      },
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: blog1,
      tags: ['Startups', 'Innovation', 'Entrepreneurship', 'Sri Lanka', 'Seedstars'],
      featured: true,
   
    },   
    {
      id: 2,
      title: 'Empowering Entrepreneurs: Insights from "Business Best" on Building a Thriving Business',
      category: 'startup-ecosystem',
      excerpt: 'Key insights and actionable strategies from "Business Best" to help entrepreneurs build successful and sustainable businesses.',
      subtitle: [
        'Key Lessons for Aspiring Entrepreneurs',
        'Success Stories: Inspiration from Industry Leaders', 
        'Actionable Tips and Strategies', 
        'The Role of Leadership and Vision in Business Growth'
      ],
      content: {
        sections: [
          {
            title: "Understanding Market Needs",
            content: "Entrepreneurs must focus on identifying and addressing the unique needs of their target audience, a concept emphasized repeatedly in 'Business Best.'"
          },
          {
            title: "Importance of Adaptability and Innovation",
            content: "Insights on how businesses can adapt to rapid changes in the market and embrace innovation as a core value."
          },
          {
            title: "Success Stories: Inspiration from Industry Leaders",
            subsections: [
              {
                title: "Profiles of Featured Entrepreneurs",
                content: "A look at some inspiring guests on 'Business Best,' detailing how they achieved success and the challenges they overcame."
              },
              {
                title: "Real-World Applications of Business Best Practices",
                content: "Real-life examples of how applying the right strategies can transform business ideas into successful ventures."
              }
            ]
          },
          {
            title: "Actionable Tips and Strategies",
            subsections: [
              {
                title: "Setting Goals and Measuring Success",
                content: "Tips on setting realistic goals and tracking progress to ensure growth aligns with business objectives."
              },
              {
                title: "Traits of Successful Business Leaders",
                content: "From vision to resilience, explore the qualities shared by leaders who make an impact."
              }
            ] 
          }
        ]
      },
      publishDate: '2024-10-29',
      readTime: '8 min read',
      image: blog2,
      tags: ['Business', 'Leadership', 'Entrepreneurship', 'Strategy'],
      featured: false,
     
    },
    {
      id: 3,
      title: 'Empowering Voices: How Public Speaking Drives Innovation and Leadership in Business',
      category: 'startup-ecosystem',
      excerpt: 'Discover how public speaking skills can transform leaders and drive innovation in business environments.',
      subtitle: [
        'The Power of Public Speaking in Business',
        'How Public Speaking Builds Confidence and Credibility', 
        'Real-World Examples: Leaders Who Transform Through Speech', 
        'Tips to Enhance Your Public Speaking Skills'
      ],
      content: {
        sections: [
          {
            title: "The Power of Public Speaking in Business",
            subsections: [
              {
                title: "Effective Communication as a Leadership Skill",
                content: "Public speaking helps individuals clearly articulate ideas, making it easier for teams to align with a shared vision."
              },
              {
                title: "Inspiring Innovation through Storytelling",
                content: "Storytelling is a powerful tool within public speaking that can turn complex concepts into relatable ideas, sparking creativity and engagement among peers."
              }
            ]
          },
          {
            title: "How Public Speaking Builds Confidence and Credibility",
            subsections: [
              {
                title: "Establishing Authority and Trust",
                content: "Speaking in front of an audience boosts credibility, positioning individuals as thought leaders in their field."
              },
              {
                title: "Confidence-Building through Practice",
                content: "Overcoming the challenges of public speaking allows professionals to build resilience and confidence, which translates into more effective communication in all business interactions."
              }
            ]
          },
          {
            title: "Real-World Examples: Leaders Who Transform Through Speech",
            subsections: [
              {
                title: "Case Study: A Professional's Journey from Hesitance to Leadership",
                content: "Share stories of individuals who started with little confidence in public speaking and eventually used it to become prominent business figures or leaders."
              },
              {
                title: "Impact of Public Speaking on Business Outcomes",
                content: "Look at how strong public communication has directly impacted business success, whether in terms of investor relations, team morale, or client acquisition."
              }
            ]
          },
          {
            title: "Tips to Enhance Your Public Speaking Skills",
            subsections: [
              {
                title: "Crafting a Memorable Message",
                content: "Tips on structuring speeches to ensure they are concise, impactful, and memorable."
              },
              {
                title: "Practice and Feedback",
                content: "Regular practice and seeking feedback can help refine speaking skills, reducing anxiety and improving performance."
              },
              {
                title: "Focus on Body Language and Voice Modulation",
                content: "Non-verbal cues play a significant role in engaging the audience. Understanding body language and tone can enhance the impact of a speech."
              }
            ] 
          }
        ]
      },
      publishDate: '2024-10-29',
      readTime: '6 min read',
      image: blog3,
      tags: ['Public Speaking', 'Leadership', 'Communication', 'Business'],
      featured: false,
      
    },
    {
      id: 4,
      title: 'Celebrating Innovation: Jendo Wins the John Keells Open Innovation Challenge 2016',
      category: 'biomedical',
      excerpt: 'How Jendo\'s innovative healthcare solution won the prestigious John Keells Open Innovation Challenge and its impact on the industry.',
      subtitle: [
        'The John Keells Open Innovation Challenge',
        'About Jendo and Their Mission', 
        'Impacts and Future Prospects for Jendo', 
        'Inspiring Innovation in Healthcare'
      ],
      content: {
        sections: [
          {
            title: "The John Keells Open Innovation Challenge",
            content1: "Overview: The John Keells Open Innovation Challenge is one of Sri Lanka's premier platforms for fostering innovation and entrepreneurship. It aims to recognize and reward projects that offer novel solutions to pressing challenges in various sectors, including healthcare, technology, and social impact.",
            content2: "Significance of Winning: Winning this challenge places Jendo among the top innovators in the region. It demonstrates the company's ability to develop practical solutions with far-reaching impacts on healthcare and wellness."
          },
          {
            title: "About Jendo and Their Mission",
            content1: "Company Vision: Jendo focuses on harnessing technology to create healthcare solutions that are accessible, effective, and impactful. They aim to address key health challenges through innovations that benefit both medical professionals and patients.",
            content2: "The Winning Project: Details about the project or product that helped Jendo secure this award. For example, if it was a diagnostic tool or health management app, describe how it works and the problem it solves."
          },
          {
            title: "Impacts and Future Prospects for Jendo",
            content1: "Industry Recognition: Winning the John Keells Challenge has provided Jendo with not only recognition but also opportunities to grow and collaborate within the industry.",
            content2: "Looking Ahead: How this win has helped Jendo set new goals, attract investors, or develop future projects. This section can discuss the company's future plans and how it aims to further impact the healthcare sector."
          },
          {
            title: "Inspiring Innovation in Healthcare",
            subsections: [
              {
                title: "Role in Regional Innovation",
                content: "Jendo's achievement contributes to the growth of the tech and healthcare sectors in Sri Lanka and beyond. It sets a benchmark for innovation and encourages others to pursue solutions that can make a tangible difference."
              },
              {
                title: "Message for Innovators",
                content: "The John Keells Open Innovation Challenge and Jendo's success serve as inspiration for budding entrepreneurs. Their journey emphasizes the importance of determination, creativity, and a solution-driven approach in overcoming healthcare challenges."
              }
            ]
          }
        ]
      },
      publishDate: 'October 29, 2024',
      readTime: '7 min read',
      image: blog4,
      tags: ['Healthcare', 'Innovation', 'Awards', 'Jendo', 'Technology'],
      featured: true,
      
    },
    {
      id: 5,
      title: 'Healthcare Regulatory Compliance Challenges for Medical Technology',
      category: 'biomedical',
      excerpt: '"A patent is key to proving the value of your invention and winning investors\' confidence"',
      subtitle: [
        'Tried and Tested on Patients to Prevent Heart Disease',
      ],
      content: {
        sections: [
          {
            content: "One of the challenges that the company is facing is finding partners in the health ecosystem. The other one is going through the health regulatory process as each country has its regulatory authority. Sri Lanka's regulatory authority is currently reviewing the Jendo system. Once the review is completed, it will allow the commercialization of the device. The company will also apply for the United States Food and Drug Administration (FDA) approval, followed by other countries. Jendo Innovations is also in discussion to establish two business centers outside of Sri Lanka; one in Switzerland, and the other one in Singapore. \"Both countries have a favorable business environment, and growth opportunities,\" according to Keerthi."
          },
          {
            title: "Tried and Tested on Patients to Prevent Heart Disease",
            content: "Jendo's system is not commercialized yet but the device is already being used by hospitals and laboratory chains, and clinically tested on over 800 patients. Under the current business model, the device will be sold at US$2,250 with an annual subscription fee of US$10,000. The test will be charged US$8. According to Keerthi, 'the screening price is affordable in comparison with other established procedures.' The company swiftly proceeded to apply for a patent, first in Sri Lanka (pending), then in the United States (granted: USPTO Patent 10,912,464 B2), and in Japan (Pending), through the WIPO Patent Cooperation Treaty (PCT). According to Keerthi, investors want to make sure the products they invest in is ahead of the competition. \"A patent is key to proving the value of your invention and winning investors' confidence,\" he said."
          }
        ]
      },
      publishDate: 'November 30, 2024',
      readTime: '9 min read',
      image: blog5,
      tags: ['AI', 'Healthcare', 'Cardiology', 'Innovation', 'Jendo'],
      featured: true,

    },
    {
      id: 6,
      title: 'Jendo: AI-Powered Heart Health Monitoring',
      category: 'biomedical',
      excerpt: 'Explore how Jendo\'s AI-powered technology is revolutionizing cardiovascular health monitoring and disease prevention.',
      subtitle: [
        'AI in cardiology – A Steppingstone for Jendo Innovations',
        'Cardiovascular Diseases: The No.1 Killer in the World', 
        'Endothelial Dysfunction, Disease Tattling'
      ],
      content: {
        sections: [
          {
            content: "Keerthi Kodithuwakku is a biomedical engineer, the co-founder and CEO of Jendo Innovations, a bio-medical startup delivering patented healthcare solutions detecting abnormalities in the cardiovascular system and seeking to prevent the risk of cardiovascular diseases. His strong passion for biomedical engineering resisted adverse advice from some senior advisors in the healthcare industry about the lack of prospects in biomedical engineering in Sri Lanka. Along with a like-minded group of engineers, he followed his dream of providing a solution to help solve medical conditions. In their research and entrepreneurial journey, Keerthi said that he found strength and motivation through the strong support of his wife, family, friends, and coworkers in overcoming the obstacles faced when developing Jendo Innovations."
          },
          {
            title: "AI in cardiology – A Steppingstone for Jendo Innovations",
            content: "The key developers of Jendo innovations: Keerthi Kodithuwakku, Isuru Rajakaruna, and Charith Vithanage found the most amount of inspiration towards the end of their tenure in undergraduate studies at the University of Moratuwa. This is when they started working on an artificial intelligence-based device identifying abnormalities in the cardiovascular system to predict the risk of disease. Straight out of university, in 2015, Keerthi co-founded Jendo Innovations with his co-inventors along with Heminda Jayaweera, and Vinod Samarawikrama to commercialize the invention. Keerthi, now 32, said 'another motive behind the formation of a registered company was to create a platform and provide opportunities for upcoming biomedical engineers in Sri Lanka to be a part of the Jendo Innovations journey and make good use of their intellectual resources and improve the overall standard of biomedical engineering in the country.'"
          },
          {
            title: "Cardiovascular Diseases: The No.1 Killer in the World",
            content: "Cardiovascular diseases (CVDs) remain the leading cause of death globally, accounting for an estimated 17.9 million lives each year. This section delves into the alarming statistics surrounding CVDs, the risk factors contributing to their prevalence, and the urgent need for innovative solutions to combat this health crisis."
          },
          {
            title: "Endothelial Dysfunction, Disease Tattling",
            content: "Cardiovascular diseases are silent killers, as they often go unnoticed for 20 to 30 years. The progressive worsening of the patient's conditions goes through multiple stages, from inflammation to the formation of plaque, to the stiffening of walls, ultimately leading to life-threatening blood clots."
          }
        ]
      },
      publishDate: 'November 30, 2024',
      readTime: '9 min read',
      image: blog6,
      tags: ['AI', 'Healthcare', 'Cardiology', 'Innovation', 'Jendo'],
      featured: true,
     
    },
    {
      id: 7,
      title: 'Mind-Controlled Drone and AI for Diabetic Retinopathy Screening',
      category: 'biomedical',
      excerpt: 'Explore innovative medical technologies including mind-controlled drones and AI-powered diabetic retinopathy screening systems.',
      content: {
        sections: [
          {
            content: "In addition to Jendo Innovations, Keerthi has launched several other startups. Under these companies (Effective Solutions, Optha Innovations), other innovative medical devices and systems are being developed. One of them is Myndrone, which allows the user to control a drone by using his/her brain waves. \"This activity relaxes the brain and the user feels calm after a game session\", Keerthi said. Another product soon to be launched is Ophta-AES, a Human Machine Interface (HMI), an AI-powered system to provide early detection of diabetic retinopathy, which is the most common cause of blindness among diabetic patients worldwide. \"Over 45 percent of diabetic patients worldwide develop diabetic retinopathy and most of them could prevent worsening of the disease with early detection \", Keerthi explained"
          }
        ]
      },
      publishDate: 'November 30, 2024',
      readTime: '5 min read',
      image: blog7,
      tags: ['AI', 'Healthcare', 'Innovation', 'Medical Technology', 'Startups'],
      featured: true,
    },
    {
      id: 8,
      title: 'Jendo – Heart Disease Prediction using Machine Learning',
      category: 'biomedical',
      excerpt: 'Discover the revolutionary 15-minute AI-powered heart check system that\'s transforming cardiovascular disease prediction.',
      subtitle: [
        'Jendo – A 15‑Minute AI‑Powered Heart Check',
        'Clinical Use & Business Context', 
        'Innovation & Expansion Strategy'
      ],
      content: {
        sections: [ 
          {
            point1: "Preparation & Setup",
            content: "A sensor is placed on the patient's thumb featuring red and infrared light emitters.",
            link:"WIPO+4WIPO+4nia.gov.lk+4-https://www.wipo.int/en/web/ip-advantage/w/stories/jendo-heart-disease-prediction-using-machine-learning?utm_source=chatgpt.com"
          },
          {
            point2: "5‑Minute Occlusion Test",
            content: "Blood flow is temporarily stopped via a cuff or similar device for five minutes, simulating stress on the endothelium.",
            link:"WIPO-https://www.wipo.int/en/web/ip-advantage/w/stories/jendo-heart-disease-prediction-using-machine-learning?utm_source=chatgpt.com"
          },
           {
            point3: "Release & Data Recording",
            content: "After releasing the cuff, pulse and temperature signals are captured by the sensor, reflecting how the blood vessels respond.",
            link:"WIPO-https://www.wipo.int/en/web/ip-advantage/w/stories/jendo-heart-disease-prediction-using-machine-learning?utm_source=chatgpt.com"
          },
          {
            point4: "Machine‑Learning Analysis",
            content: "These signals feed into a complex ML algorithm that has been trained to recognize patterns linked to endothelial dysfunction, the earliest stage of vascular disease.",
            link:"WIPO-https://www.wipo.int/en/web/ip-advantage/w/stories/jendo-heart-disease-prediction-using-machine-learning?utm_source=chatgpt.com"
          },
          {
            point5: "Risk Prediction Report",
            content: "The system outputs a risk prediction for cardiovascular issues (and potentially diabetes or kidney disease), and generates a report with personalized lifestyle advice.",
          },
          {
            point6: "Recommended Environment",
            content: "Designed to be used under medical supervision, ideally at facilities. Home use is possible if instructions are strictly followed",
            link:"WIPO-https://www.wipo.int/en/web/ip-advantage/w/stories/jendo-heart-disease-prediction-using-machine-learning?utm_source=chatgpt.com"
          },
          {
            title: "Clinical Use & Business Context",
            point1: "Scale of testing: Clinically validated on over 800 patients and currently in use at hospitals and labs, though it's not yet commercialized.",
            link1: 'WIPO-https://www.wipo.int/en/web/ip-advantage/w/stories/jendo-heart-disease-prediction-using-machine-learning?utm_source=chatgpt.com',
            point2: 'Pricing model: The device is planned to retail at US $2,250, with an annual subscription of US $10,000, and a per‑test cost of US $8 — making it a cost‑effective alternative to traditional diagnostics.',
            link2:'WIPO-https://www.wipo.int/en/web/ip-advantage/w/stories/jendo-heart-disease-prediction-using-machine-learning?utm_source=chatgpt.com'
          },
          {
            title: "Innovation & Expansion Strategy",
            point1: "Growth plans: Exploring business setup in Switzerland and Singapore to scale internationally.",
            point2: "Regulatory roadmap: Undergoing review by Sri Lanka's medical regulator, with future plans for FDA approval (USA) and submissions in other jurisdictions"
          }
        ]
      },
      publishDate: 'July 10, 2025',
      readTime: '12 min read',
      image: blog8,
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Innovation', 'Jendo'],
      featured: true,
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Enhanced function to render blog content sections
  const renderBlogContent = (content) => {
    if (!content || !content.sections) return null;

    return content.sections.map((section, index) => (
      <div key={index} className="modal-content-section">
        {section.title && (
          <h2 className="modal-section-title">{section.title}</h2>
        )}
        
        {section.content && (
          <div className="modal-section-content">
            <p>{section.content}</p>
          </div>
        )}

        {section.content1 && (
          <div className="modal-section-content">
            <p>{section.content1}</p>
          </div>
        )}

        {section.content2 && (
          <div className="modal-section-content">
            <p>{section.content2}</p>
          </div>
        )}

        {section.content3 && (
          <div className="modal-section-content">
            <p>{section.content3}</p>
          </div>
        )}

        {/* Handle point-based content for structured lists */}
        {(section.point1 || section.point2 || section.point3 || section.point4 || section.point5 || section.point6) && (
          <div className="modal-points-section">
            {section.point1 && (
              <div className="modal-point-item">
                <h4 className="modal-point-title">{section.point1}</h4>
                <p className="modal-point-content">{section.content}</p>
                {section.link && (
                  <div className="modal-point-link">
                    <span>Source: {section.link.split('-')[0]}</span>
                  </div>
                )}
              </div>
            )}
            {section.point2 && (
              <div className="modal-point-item">
                <h4 className="modal-point-title">{section.point2}</h4>
                <p className="modal-point-content">{section.content}</p>
                {section.link && (
                  <div className="modal-point-link">
                    <span>Source: {section.link.split('-')[0]}</span>
                  </div>
                )}
              </div>
            )}
            {section.point3 && (
              <div className="modal-point-item">
                <h4 className="modal-point-title">{section.point3}</h4>
                <p className="modal-point-content">{section.content}</p>
                {section.link && (
                  <div className="modal-point-link">
                    <span>Source: {section.link.split('-')[0]}</span>
                  </div>
                )}
              </div>
            )}
            {section.point4 && (
              <div className="modal-point-item">
                <h4 className="modal-point-title">{section.point4}</h4>
                <p className="modal-point-content">{section.content}</p>
                {section.link && (
                  <div className="modal-point-link">
                    <span>Source: {section.link.split('-')[0]}</span>
                  </div>
                )}
              </div>
            )}
            {section.point5 && (
              <div className="modal-point-item">
                <h4 className="modal-point-title">{section.point5}</h4>
                <p className="modal-point-content">{section.content}</p>
              </div>
            )}
            {section.point6 && (
              <div className="modal-point-item">
                <h4 className="modal-point-title">{section.point6}</h4>
                <p className="modal-point-content">{section.content}</p>
                {section.link && (
                  <div className="modal-point-link">
                    <span>Source: {section.link.split('-')[0]}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Handle business context sections */}
        {section.title === "Clinical Use & Business Context" && (
          <div className="modal-business-section">
            {section.point1 && (
              <div className="modal-business-item">
                <p>{section.point1}</p>
                {section.link1 && (
                  <div className="modal-point-link">
                    <span>Source: {section.link1.split('-')[0]}</span>
                  </div>
                )}
              </div>
            )}
          {section.point2 && (
            <div className="modal-business-item">
              <p>{section.point2}</p>
              {section.link2 && (
                <div className="modal-point-link">
                  <span>Source: {section.link2.split('-')[0]}</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  ));
};

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero-container">
        <div className="background-elements">
          <div className="grid-pattern"></div>
          <div className="bg-element bg-element-1"></div>
          <div className="bg-element bg-element-2"></div>
          <div className="bg-element bg-element-3"></div>
        </div>

        <div className="hero-content">
          <div className="content-wrapper">
            <div className="content-left">
              <h2 className="hero-title">
                Insights & Innovation in<br /> 
                <span className="title-gradient">Technology</span>
              </h2>
              <p className="hero-description">
                Explore cutting-edge insights, industry trends, and breakthrough innovations 
                in AI, IoT, biomedical technology, and Industry 4.0 from our expert team.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary">
                  <span>Latest Articles</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  <span>Subscribe</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="featured-posts-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Articles</h2>
            <p>Our most popular and impactful content</p>
          </div>
          
          <div className="featured-posts-grid">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <article 
                key={post.id}
                className={`featured-post ${index === 0 ? 'featured-post-large' : ''}`}
                onClick={() => setSelectedPost(post)}
              >
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-overlay">
                    <span className="featured-badge">Featured</span>
                    <button className="read-more-btn">
                      <span>Read Article</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-category">{categories.find(cat => cat.id === post.category)?.name || 'Technology'}</span>
                    <span className="post-date">{formatDate(post.publishDate)}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="author-info">
                      <img src={post.authorImage} alt={post.author} className="author-avatar" />
                      <div className="author-details">
                        <span className="author-name">{post.author}</span>
                        <span className="author-role">{post.authorRole}</span>
                      </div>
                    </div>
                    <div className="post-stats">
                      <span className="read-time">{post.readTime}</span>
                      <span className="post-views">{post.views} views</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Show message if no featured posts */}
          {featuredPosts.length === 0 && (
            <div className="no-featured-posts">
              <p>No featured articles available at the moment.</p>
            </div>
          )}
          
          {/* Debug info - remove in production */}
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '8px', fontSize: '0.875rem', color: '#1e40af' }}>
            <strong>Debug Info:</strong> Found {featuredPosts.length} featured posts out of {blogPosts.length} total posts.
            <br />
            Featured post IDs: {featuredPosts.map(post => post.id).join(', ')}
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-content">
            <div className="search-bar">
              <div className="search-input-wrapper">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" strokeWidth="2"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search articles, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
            
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                  <span className="category-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="section-header">
            <h2>All Articles</h2>
            <p>Discover insights from our technology experts</p>
          </div>
          
          <div className="blog-posts-grid">
            {filteredPosts.map((post, index) => (
              <article 
                key={`${post.id}-${index}`}
                className="blog-post"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-overlay">
                    <button className="read-more-btn">
                      <span>Read More</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-category">{categories.find(cat => cat.id === post.category)?.name || 'Technology'}</span>
                    <span className="post-date">{formatDate(post.publishDate)}</span>
                  </div>
                  
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <div className="post-tags">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated with Latest Insights</h2>
              <p>Get the latest articles on AI, IoT, and Industry 4.0 delivered to your inbox</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">
                <span>Subscribe</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="post-modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="post-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedPost(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2"/>
              </svg>
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <img src={selectedPost.image} alt={selectedPost.title} className="modal-image" />
                <div className="modal-meta">
                  <span className="modal-category">{categories.find(cat => cat.id === selectedPost.category)?.name || 'Technology'}</span>
                  <span className="modal-date">{formatDate(selectedPost.publishDate)}</span>
                </div>
                <h1 className="modal-title">{selectedPost.title}</h1>
                <div className="modal-author">
                  <img src={selectedPost.authorImage} alt={selectedPost.author} className="modal-author-avatar" />
                  <div className="modal-author-info">
                    <span className="modal-author-name">{selectedPost.author}</span>
                    <span className="modal-author-role">{selectedPost.authorRole}</span>
                  </div>
                  <div className="modal-stats">
                    <span>{selectedPost.readTime}</span>
                    <span>•</span>
                    <span>{selectedPost.views} views</span>
                  </div>
                </div>
              </div>
              
              <div className="modal-body">
                <p className="modal-excerpt">{selectedPost.excerpt}</p>
                
                {/* Display subtitle list if available */}
                {selectedPost.subtitle && selectedPost.subtitle.length > 0 && (
                  <div className="modal-subtitle-list">
                    <h4>In This Article:</h4>
                    <ul>
                      {selectedPost.subtitle.map((subtitle, index) => (
                        <li key={index}>{subtitle}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Render the actual blog content */}
                <div className="modal-text">
                  {renderBlogContent(selectedPost.content)}
                </div>
                
                <div className="modal-tags">
                  <h4>Tags:</h4>
                  <div className="tags-list">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <div className="modal-engagement">
                  <button className="engagement-btn">
                    <span>❤️ {selectedPost.likes}</span>
                  </button>
                  <button className="engagement-btn">
                    <span>💬 Comment</span>
                  </button>
                  <button className="engagement-btn">
                    <span>🔗 Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;