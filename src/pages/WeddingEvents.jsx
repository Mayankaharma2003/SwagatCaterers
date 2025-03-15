import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHeart, FaUtensils, FaUsers, FaCamera, 
  FaWineGlassAlt, FaLeaf, FaMagic, FaCrown
} from 'react-icons/fa';

const WeddingEvents = () => {
  const packages = [
    {
      name: 'Royal Wedding Package',
      price: 'Starting from ₹999 per plate',
      description: 'Our most comprehensive package for grand celebrations',
      features: [
        '12 Types of Starters',
        '15 Main Course Items',
        '8 Types of Desserts',
        '4 Live Counters',
        'Welcome Drinks',
        'Special Jain Menu',
        'Dedicated Service Staff',
        'Premium Decorations'
      ]
    },
    {
      name: 'Premium Wedding Package',
      price: 'Starting from ₹799 per plate',
      description: 'Perfect blend of luxury and value',
      features: [
        '8 Types of Starters',
        '12 Main Course Items',
        '6 Types of Desserts',
        '2 Live Counters',
        'Welcome Drinks',
        'Special Jain Menu',
        'Professional Staff',
        'Basic Decorations'
      ]
    }
  ];

  const features = [
    {
      icon: FaUtensils,
      title: 'Live Cooking Stations',
      description: 'Interactive food preparation with expert chefs'
    },
    {
      icon: FaWineGlassAlt,
      title: 'Welcome Drinks',
      description: 'Refreshing traditional and modern beverages'
    },
    {
      icon: FaLeaf,
      title: 'Pure Vegetarian',
      description: 'Extensive variety of vegetarian delicacies'
    },
    {
      icon: FaMagic,
      title: 'Theme Setup',
      description: 'Customized decor matching your wedding theme'
    }
  ];

  const specialities = [
    {
      title: 'Traditional Welcome',
      description: 'Grand traditional welcome for all guests with tikka and aarti'
    },
    {
      title: 'Customized Menu',
      description: 'Personalized menu selection based on your preferences'
    },
    {
      title: 'Special Jain Menu',
      description: 'Extensive selection of Jain dishes prepared separately'
    },
    {
      title: 'Live Counters',
      description: 'Interactive food stations with live preparation'
    },
    {
      title: 'Premium Service',
      description: 'Well-trained staff ensuring impeccable service'
    },
    {
      title: 'Elegant Setup',
      description: 'Beautiful table settings and food presentation'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/services/wedding-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-theme-deep/90 to-theme-deep/70" />
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-theme-accent/20 rounded-full text-theme-light mb-4">
                Wedding Catering Services
              </span>
              <h1 className="text-5xl md:text-6xl font-display text-theme-light mb-6">
                Make Your Special Day 
                <span className="text-theme-accent"> Unforgettable</span>
              </h1>
              <p className="text-xl text-theme-light/90 mb-8">
                Experience the perfect blend of tradition and innovation with our exclusive wedding catering services
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-theme-accent text-theme-light px-8 py-4 rounded-full hover:bg-theme-accent/90 transition-all shadow-royal hover:shadow-royal-hover"
                >
                  Get Quote
                </Link>
                <a
                  href="tel:+919229031000"
                  className="bg-white/10 backdrop-blur-sm text-theme-light px-8 py-4 rounded-full hover:bg-white/20 transition-all"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-theme-light relative overflow-hidden">
        <div className="absolute inset-0 bg-mandala opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-theme-accent/10 rounded-full text-theme-accent font-medium mb-4"
            >
              Wedding Packages
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display text-theme-primary mb-6"
            >
              Choose Your Perfect Package
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-royal hover:shadow-royal-hover transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaCrown className="text-4xl text-theme-accent" />
                  <div>
                    <h3 className="text-2xl font-display text-theme-primary">
                      {pkg.name}
                    </h3>
                    <p className="text-theme-accent font-semibold">
                      {pkg.price}
                    </p>
                  </div>
                </div>
                <p className="text-theme-secondary mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-theme-primary">
                      <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-theme-accent text-theme-light py-3 rounded-full hover:bg-theme-maroon transition-all"
                >
                  Book This Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-theme-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-royal-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display text-theme-primary mb-6"
            >
              Why Choose Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
                  <feature.icon className="text-2xl text-theme-accent" />
                </div>
                <h4 className="text-xl font-display text-theme-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-theme-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="py-24 bg-theme-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-royal-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display text-theme-light mb-6"
            >
              Our Specialities
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <h4 className="text-xl font-display text-theme-light mb-3">
                  {item.title}
                </h4>
                <p className="text-theme-light/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-theme-light relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display text-theme-primary mb-6"
            >
              Ready to Plan Your Wedding?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-theme-secondary mb-8"
            >
              Let's create a memorable experience for your special day
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="bg-theme-accent text-theme-light px-8 py-4 rounded-full hover:bg-theme-maroon transition-all shadow-royal hover:shadow-royal-hover"
              >
                Get Started
              </Link>
              <a
                href="https://wa.me/919229031000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeddingEvents; 