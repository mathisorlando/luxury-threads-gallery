
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-playfair text-2xl font-bold tracking-wider">
                MAR<sup className="text-red-600 text-sm">2</sup>LEX
              </span>
            </div>
            <p className="text-mar-charcoal/70 mb-4">
              Premium second-hand designer clothing for the discerning woman, located in Hamburg's picturesque Blankenese district since 1996.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-mar-cream flex items-center justify-center text-mar-burgundy hover:bg-mar-burgundy hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-mar-cream flex items-center justify-center text-mar-burgundy hover:bg-mar-burgundy hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-mar-charcoal/70 hover:text-mar-burgundy transition-colors animated-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-playfair text-lg mb-4 font-medium">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'Impressum'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-mar-charcoal/70 hover:text-mar-burgundy transition-colors animated-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg mb-4 font-medium">Contact</h3>
            <address className="not-italic text-mar-charcoal/70">
              <p>Blankeneser Hauptstraße 151</p>
              <p>Hamburg, Germany 22587</p>
              <p className="mt-2">+49 (0)40 86663747</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-mar-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mar-charcoal/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mar2Lex. All rights reserved.
          </p>
          <div className="text-mar-charcoal/60 text-sm">
            Designed with ♥ for luxury fashion
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-mar-burgundy text-white flex items-center justify-center shadow-lg transition-all ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
