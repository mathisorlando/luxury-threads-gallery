
import { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    
    if (title) title.classList.add('animate-fade-in');
    
    const subtitleTimer = setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    const buttonTimer = setTimeout(() => {
      if (button) button.classList.add('animate-fade-in');
    }, 600);
    
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);
  
  const scrollToNext = () => {
    const nextSection = document.getElementById('featured');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mar-burgundy/10 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3286&q=80" 
          alt="Luxury fashion" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div ref={titleRef} className="opacity-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold text-white mb-6 leading-tight">
            Discover <span className="text-mar-gold">Timeless</span> Luxury
          </h1>
        </div>
        
        <div ref={subtitleRef} className="opacity-0">
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium designer second-hand fashion in the heart of Hamburg Blankenese since 1996.
          </p>
        </div>
        
        <div ref={buttonRef} className="opacity-0">
          <button className="elegant-button">
            Explore Collection
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll</span>
          <ArrowDownIcon className="animate-bounce" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
