import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUtensils, FaBirthdayCake, FaGlassCheers, FaBuilding, 
  FaRing, FaUsers, FaArrowRight 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaRing,
      title: "Wedding Catering",
      description: "Make your special day memorable with our exquisite wedding feast. From traditional delicacies to modern fusion dishes.",
      image: "/images/services/wedding.jpg",
      features: ["Customized Menu Planning", "Live Counters", "Theme-based Setup", "Professional Service Staff"]
    },
    {
      icon: FaBirthdayCake,
      title: "Birthday Parties",
      description: "Celebrate your birthday with delicious food and impeccable service. We create joyful moments with tasty treats.",
      image: "/images/services/birthday.jpg",
      features: ["Special Birthday Menu", "Cake Arrangements", "Decorative Food Display", "Kids Special Menu"]
    },
    {
      icon: FaBuilding,
      title: "Corporate Events",
      description: "Impress your clients and team with our professional corporate catering services. Perfect for meetings and conferences.",
      image: "/images/services/corporate.jpg",
      features: ["Business Lunch Packages", "Conference Catering", "Box Meal Options", "Tea/Coffee Service"]
    },
    {
      icon: FaGlassCheers,
      title: "Social Gatherings",
      description: "From family reunions to festive celebrations, we make every gathering special with our diverse menu options.",
      image: "/images/services/social.jpg",
      features: ["Flexible Menu Options", "Buffet Setup", "Traditional Specialties", "Festival Special Menus"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
          <div className="decorative-line"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide comprehensive catering 
            solutions tailored to your unique requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="text-2xl text-[var(--color-primary)]" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[var(--color-primary)] font-medium mt-6 group"
                >
                  Learn More
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          <div className="bg-[var(--color-primary)] p-8 md:p-12">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Need Custom Catering Solution?</h3>
                <p className="text-white/90">Let us create a personalized menu for your special occasion</p>
              </div>
              <button className="btn btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10"></div>
        </motion.div>

        {/* Service Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: FaUtensils, count: "50+", label: "Menu Items" },
            { icon: FaUsers, count: "5000+", label: "Happy Customers" },
            { icon: FaGlassCheers, count: "500+", label: "Events Catered" },
            { icon: FaBirthdayCake, count: "25+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white shadow-lg"
            >
              <stat.icon className="text-3xl text-[var(--color-primary)] mx-auto mb-4" />
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.count}</h4>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 