import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star, Mail, CheckCircle } from 'lucide-react';
import Reviews from '../components/Reviews';
import { addBooking } from '../services/db';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    contactMethod: 'either'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, name, value, type } = e.target;
    // Handle radio buttons which use 'name' attribute, others use 'id'
    const fieldName = type === 'radio' ? name : id;
    
    // For radio buttons, the name is 'contact-method' but we want to store it as 'contactMethod'
    if (fieldName === 'contact-method') {
      setFormData(prev => ({ ...prev, contactMethod: value }));
    } else {
      setFormData(prev => ({ ...prev, [fieldName]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await addBooking(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        contactMethod: 'either'
      });
    } catch (error) {
      console.error('Error saving booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/576286883_2725742101095329_5303444012890527428_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeFomX59wZMPrEMlLe3h9UHUg3tXLwTngW6De1cvBOeBbkeoFxBqkY9kwcMlliMg_wNkti64FHnWzCEvZU-OLPcz&_nc_ohc=4GnJYVQP-egQ7kNvwGVWtBi&_nc_oc=Adlemj0zfzLrcmaO4oG07q-aEjrhU-jxXme3vkBjfjmOcKn4Hr9kdB47bnmsvpVEkXI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=D0Y5ig-qRyGVV9VB-KZsoQ&oh=00_AfvUbox6jjg5VCwosmiTtmoh1ORb8WrXa4qjfK6vRclfKg&oe=699E5698" 
            alt="Contact Us" 
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            We are here to help you with your car rental needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Booking Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-2">Ready to hit the road? Let's talk.</h2>
                <div className="flex items-center gap-2 text-secondary font-medium">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">4.9 (95 reviews) – Akwa Ibom's most trusted car rental</span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your full name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email address</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone number (optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" 
                        placeholder="+234..." 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">What do you need?</label>
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="full-day">Full Day Rental</option>
                      <option value="event">Event Logistics</option>
                      <option value="inter-state">Inter/Intra-state Logistics</option>
                      <option value="chauffeur">Chauffeur Service</option>
                      <option value="not-sure">Not sure – I'll book a Call</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tell us about your trip or request</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" 
                      placeholder="e.g., I need a well-maintained SUV for 3 days next week, with a professional chauffeur. We're 4 people."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">Include dates, vehicle type, or special requests</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">How should we reach you?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="contact-method" 
                          value="email" 
                          checked={formData.contactMethod === 'email'}
                          onChange={handleChange}
                          className="text-secondary focus:ring-secondary" 
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="contact-method" 
                          value="phone" 
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleChange}
                          className="text-secondary focus:ring-secondary" 
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Phone</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="contact-method" 
                          value="either" 
                          checked={formData.contactMethod === 'either'}
                          onChange={handleChange}
                          className="text-secondary focus:ring-secondary" 
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Either is fine</span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Booking Inquiry'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                      <CheckCircle size={20} />
                      <span>Booking inquiry sent successfully! We'll be in touch soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                      Something went wrong. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column: Info & Video */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-6">Get in Touch</h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">Address</h4>
                      <p>Unit F, De-Castle Luxury Home, Plot 25, Ewet Housing Estate, Uyo, Akwa Ibom</p>
                      <p className="text-sm text-gray-500 mt-1">Plus Code: 2WCW+5M Uyo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">Phone</h4>
                      <p>0808 441 0493</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">Hours</h4>
                      <p>Open 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Testimonial */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-6">Client Experience</h3>
                <div className="relative w-full h-[600px] bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
                  <iframe 
                    src="https://www.instagram.com/reel/DHmBRF4teAd/embed" 
                    className="w-full h-full object-cover"
                    frameBorder="0" 
                    scrolling="no" 
                    allowFullScreen
                    title="Client Testimonial"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Chatbot Placeholder */}
          <div id="chatbot-placeholder"></div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-4">Meet the Team</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/626788370_2806983262971212_4134309277667481510_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEJnXq1K66PwQlwJTXRvkqfVJnKrdinSF1Umcqt2KdIXXqOWOoqr1bpc_5Knk9W1Jle1z0Yo0upDtZtLgRfy8jr&_nc_ohc=T54CQ8u5XhYQ7kNvwHdMf-v&_nc_oc=Adl6QqpVwgDXVhy8zxZ73WtXrVug4gkjai8fdAr2rPyaHUCVEOuwDJzcVtY2GdkshUk&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=kHiy0_YfrqUMoTH4_T7fMQ&oh=00_AfuKfApoum1-FtrK9FXbFYF5PeVe1FtNhpPvfIpaNXhusQ&oe=699E6842" 
              alt="Solution Car Rental Team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
