
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';

const Shop = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <span className="text-mar-burgundy uppercase tracking-widest text-sm font-medium">
              Curated Selection
            </span>
            <h1 className="text-3xl md:text-5xl font-playfair font-semibold mt-2 mb-4">
              Designer Collection
            </h1>
            <p className="max-w-2xl mx-auto text-mar-charcoal/80">
              Discover our handpicked selection of second-hand designer pieces, each item carefully 
              curated for quality and style. From timeless classics to contemporary statements.
            </p>
          </div>

          {/* Mobile Filters Toggle */}
          <div className="md:hidden flex justify-between items-center mb-6">
            <Button
              variant="outline"
              className="border-mar-burgundy text-mar-burgundy hover:bg-mar-burgundy hover:text-white"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              <Filter size={16} className="mr-2" />
              Filters
            </Button>
            <Button variant="ghost" className="text-mar-charcoal hover:text-mar-burgundy">
              <Search size={18} />
            </Button>
          </div>

          {/* Shop Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop sidebar / Mobile collapsible */}
            <div 
              className={`animate-on-scroll md:w-64 md:block transition-all ${
                isFiltersOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0 overflow-hidden'
              } md:max-h-none md:opacity-100`}
            >
              <ProductFilters />
            </div>

            {/* Products Grid */}
            <div className="animate-on-scroll flex-1">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
