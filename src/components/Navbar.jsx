import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
        : 'bg-white shadow-lg py-2'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`font-bold text-2xl transition-colors duration-300 ${
                isScrolled || isOpen || !isHomePage ? 'text-[var(--color-primary)]' : 'text-white'
              }`}
            >
              Swagat Caterers
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 group ${
                  isScrolled || !isHomePage 
                    ? 'text-gray-700 hover:text-[var(--color-primary)]' 
                    : 'text-white hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute left-0 right-0 bottom-0 h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  isScrolled || !isHomePage ? 'bg-[var(--color-primary)]' : 'bg-white'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                isScrolled || !isHomePage
                  ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
                  : 'bg-white/20 text-white hover:bg-white hover:text-[var(--color-primary)]'
              }`}
            >
              <FaPhone className="text-sm" />
              <span className="font-medium">Call Us</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  className={isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}
                >
                  <FaTimes className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  className={isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}
                >
                  <FaBars className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween' }}
                className="fixed inset-0 bg-white z-40 lg:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-2xl font-medium text-gray-900 hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex flex-col items-center gap-4 mt-8">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    >
                      <FaPhone />
                      <span>Call Us</span>
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 