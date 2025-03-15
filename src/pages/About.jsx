import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Swagat Caterers</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering authentic South Indian flavors and exceptional catering services since inception
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a passion for authentic South Indian cuisine, Swagat Caterers has been serving 
                delicious food and creating memorable experiences for our clients. Our journey began with 
                a simple mission: to bring the rich flavors and traditions of South Indian cuisine to every event 
                we cater.
              </p>
              <p className="text-gray-600">
                Over the years, we have grown from a small family business to one of the most trusted names 
                in catering, while maintaining our commitment to quality, authenticity, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/about-story.jpg"
                alt="Our Story"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-orange-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

const values = [
  {
    title: "Quality",
    description: "We never compromise on the quality of ingredients and service delivery.",
    icon: "🌟"
  },
  {
    title: "Tradition",
    description: "Preserving authentic South Indian flavors and cooking methods.",
    icon: "🏺"
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our top priority in everything we do.",
    icon: "🤝"
  }
];

const team = [
  {
    name: "Ramesh Kumar",
    role: "Founder & Head Chef",
    avatar: "👨‍🍳"
  },
  {
    name: "Priya Venkat",
    role: "Event Manager",
    avatar: "👩‍💼"
  },
  {
    name: "Suresh Iyer",
    role: "Operations Head",
    avatar: "👨‍💼"
  },
  {
    name: "Lakshmi Rao",
    role: "Customer Relations",
    avatar: "👩‍💼"
  }
];

export default About;