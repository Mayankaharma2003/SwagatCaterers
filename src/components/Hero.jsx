import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Catering Spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary)]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative container-custom min-h-[90vh] flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-primary)] text-white rounded-full text-sm font-medium">
              Welcome to Swagat Caterers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6"
          >
            Creating Tasteful
            <span className="text-[var(--color-primary)] block">Memories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-200 mb-8 max-w-2xl"
          >
            Transform your special moments into extraordinary experiences with our exquisite 
            South Indian culinary creations. Let us add flavor to your celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="btn btn-primary group"
            >
              <span>Book Now</span>
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:+919876543210"
              className="btn btn-secondary group"
            >
              <FaPhone className="mr-2" />
              <span>Call Us</span>
            </a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: "25+ Years",
                description: "Of Excellence"
              },
              {
                title: "500+",
                description: "Events Catered"
              },
              {
                title: "100%",
                description: "Client Satisfaction"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-3xl font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="relative">
            <img
              src="/images/dish-1.jpg"
              alt="Signature Dish"
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl transform rotate-6 animate-float"
            />
            <img
              src="/images/dish-2.jpg"
              alt="Special Menu"
              className="w-48 h-48 object-cover rounded-2xl shadow-2xl absolute -bottom-12 -left-12 transform -rotate-6 animate-float"
              style={{ animationDelay: '0.2s' }}
            />
            <img
              src="/images/dish-3.jpg"
              alt="Dessert"
              className="w-40 h-40 object-cover rounded-2xl shadow-2xl absolute -top-12 -left-6 transform rotate-12 animate-float"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <div className="w-1 h-8 bg-white/20 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-primary)] animate-scroll"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;