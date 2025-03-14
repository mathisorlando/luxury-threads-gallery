
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="py-16 px-6 bg-mar-burgundy text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-3">Join Our Mailing List</h2>
        <p className="text-white/80 mb-8">
          Subscribe to receive updates on new arrivals, exclusive events, and styling tips.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder:text-white/60 flex-grow"
            disabled={isSubmitting || isSubmitted}
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="whitespace-nowrap px-6 py-3 rounded-md bg-white text-mar-burgundy font-medium hover:bg-mar-gold transition-colors disabled:opacity-70"
          >
            {isSubmitting ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
        
        {isSubmitted && (
          <p className="mt-4 text-mar-gold text-sm">
            Thank you for subscribing! We'll keep you updated on our latest arrivals.
          </p>
        )}
        
        <p className="text-white/60 text-xs mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Mar2Lex.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
