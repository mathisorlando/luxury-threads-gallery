
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-10 ${
        isScrolled ? 'bg-mar-burgundy py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <div className={`transition-all duration-500 ${isScrolled ? 'scale-80' : ''}`}>
            <span className="font-playfair text-2xl font-bold tracking-wider">
              MAR<sup className={`text-sm ${isScrolled ? 'text-mar-gold' : 'text-red-600'}`}>2</sup>LEX
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`animated-link text-sm font-medium uppercase tracking-widest ${
              isScrolled ? 'text-white' : 'text-mar-charcoal'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`animated-link text-sm font-medium uppercase tracking-widest ${
              isScrolled ? 'text-white' : 'text-mar-charcoal'
            }`}
          >
            Shop
          </Link>
          <a 
            href="#about" 
            className={`animated-link text-sm font-medium uppercase tracking-widest ${
              isScrolled ? 'text-white' : 'text-mar-charcoal'
            }`}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`animated-link text-sm font-medium uppercase tracking-widest ${
              isScrolled ? 'text-white' : 'text-mar-charcoal'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            className={`smooth-transition ${
              isScrolled ? 'text-white hover:text-mar-gold' : 'text-mar-charcoal hover:text-mar-burgundy'
            }`}
          >
            <Search size={20} />
          </button>
          <button 
            className={`smooth-transition relative ${
              isScrolled ? 'text-white hover:text-mar-gold' : 'text-mar-charcoal hover:text-mar-burgundy'
            }`}
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-mar-burgundy text-white text-xs flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className={`md:hidden z-10 ${
            isScrolled ? 'text-white' : 'text-mar-charcoal'
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-mar-burgundy flex flex-col items-center justify-center space-y-8 transition-all duration-500 z-0 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <Link 
            to="/" 
            className="text-white text-2xl font-playfair hover:text-mar-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="text-white text-2xl font-playfair hover:text-mar-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <a 
            href="#about" 
            className="text-white text-2xl font-playfair hover:text-mar-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-white text-2xl font-playfair hover:text-mar-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <div className="flex items-center space-x-6 mt-8">
            <button className="text-white hover:text-mar-gold transition-colors">
              <Search size={24} />
            </button>
            <button className="text-white hover:text-mar-gold transition-colors relative">
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-mar-gold text-mar-burgundy text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
