import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBriefcase, FaUtensils, FaUsers, FaClock,
  FaClipboardCheck, FaCoffee, FaHandshake, FaChartLine
} from 'react-icons/fa';

const CorporateEvents = () => {
  const packages = [
    {
      name: 'Premium Corporate Package',
      price: 'Starting from ₹799 per person',
      description: 'Comprehensive catering solution for large corporate events',
      features: [
        '8 Types of Starters',
        '10 Main Course Items',
        '6 Types of Desserts',
        '2 Live Counters',
        'Tea/Coffee Station',
        'Professional Service',
        'Elegant Setup',
        'Customized Menu Cards'
      ]
    },
    {
      name: 'Business Meeting Package',
      price: 'Starting from ₹599 per person',
      description: 'Perfect for business meetings and conferences',
      features: [
        '6 Types of Starters',
        '8 Main Course Items',
        '4 Types of Desserts',
        'Tea/Coffee Station',
        'Professional Staff',
        'Basic Setup',
        'Packaged Water',
        'Disposable Cutlery'
      ]
    }
  ];

  const services = [
    {
      icon: FaClipboardCheck,
      title: 'Conference Catering',
      description: 'Full-day catering services for conferences and seminars'
    },
    {
      icon: FaCoffee,
      title: 'Business Lunch',
      description: 'Quick and efficient lunch services for business meetings'
    },
    {
      icon: FaHandshake,
      title: 'Corporate Parties',
      description: 'Elaborate setups for company celebrations and events'
    },
    {
      icon: FaChartLine,
      title: 'Product Launches',
      description: 'Specialized catering for product launch events'
    }
  ];

  const features = [
    {
      title: 'Professional Setup',
      description: 'Elegant and corporate-themed presentation'
    },
    {
      title: 'Flexible Timing',
      description: 'Adaptable to your business schedule'
    },
    {
      title: 'Customized Menus',
      description: 'Tailored to your event requirements'
    },
    {
      title: 'Hygiene Standards',
      description: 'Strict adherence to food safety protocols'
    },
    {
      title: 'Efficient Service',
      description: 'Trained staff for smooth operations'
    },
    {
      title: 'Quality Assurance',
      description: 'Consistent food quality and presentation'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/services/corporate-hero.jpg)' }}
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
                Corporate Catering Services
              </span>
              <h1 className="text-5xl md:text-6xl font-display text-theme-light mb-6">
                Professional Catering for
                <span className="text-theme-accent"> Business Events</span>
              </h1>
              <p className="text-xl text-theme-light/90 mb-8">
                Elevate your corporate gatherings with our premium catering solutions
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-theme-accent text-theme-light px-8 py-4 rounded-full hover:bg-theme-accent/90 transition-all shadow-royal hover:shadow-royal-hover"
                >
                  Request Quote
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

      {/* Services Section */}
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
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display text-theme-primary mb-6"
            >
              Corporate Catering Solutions
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-royal hover:shadow-royal-hover transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-theme-accent/10 mb-6">
                  <service.icon className="text-2xl text-theme-accent" />
                </div>
                <h3 className="text-xl font-display text-theme-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-theme-secondary">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Choose Your Package
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
                  <FaBriefcase className="text-4xl text-theme-accent" />
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
              Why Choose Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <h4 className="text-xl font-display text-theme-light mb-3">
                  {feature.title}
                </h4>
                <p className="text-theme-light/80">
                  {feature.description}
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
              Ready to Plan Your Event?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-theme-secondary mb-8"
            >
              Let us handle the catering while you focus on your business
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

export default CorporateEvents; 