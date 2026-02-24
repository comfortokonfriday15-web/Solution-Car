import { motion } from 'motion/react';
import VideoPlaceholder from './VideoPlaceholder';

export default function CelebrityTestimonials() {
  const celebrities = [
    {
      name: 'Asherkine',
      title: 'Popular Philanthropist',
    },
    {
      name: 'Veekee James & Femi Atere',
      title: 'Fashion Icon & Celebrity Personality',
    },
    {
      name: 'William Troost-Ekong',
      title: 'Former Captain, Super Eagles',
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Here’s what celebrities are saying about the brand
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-300">
            Trusted by Nigeria’s finest – watch their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {celebrities.map((celebrity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl hover:bg-white/10 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-[500px] bg-gray-800">
                <VideoPlaceholder title={celebrity.name} />
              </div>
              
              <div className="p-6 text-center mt-auto">
                <h3 className="text-xl font-bold text-white mb-1">{celebrity.name}</h3>
                <p className="text-sm font-medium text-secondary uppercase tracking-wide">{celebrity.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
