import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star, Shield } from 'lucide-react';
import VideoPlaceholder from '../components/VideoPlaceholder';

export default function About() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/530678535_2643779405958266_3089217644365474651_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeHAodjq2yD_q5dOQ0MiFlSKXVcZGK5ZL0VdVxkYrlkvRQ-eie1kjJQBfPZi9s4sRB1plZPSsBpUEUhcpJIoD2vW&_nc_ohc=fsj7hBomM60Q7kNvwGdSKP4&_nc_oc=Adnk9WxikYOSFoQyMEOEq-04yWPrQR9P5NQFRJ2EAJYVt0aiJKsuMfCCkQg1tihIbxA&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=mSNjqaTCvW7i8Q2UVDgAzQ&oh=00_Afsqv8D5ElRChK99oV07QJRJoYAqqNUaUSiMSu2m3WUuiA&oe=699E6314" 
            alt="About Solution Car Rental" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Providing premium car rental solutions in Uyo since inception.
          </motion.p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Solution Car Rental Services was founded with a singular mission: to be the solution to your logistics problems in Akwa Ibom. We recognized a gap in the market for reliable, clean, and professional car rental services, and we set out to fill it.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Over the years, we have built a reputation for excellence, earning a 4.9-star rating from over 95 satisfied customers. Whether you need a chauffeur-driven luxury car for a special occasion or a reliable vehicle for business travel, we have the perfect solution for you.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-secondary mb-2">95+</h3>
                  <p className="text-sm text-gray-400">5-Star Reviews</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-secondary mb-2">24/7</h3>
                  <p className="text-sm text-gray-400">Availability</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3" />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-black w-[267px] h-[476px]">
                <VideoPlaceholder title="Our Story" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Reliability', desc: 'We are always there when you need us, 24/7.', icon: Clock },
              { title: 'Cleanliness', desc: 'Our cars are meticulously cleaned and maintained.', icon: Star },
              { title: 'Professionalism', desc: 'Our chauffeurs are trained, friendly, and professional.', icon: Shield },
            ].map((value, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300 border border-white/10 text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg text-white">Address</h4>
                    <p className="text-gray-300">Unit F, De-Castle Luxury Home, Plot 25, Ewet Housing Estate, Uyo, Akwa Ibom</p>
                    <p className="text-sm text-gray-400 mt-1">Plus Code: 2WCW+5M Uyo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg text-white">Phone</h4>
                    <p className="text-gray-300">0808 441 0493</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg text-white">Hours</h4>
                    <p className="text-gray-300">Open 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.269668587636!2d7.9356!3d5.0377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d57a6a6a6a6a7%3A0x6a6a6a6a6a6a6a6a!2sEwet%20Housing%20Estate%2C%20Uyo!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Solution Car Rental Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
