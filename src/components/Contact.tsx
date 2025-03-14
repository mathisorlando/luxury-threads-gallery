
import { useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-mar-burgundy uppercase tracking-widest text-sm font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-2">Visit Our Boutique</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="rounded-md overflow-hidden h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.2039411606135!2d9.804622376991656!3d53.56341437246714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1857f2a2b0a61%3A0xb64cdc5a4a7fa72d!2sBlankeneser%20Hauptstra%C3%9Fe%20151%2C%2022587%20Hamburg%2C%20Germany!5e0!3m2!1sen!2suk!4v1705326285584!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mar2Lex Location"
              ></iframe>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-200">
            <div className="p-8 rounded-md bg-mar-cream h-full">
              <h3 className="text-2xl font-playfair mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-white p-2 rounded-full">
                    <MapPin className="text-mar-burgundy" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-mar-charcoal/80">
                      Blankeneser Hauptstraße 151<br />
                      Hamburg, Germany 22587
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-white p-2 rounded-full">
                    <Phone className="text-mar-burgundy" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-mar-charcoal/80">
                      +49 (0)40 86663747
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-white p-2 rounded-full">
                    <Instagram className="text-mar-burgundy" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Social Media</h4>
                    <p className="text-mar-charcoal/80">
                      Follow us on Instagram<br />
                      Send inquiries via direct message
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium mb-3">Opening Hours</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-mar-charcoal/80">10:00 - 18:00</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-mar-charcoal/80">10:00 - 16:00</p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-mar-charcoal/80">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
