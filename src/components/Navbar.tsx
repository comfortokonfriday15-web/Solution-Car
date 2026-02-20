import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-bg-dark/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-secondary group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/502593348_2578997675769773_1718777527733851440_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeGm3ugXyWtsFA07okjvmTeB3DNLPu8us8vcM0s-7y6zyyXyAoTLuouQ_k8Bn4jHQ2aJDUFwwdWH6kt_FdoEcDL6&_nc_ohc=RsOMrydrr_AQ7kNvwE9iMPh&_nc_oc=Adn7Hzswril4pBLBDWFvrsPd5HfFmjg-zcOETIPZEjqced36zERkeSZNGGh8VR9qUSo&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=PQkLsOWloehjHfsmRySeUw&oh=00_AfspU5XVUmFE2aFGL79YD8-LwCQ_Kq2utLBqTlyVk54mZw&oe=699E78A1" 
                alt="Solution Car Rental Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif font-bold text-xl text-primary dark:text-white tracking-tight leading-tight">
              Solution <span className="text-secondary">Car Rental</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-secondary' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-secondary"
                  />
                )}
              </Link>
            ))}
            
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-2 bg-secondary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Book Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-bg-dark border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                }}
                className="w-full mt-4 px-3 py-3 bg-secondary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                Book Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
