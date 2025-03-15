import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaUsers, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">About Us</span>
          <h2 className="section-title">Our Culinary Journey</h2>
          <div className="decorative-line"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/about-main.jpg"
                alt="Our Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-[var(--color-primary)]">25+</h3>
                    <p className="text-gray-600 mt-1">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-[var(--color-primary)]">500+</h3>
                    <p className="text-gray-600 mt-1">Events Served</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Chef Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -right-8 top-8 bg-white rounded-xl p-4 shadow-xl max-w-[200px]"
            >
              <img
                src="/images/chef.jpg"
                alt="Our Chef"
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="text-center font-semibold">Expert Chefs</h4>
              <p className="text-sm text-gray-600 text-center mt-1">
                Masters of authentic South Indian cuisine
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Welcome to Swagat Caterers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For over 25 years, Swagat Caterers has been crafting exceptional culinary experiences 
              that blend traditional flavors with modern presentation. Our journey began with a 
              simple passion for authentic South Indian cuisine and has evolved into a 
              full-service catering company trusted by thousands of satisfied clients.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                {
                  icon: FaUtensils,
                  title: "Authentic Cuisine",
                  description: "Traditional recipes with modern twist"
                },
                {
                  icon: FaUsers,
                  title: "Professional Service",
                  description: "Experienced and courteous staff"
                },
                {
                  icon: FaAward,
                  title: "Quality Assured",
                  description: "Premium ingredients, perfect taste"
                },
                {
                  icon: FaHeart,
                  title: "Customized Menu",
                  description: "Tailored to your preferences"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="feature-card"
                >
                  <feature.icon className="text-2xl text-[var(--color-primary)] mb-3" />
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="font-semibold text-gray-900">Why Choose Us?</h4>
              <ul className="space-y-3">
                {[
                  "Experienced team of professional chefs",
                  "Customizable menus for all dietary preferences",
                  "Hygienic food preparation and service",
                  "On-time delivery and setup",
                  "Competitive pricing with no compromise on quality"
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 