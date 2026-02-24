import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Shield, Clock, MapPin } from 'lucide-react';

export default function Fleet() {
  const categories = [
    {
      title: 'Luxury SUVs',
      image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/600223357_2761241217545417_3725798638655960251_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEJe3fW5lhfvhHUcUbgn0mkpB5AfeXCN62kHkB95cI3rVZifbzEPx9lB7M9FL81B1mNWiL-FPXNl7rA6SSUW71O&_nc_ohc=Q-fSYlHKqBYQ7kNvwH25VYr&_nc_oc=AdkThpp5LPf5Cz3-qORqn6vfUCKqY_WkRuOl8jnKernPLpoPbk1eYdlrGPoUkHJ--B0&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=hCfuKBF1npX9Tl7uoOj53w&oh=00_Afvhif83ctUyGRJRQQji43udlnNqL6BDz6ufi3-_R7cs5A&oe=699E70CD',
      desc: 'Experience ultimate comfort and style with our premium SUVs. Perfect for business meetings and special events.',
    },
    {
      title: 'SUVs & Jeeps',
      image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/574382818_2725742807761925_6493642576495801610_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH8tvn-89JuV7w6XuRs6YgAd85o9jJjAbN3zmj2MmMBs9St9qD_owibAbIOkV5A-87BRYQSjj2kW-lLvgbTGWaw&_nc_ohc=LB0xflOEH0YQ7kNvwE0eKS1&_nc_oc=AdlB77OqTCxbLwHIe0Hn5dyXkFLL4T7DMImBhlUSNdhsdlvhZObEfN2RITOkzf8Ect8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=KcI1vOiygezgplxJwmVbiA&oh=00_Afv56DWHpvoz-LA0Xtx1e9zdnB6d7bfXFiCAEFKFr5dsMg&oe=699E596C',
      desc: 'Spacious and powerful, our SUVs are ideal for family trips and rugged terrains.',
    },
    {
      title: 'Executive Buses',
      image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/601364048_2765961010406771_4326772552775136116_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH7Px6X-4ND62X9zpSxdl_0GYV7bXdThkoZhXttd1OGSmacAFt4Z9TPra-bGEMmUNvcMaglxQYfKz0AcMhjjxVC&_nc_ohc=go89SSS-Bw8Q7kNvwE7JEGk&_nc_oc=Adk5eg8eXQH7OE_Erx6ViUlWIabMKfC7nhedxSNiozfntfz81uvS_b2yAeMR3rcosYU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=ZqzyRkX8P9kcwP03nZSsJQ&oh=00_AfslnQx0-kwvT-12-dEby582ZZoNV7MQBIjmOOXbhNto7Q&oe=699E6280',
      desc: 'Comfortable group travel solutions. Perfect for corporate retreats and team outings.',
    },
    {
      title: 'Standard Cars',
      image: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/586452627_2741111709558368_2709808711498773845_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF9vqqdmxnp1QyX5eTHXBjuutk9IU7VQxS62T0hTtVDFMiSXqvHlelj643WKGks62yx5ChJtbho-MDAMlWEYT_c&_nc_ohc=r-6b4I5UJrMQ7kNvwFTynrX&_nc_oc=AdmlFW5JuNaDziu6OqSAooxRn2OzgP-OMunRBzADQeq_o7M01J7KAxGkF7xpzi73XZw&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=phsWtCeuDlAiN1w6sICFJw&oh=00_AftnmRTXG138luUSls7pAeD-lzyOSaPD942GXnehckzgpw&oe=699E7538',
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
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10"
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
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.desc}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
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
                    className="inline-block w-full text-center py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Check Availability
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-8">
              Need a specific vehicle? Contact us to discuss your requirements.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Contact Us for Reservations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
