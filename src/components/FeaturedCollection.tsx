
import { useEffect, useRef } from 'react';
import AnimatedImage from './AnimatedImage';

const collections = [
  {
    id: 1,
    title: "Summer Essentials",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80",
    subtitle: "Chanel, Dior, Louis Vuitton"
  },
  {
    id: 2,
    title: "Luxury Bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
    subtitle: "Hermès, Gucci, Prada"
  },
  {
    id: 3,
    title: "Elegant Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80",
    subtitle: "Valentino, Givenchy, Balmain"
  }
];

const FeaturedCollection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="featured" className="py-24 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-mar-burgundy uppercase tracking-widest text-sm font-medium">Curated Selection</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-2">Featured Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`animate-on-scroll delay-${index * 200} group relative overflow-hidden rounded-md`}
            >
              <AnimatedImage 
                src={collection.image} 
                alt={collection.title}
                className="aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl md:text-2xl font-playfair mb-2">{collection.title}</h3>
                <p className="text-white/80 text-sm">{collection.subtitle}</p>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="elegant-outline-button bg-black/30 border-white text-white hover:bg-white hover:text-mar-charcoal hover:border-white">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-on-scroll">
          <button className="elegant-outline-button">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
