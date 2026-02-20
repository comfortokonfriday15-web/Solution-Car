import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-secondary">Solution Car Rental</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The solution to your logistics problem. Providing premium car rental services in Uyo with professionalism and reliability.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/fleet" className="hover:text-secondary transition-colors">Our Fleet</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact & Reviews</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span>Unit F, De-Castle Luxury Home, Plot 25, Ewet Housing Estate, Uyo, Akwa Ibom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span>0808 441 0493</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span>info@solutioncarrental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Solution Car Rental Services Uyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
