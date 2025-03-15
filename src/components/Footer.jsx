import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Wedding Catering',
    'Corporate Events',
    'Birthday Parties',
    'Social Gatherings',
    'Festival Celebrations',
    'Live Counters'
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/swagatcaterers', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com/swagatcaterers', label: 'Instagram' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: <FaYoutube />, url: 'https://youtube.com/swagatcaterers', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Swagat Caterers</h3>
            <p className="text-gray-400">
              Delivering exceptional catering services with authentic flavors and professional excellence since 1998.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                >
                  <FaPhone className="text-[var(--color-primary)]" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@swagatcaterers.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                >
                  <FaEnvelope className="text-[var(--color-primary)]" />
                  <span>info@swagatcaterers.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-[var(--color-primary)] mt-1" />
                <span>
                  20, Ambikapuri Main,<br />
                  Near Khatu Shyam Mandir,<br />
                  Indore, MP - 452005
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-12 pb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-6">Subscribe to Our Newsletter</h3>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-700 focus:border-[var(--color-primary)] focus:outline-none text-white placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Swagat Caterers. Made with 
            <FaHeart className="text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;