
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import About from '../components/About';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Get all elements that should be animated on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen bg-mar-cream">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
