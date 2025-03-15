import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCamera } from 'react-icons/fa';

const HomeGallery = () => {
  const images = [
    {
      src: '/images/gallery/wedding-1.jpg',
      title: 'Wedding Catering',
      description: 'Royal wedding feast setup',
      category: 'Wedding'
    },
    {
      src: '/images/gallery/corporate-1.jpg',
      title: 'Corporate Event',
      description: 'Professional buffet arrangement',
      category: 'Corporate'
    },
    {
      src: '/images/gallery/food-1.jpg',
      title: 'Signature Dishes',
      description: 'Exquisite vegetarian delicacies',
      category: 'Food'
    },
    {
      src: '/images/gallery/setup-1.jpg',
      title: 'Premium Setup',
      description: 'Elegant dining arrangement',
      category: 'Setup'
    },
    {
      src: '/images/gallery/food-2.jpg',
      title: 'Traditional Delights',
      description: 'Authentic South Indian cuisine',
      category: 'Food'
    },
    {
      src: '/images/gallery/wedding-2.jpg',
      title: 'Grand Celebrations',
      description: 'Luxurious wedding catering',
      category: 'Wedding'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4"
          >
            Our Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display text-gray-900 mb-4"
          >
            Captured Moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Experience the artistry of our culinary creations and event setups through our carefully curated gallery
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-orange-500 mx-auto"
          ></motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs rounded-full mb-3 w-fit">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-display text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors group"
          >
            <FaCamera className="text-lg" />
            <span>View Complete Gallery</span>
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGallery; 