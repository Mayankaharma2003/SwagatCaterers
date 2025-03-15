import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUsers, FaCalendarCheck } from 'react-icons/fa';
import CountUp from 'react-countup';

const Statistics = () => {
  const stats = [
    {
      icon: FaClock,
      value: 15,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Serving with dedication since 2009'
    },
    {
      icon: FaUsers,
      value: 10000,
      suffix: '+',
      label: 'Happy Customers',
      description: 'Creating memorable experiences'
    },
    {
      icon: FaCalendarCheck,
      value: 500,
      suffix: '+',
      label: 'Events Catered',
      description: 'Successful celebrations'
    }
  ];

  return (
    <section className="py-24 bg-theme-deep relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-theme-accent/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-theme-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-theme-accent/20 text-theme-accent mb-6">
                <stat.icon size={32} />
              </div>
              <div className="text-5xl font-display text-theme-light mb-4">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <h3 className="text-2xl font-display text-theme-light mb-2">
                {stat.label}
              </h3>
              <p className="text-theme-light/80">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 