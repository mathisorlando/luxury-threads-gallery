
import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import AnimatedImage from './AnimatedImage';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

// Sample product data
const products = [
  {
    id: 1,
    name: 'Chanel Classic Tweed Jacket',
    brand: 'Chanel',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    size: '38',
    category: 'Outerwear'
  },
  {
    id: 2,
    name: 'Louis Vuitton Neverfull MM',
    brand: 'Louis Vuitton',
    price: 890,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80',
    size: 'One Size',
    category: 'Bags'
  },
  {
    id: 3,
    name: 'Dior Silk Midi Dress',
    brand: 'Dior',
    price: 780,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80',
    size: 'S',
    category: 'Dresses'
  },
  {
    id: 4,
    name: 'Hermès Leather Belt',
    brand: 'Hermès',
    price: 450,
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    size: '85',
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'Gucci Printed Silk Blouse',
    brand: 'Gucci',
    price: 590,
    image: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    size: 'M',
    category: 'Tops'
  },
  {
    id: 6,
    name: 'Prada Saffiano Leather Pumps',
    brand: 'Prada',
    price: 670,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    size: '39',
    category: 'Shoes'
  },
  {
    id: 7,
    name: 'Burberry Trench Coat',
    brand: 'Burberry',
    price: 950,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    size: 'L',
    category: 'Outerwear'
  },
  {
    id: 8,
    name: 'Balenciaga Triple S Sneakers',
    brand: 'Balenciaga',
    price: 550,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    size: '40',
    category: 'Shoes'
  }
];

const ProductGrid = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { toast } = useToast();

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );

    const product = products.find(p => p.id === productId);
    if (product) {
      toast({
        title: wishlist.includes(productId) ? "Removed from wishlist" : "Added to wishlist",
        description: `${product.name} has been ${wishlist.includes(productId) ? "removed from" : "added to"} your wishlist.`,
        duration: 3000,
      });
    }
  };

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group relative bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[3/4]">
              <AnimatedImage 
                src={product.image} 
                alt={product.name}
                className="aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
              />
              
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm transition-all ${
                  wishlist.includes(product.id) 
                    ? 'text-red-500' 
                    : 'text-mar-charcoal hover:text-red-500'
                }`}
              >
                <Heart 
                  size={18} 
                  fill={wishlist.includes(product.id) ? "currentColor" : "none"} 
                />
              </button>
            </div>
            
            <div className="p-4">
              <div className="text-xs font-medium uppercase tracking-wider text-mar-burgundy mb-1">
                {product.brand}
              </div>
              <h3 className="font-playfair text-lg font-medium mb-1">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <div className="text-mar-charcoal font-medium">
                  €{product.price}
                </div>
                <div className="text-sm text-mar-charcoal/70">
                  Size: {product.size}
                </div>
              </div>
              
              <div className="mt-4">
                <Button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-mar-burgundy hover:bg-mar-burgundy/90 text-white" 
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination placeholder - you can implement actual pagination later */}
      <div className="flex justify-center mt-12 space-x-2">
        <Button variant="outline" className="h-8 w-8 p-0">1</Button>
        <Button variant="outline" className="h-8 w-8 p-0 text-mar-charcoal">2</Button>
        <Button variant="outline" className="h-8 w-8 p-0 text-mar-charcoal">3</Button>
        <Button variant="outline" className="h-8 w-8 p-0 text-mar-charcoal">→</Button>
      </div>
    </div>
  );
};

export default ProductGrid;
