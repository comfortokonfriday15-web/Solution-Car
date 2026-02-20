import { motion } from 'motion/react';
import { Plane, Calendar, MapPin, Truck, Car, Clock, CheckCircle, Shield, Camera } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Airport Transfer',
      icon: Plane,
      desc: 'Seamless pickups and drop-offs for your travel convenience.'
    },
    {
      title: 'Full Day Rental',
      icon: Calendar,
      desc: 'Enjoy the freedom of having a car at your disposal all day.'
    },
    {
      title: 'Event logistics',
      icon: Car,
      desc: 'Reliable transportation solutions for weddings, parties, and corporate events.'
    },
    {
      title: 'Inter & Intra-state Logistics',
      icon: Truck,
      desc: 'Safe and efficient travel across state lines or within the city.'
    }
  ];

  const features = [
    { text: 'Wide Vehicle Selection', icon: Car },
    { text: '24/7 Car Rental experience', icon: Clock },
    { text: 'Easy Booking Process', icon: CheckCircle },
    { text: 'Professional Chauffeur Services', icon: Shield },
    { text: 'Well-Maintained & Sanitized Vehicle', icon: CheckCircle }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Header Section */}
      <section className="bg-primary py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/502593348_2578997675769773_1718777527733851440_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeGm3ugXyWtsFA07okjvmTeB3DNLPu8us8vcM0s-7y6zyyXyAoTLuouQ_k8Bn4jHQ2aJDUFwwdWH6kt_FdoEcDL6&_nc_ohc=RsOMrydrr_AQ7kNvwE9iMPh&_nc_oc=Adn7Hzswril4pBLBDWFvrsPd5HfFmjg-zcOETIPZEjqced36zERkeSZNGGh8VR9qUSo&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=PQkLsOWloehjHfsmRySeUw&oh=00_AfspU5XVUmFE2aFGL79YD8-LwCQ_Kq2utLBqTlyVk54mZw&oe=699E78A1" 
            alt="Solution Car Rental Logo" 
            className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-secondary object-cover"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-2"
          >
            SOLUTION CAR RENTAL SERVICES
          </motion.h1>
          <p className="text-secondary font-medium tracking-widest uppercase text-sm">Our Services</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white dark:bg-bg-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border-2 border-secondary/20 rounded-2xl bg-gray-50 dark:bg-gray-800/50"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed font-serif">
              "We believe that every journey should be smooth, comfortable, and worry-free, that’s why we’ve built our Car rental for quick trips to big adventures, we’ve got the keys to your journey. Simple, reliable, and stress-free."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary dark:text-white text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-bg-dark p-8 rounded-xl shadow-md border-l-4 border-secondary flex items-start gap-6"
              >
                <div className="bg-secondary/10 p-4 rounded-full text-secondary flex-shrink-0">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary dark:text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-secondary mb-4">
                  <feature.icon size={40} />
                </div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience the Ride Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
              Experience the Ride
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See our fleet in action – luxury, comfort, and style combined
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { url: 'https://www.instagram.com/reel/DOptfz-jKyb/embed', title: 'Luxury in Motion' },
              { url: 'https://www.instagram.com/reel/DQYL9hqiFiq/embed', title: 'Executive Travel' },
              { url: 'https://www.instagram.com/reel/DNahC_sMKGS/embed', title: 'Premium Comfort' }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-bg-dark rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                <div className="relative w-full h-[500px] bg-gray-200 dark:bg-gray-800">
                  <iframe 
                    src={video.url} 
                    className="w-full h-full object-cover"
                    frameBorder="0" 
                    scrolling="no" 
                    allowFullScreen
                    title={`${video.title} Video`}
                  />
                </div>
                
                <div className="p-6 text-center mt-auto">
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-1">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Strip */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          
          <a 
            href="https://instagram.com/solution_car_rentals_services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xl font-bold hover:text-secondary transition-colors"
          >
            <Camera size={28} />
            <span>@solution_car_rentals_services</span>
          </a>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-secondary" />
              <span>Plot 25 Unit F, Ewet Housing Estate, Uyo, Aks.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-secondary p-1 rounded-full text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">0808 441 0493</span>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-white transition-colors"
          >
            Book Your Ride Today
          </motion.button>

          {/* Chatbot Placeholder */}
          <div id="chatbot-placeholder"></div>
        </div>
      </section>
    </div>
  );
}
