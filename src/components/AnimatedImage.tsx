
import { useState, useEffect, useRef } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage = ({ src, alt, className = '' }: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    
    // Improved intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before image is in view
      }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [src]);
  
  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className={`absolute inset-0 bg-neutral-100 transition-transform duration-1000 ease-in-out ${
          isLoaded && isVisible ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded && isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default AnimatedImage;
