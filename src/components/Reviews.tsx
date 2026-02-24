import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Imaobong Essien',
      date: '8 months ago',
      text: 'Solution car rental services is the best in Akwa Ibom state. Have had experiences with several brands in Uyo but since ever I got in contact with this amazing brand have had solution to my logistics problem as their name implies.',
      rating: 5
    },
    {
      name: 'Utibeabasi Willie',
      date: '5 months ago',
      text: 'I had a great experience with Solution Car Rental Services! Their cars are clean, well-maintained, and reliable. The booking process was smooth and stress-free, and their customer service was excellent, professional, friendly, and always ready to help.',
      rating: 5
    },
    {
      name: 'Glory Okon',
      date: 'a year ago',
      text: 'Excellent Car Rental Experience! I recently rented a car from Solution car rental company, and I couldn’t be more satisfied with the experience. From start to finish, everything was seamless.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif font-bold text-white">Customer Reviews</h2>
          <div className="flex items-center gap-2 bg-yellow-900/30 px-4 py-2 rounded-full">
            <Star className="text-yellow-500 fill-current" size={20} />
            <span className="font-bold text-white">4.9</span>
            <span className="text-sm text-gray-400">(95 Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:bg-white/10 border border-white/10 relative transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-gray-700">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017V5H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.91297 16 7.01697 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.01697C5.46497 8 5.01697 8.448 5.01697 9V11C5.01697 11.552 4.56897 12 4.01697 12H3.01697V5H13.017V15C13.017 18.314 10.331 21 7.01697 21H5.01697Z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic relative z-10 line-clamp-4 hover:line-clamp-none transition-all duration-300">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
