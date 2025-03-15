import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeMenu = () => {
  const packages = [
    {
      name: 'Royal Wedding Package',
      description: 'A complete wedding feast with premium selections',
      price: 'Starting from ₹999 per plate',
      features: [
        '8 Types of Starters',
        '12 Main Course Dishes',
        '6 Types of Desserts',
        'Live Counters'
      ]
    },
    {
      name: 'Corporate Package',
      description: 'Perfect for business meetings and conferences',
      price: 'Starting from ₹799 per plate',
      features: [
        '6 Types of Starters',
        '8 Main Course Dishes',
        '4 Types of Desserts',
        'Beverage Station'
      ]
    },
    {
      name: 'Birthday Package',
      description: 'Make your celebration extra special',
      price: 'Starting from ₹699 per plate',
      features: [
        '4 Types of Starters',
        '6 Main Course Dishes',
        '3 Types of Desserts',
        'Special Birthday Cake'
      ]
    }
  ];

  return (
    <section className="py-16 bg-theme-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display text-theme-primary mb-4"
          >
            Our Packages
          </motion.h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-theme-light p-6 rounded-xl shadow-royal hover:shadow-royal-hover transition-all"
            >
              <h3 className="text-xl font-display text-theme-primary mb-3">{pkg.name}</h3>
              <p className="text-theme-secondary mb-3">{pkg.description}</p>
              <p className="text-theme-accent font-semibold mb-4">{pkg.price}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-theme-primary">
                    <FaLeaf className="text-theme-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/menu"
                className="block text-center bg-theme-accent text-theme-light py-2 rounded-full hover:bg-theme-maroon transition-all"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-lg bg-theme-accent text-theme-light px-6 py-3 rounded-full hover:bg-theme-maroon transition-all shadow-royal hover:shadow-royal-hover"
          >
            <span>View All Packages</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu; 