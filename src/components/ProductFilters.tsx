
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Common luxury brands
const brands = [
  "Chanel", "Louis Vuitton", "Dior", "Gucci", "Hermès", 
  "Prada", "Balenciaga", "Valentino", "Burberry", "Fendi"
];

// Clothing categories
const categories = [
  "Dresses", "Tops", "Bottoms", "Outerwear", 
  "Bags", "Shoes", "Accessories", "Jewelry"
];

// Standard European sizes
const sizes = [
  "XS", "S", "M", "L", "XL", "34", "36", "38", 
  "40", "42", "44", "46"
];

type FilterSectionProps = {
  title: string;
  items: string[];
  selectedItems: string[];
  onChange: (item: string) => void;
};

const FilterSection = ({ title, items, selectedItems, onChange }: FilterSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-6">
      <button 
        className="flex justify-between items-center w-full font-medium text-left text-mar-charcoal mb-3"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isExpanded && (
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox 
                id={`${title}-${item}`} 
                checked={selectedItems.includes(item)}
                onCheckedChange={() => onChange(item)}
                className="border-mar-burgundy data-[state=checked]:bg-mar-burgundy data-[state=checked]:border-mar-burgundy"
              />
              <Label 
                htmlFor={`${title}-${item}`}
                className="text-sm text-mar-charcoal cursor-pointer"
              >
                {item}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductFilters = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedSizes([]);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg text-mar-charcoal">Filters</h2>
        {(selectedBrands.length > 0 || selectedCategories.length > 0 || selectedSizes.length > 0) && (
          <button 
            className="text-sm text-mar-burgundy hover:underline"
            onClick={clearAllFilters}
          >
            Clear all
          </button>
        )}
      </div>
      
      <Separator className="bg-gray-200 mb-6" />
      
      <FilterSection 
        title="Brand" 
        items={brands} 
        selectedItems={selectedBrands} 
        onChange={toggleBrand} 
      />
      
      <Separator className="bg-gray-200 mb-6" />
      
      <FilterSection 
        title="Category" 
        items={categories} 
        selectedItems={selectedCategories} 
        onChange={toggleCategory} 
      />
      
      <Separator className="bg-gray-200 mb-6" />
      
      <FilterSection 
        title="Size" 
        items={sizes} 
        selectedItems={selectedSizes} 
        onChange={toggleSize} 
      />
    </div>
  );
};

export default ProductFilters;
