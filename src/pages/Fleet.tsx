import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Shield, Clock, MapPin } from 'lucide-react';

export default function Fleet() {
  const categories = [
    {
      title: 'Luxury Sedans',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
      desc: 'Experience ultimate comfort and style with our premium sedans. Perfect for business meetings and special events.',
    },
    {
      title: 'SUVs & Jeeps',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
      desc: 'Spacious and powerful, our SUVs are ideal for family trips and rugged terrains.',
    },
    {
      title: 'Executive Buses',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
      desc: 'Comfortable group travel solutions. Perfect for corporate retreats and team outings.',
    },
    {
      title: 'Standard Cars',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      desc: 'Reliable and fuel-efficient vehicles for everyday use and city commuting.',
    }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/503952196_2583268282009379_2046548251696349489_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeF8pAC71a1-TEz2Y6QI49GoS6ccaKdnVeNLpxxop2dV45foZ-btAKOwDUEML7LMbxHeF7LS5gPodlqHTgfqUSrE&_nc_ohc=-I3DjrdD5NIQ7kNvwGlSXfp&_nc_oc=Adlbq7wu3qaMs4TinQRvPsK-gjFKB_EVuUBxAwIdpdqimMq808gLkmUXDOhS0cxlj3A&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=lKp9CEMSfWPv72Ou9d8slQ&oh=00_AfvfNjniFz5ou9tpaU-St4y0D2MXzPLORCnXsL43Mh5uKQ&oe=699E6D6E" 
            alt="Our Fleet" 
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
            Our Fleet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Choose from our wide range of clean, well-maintained, and reliable vehicles.
          </motion.p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-white dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden h-64">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="p-8 relative">
                  <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-3">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{category.desc}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-secondary" />
                      <span>Clean</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield size={16} className="text-secondary" />
                      <span>Reliable</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-secondary" />
                      <span>Well-Maintained</span>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-block w-full text-center py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary hover:text-primary transition-colors duration-300"
                  >
                    Check Availability
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Need a specific vehicle? Contact us to discuss your requirements.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us for Reservations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
