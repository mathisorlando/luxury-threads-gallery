
import { useState, useEffect } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage = ({ src, alt, className = '' }: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    const timeout = setTimeout(() => {
      observer.observe(document.getElementById(`image-${src}`) as Element);
    }, 100);
    
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [src]);
  
  return (
    <div
      id={`image-${src}`}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className={`absolute inset-0 bg-neutral-100 ${
          isLoaded && isVisible ? 'animate-reveal' : ''
        }`}
        style={{
          transform: 'translateX(100%)',
          transformOrigin: 'right',
        }}
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
