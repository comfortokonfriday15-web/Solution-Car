import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Shield, Clock, MapPin } from 'lucide-react';
import Reviews from '../components/Reviews';
import CelebrityTestimonials from '../components/CelebrityTestimonials';
import VideoPlaceholder from '../components/VideoPlaceholder';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ x: 0, scale: 1.1 }}
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMHRKqhhcnRRhYdnnaBq1stVHFKxLSrAijow1BLDhBxCIx_-yB2bByCTTHbR5CrDPUlIIhtqtLTGeUMTJR4Vz3iTZkUdc55EHjJEyQrZ-akVIMxDRSauRSHm5M427zZabjaB4=w408-h306-k-no" 
            alt="Luxury Car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            The Solution to Your <span className="text-secondary">Logistics Problem</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Premium car rental services in Uyo. Experience reliability, comfort, and professionalism with our well-maintained fleet.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/fleet" 
              className="btn-primary"
            >
              Browse Our Fleet
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-yellow-400"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={24} />
            ))}
            <span className="text-white ml-2 font-medium text-lg">4.9 (95 Reviews)</span>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-transparent reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Chauffeur Driven', desc: 'Professional drivers for a stress-free journey.', icon: Shield },
              { title: 'Self Drive', desc: 'Freedom to explore Uyo at your own pace.', icon: MapPin },
              { title: 'Corporate Rentals', desc: 'Reliable logistics for business needs.', icon: Clock },
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black/20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-scale border border-white/10">
              <img 
                src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/548295908_2678880169114856_2471383794746981099_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeERZflFjJeS71eXxIF9cxWxbJ9ejX0vQXtsn16NfS9Be66Afk8d-dyphn9rxl1mGhWk9y-lGqsFxt7SM2BZrH03&_nc_ohc=14oGF3EJXDoQ7kNvwGB0Eaa&_nc_oc=Adna9NjGiQIH9RsiGHAs7vqPkQH0frj6cfzFE_vW6YLNoE_40yX5J78Z_vo97qAIQRU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=8MmRn_J1UFERfNJaISfebw&oh=00_Afv6666HXfgvgHyjzNCZBvL1dX5d0K2kIzqhoLXmOWzYnw&oe=699E7922" 
                alt="Why Choose Us" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Why Choose Solution Car Rental?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We are committed to providing the best car rental experience in Akwa Ibom. Our reputation is built on trust, quality, and exceptional customer service.
              </p>
              
              <div className="space-y-6">
                {[
                  '24/7 Customer Support & Availability',
                  'Clean, Well-Maintained Vehicles',
                  'Professional & Friendly Chauffeurs',
                  'Transparent Booking Process'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="inline-block mt-8 text-secondary font-semibold hover:text-white transition-colors hover:underline underline-offset-4"
              >
                Learn More About Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Testimonials */}
      <CelebrityTestimonials />

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
