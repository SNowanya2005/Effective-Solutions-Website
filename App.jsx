import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './hooks/LoadingScreen';
import './App.css';
import Navigation from './Components/Navigation/navigation';
import Hero from './Components/Hero/hero';
import TrustedBy from './Components/Trustedby/TrustedBy';
import Whatwedo from './Components/What-we-Do/Whatwedo';
import OurClients from './Components/Clients/OurClients';
import FeaturedProject from './Components/Featuredprojects/FeaturedProjects';
import WhyChooseUs from './Components/Whychooseus/WhyChooseUs';
import CallToAction from './Components/CallToAction/CallToAction';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/About/AboutUs';
import Service from './Pages/Services/Services';
// import ProjectsPage from './Pages/Projects/Projects';
import Blog from './Pages/Blogs/Blogs'
import Careers from './Pages/Careers/Career';

import ScrollToTop from './Components/ScrollToTop';


// create page components
const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <Whatwedo />
    <OurClients />
    <FeaturedProject />
    <WhyChooseUs />
    <CallToAction />
   </>
);


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  // Preload critical resources
  useEffect(() => {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Preload images (add your actual image paths)
    const imagesToPreload = [
      '/images/logo.png',
      '/images/hero-bg.jpg',
      '/images/about-bg.jpg',
      // Add more critical images
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      // Cleanup if needed
      if (fontLink.parentNode) {
        fontLink.parentNode.removeChild(fontLink);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
         {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
        <Navigation />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service/>} />
          {/* <Route path="/projects" element={<ProjectsPage />} /> */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<CallToAction />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
