
import { useEffect } from 'react';
import AnimatedImage from './AnimatedImage';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="py-24 px-6 bg-mar-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll order-2 md:order-1">
            <span className="text-mar-burgundy uppercase tracking-widest text-sm font-medium">Our Heritage</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-2 mb-6">27 Years of Elegance</h2>
            
            <p className="text-mar-charcoal/80 mb-6 leading-relaxed">
              Since 1996, Mar2Lex has been a cornerstone of luxury fashion in Hamburg's picturesque Blankenese district. Founded by Alexandra Dobler with a passion for timeless design and sustainable fashion, our boutique offers carefully curated second-hand designer pieces that stand the test of time.
            </p>
            
            <p className="text-mar-charcoal/80 mb-8 leading-relaxed">
              Each item in our collection tells a story of craftsmanship and elegance. Located in the charming Treppenviertel, our boutique combines the exclusivity of high fashion with the warm, personal service of a neighborhood gem.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="rounded-md border border-mar-burgundy/20 px-4 py-2">
                <span className="block text-mar-burgundy font-semibold text-xl mb-1">27+</span>
                <span className="block text-xs uppercase tracking-wider text-mar-charcoal/70">Years of Experience</span>
              </div>
              
              <div className="rounded-md border border-mar-burgundy/20 px-4 py-2">
                <span className="block text-mar-burgundy font-semibold text-xl mb-1">500+</span>
                <span className="block text-xs uppercase tracking-wider text-mar-charcoal/70">Designer Brands</span>
              </div>
              
              <div className="rounded-md border border-mar-burgundy/20 px-4 py-2">
                <span className="block text-mar-burgundy font-semibold text-xl mb-1">5,000+</span>
                <span className="block text-xs uppercase tracking-wider text-mar-charcoal/70">Happy Customers</span>
              </div>
            </div>
            
            <button className="elegant-button">
              Our Story
            </button>
          </div>
          
          <div className="animate-on-scroll delay-200 relative order-1 md:order-2">
            <div className="relative z-10 rounded-md overflow-hidden shadow-xl">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1623094435972-cc3fb15e8b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" 
                alt="Mar2Lex Boutique"
                className="aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-mar-burgundy rounded-md z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
