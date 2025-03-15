import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaExpand, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'food', name: 'Food' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/wedding-1.jpg",
      category: "wedding",
      title: "Grand Wedding Setup",
      description: "Elegant table settings with floral centerpieces",
      featured: true
    },
    {
      id: 2,
      src: "/images/gallery/food-1.jpg",
      category: "food",
      title: "Signature Dishes",
      description: "Our most popular culinary creations"
    },
    {
      id: 3,
      src: "/images/gallery/corporate-1.jpg",
      category: "corporate",
      title: "Corporate Lunch",
      description: "Professional catering for business events",
      featured: true
    },
    {
      id: 4,
      src: "/images/gallery/birthday-1.jpg",
      category: "birthday",
      title: "Theme Birthday",
      description: "Customized birthday party arrangements"
    },
    {
      id: 5,
      src: "/images/gallery/food-2.jpg",
      category: "food",
      title: "Dessert Collection",
      description: "Sweet delicacies and traditional desserts",
      featured: true
    },
    {
      id: 6,
      src: "/images/gallery/wedding-2.jpg",
      category: "wedding",
      title: "Reception Decor",
      description: "Beautiful wedding reception setup"
    },
    {
      id: 7,
      src: "/images/gallery/corporate-2.jpg",
      category: "corporate",
      title: "Conference Catering",
      description: "Large-scale corporate event catering"
    },
    {
      id: 8,
      src: "/images/gallery/food-3.jpg",
      category: "food",
      title: "Live Counters",
      description: "Interactive food stations",
      featured: true
    },
    {
      id: 9,
      src: "/images/gallery/birthday-2.jpg",
      category: "birthday",
      title: "Kids Birthday",
      description: "Special arrangements for children's parties"
    }
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

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
          <span className="section-badge">Our Gallery</span>
          <h2 className="section-title">Captured Moments</h2>
          <div className="decorative-line"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of memorable events and culinary creations. 
            Each image tells a story of celebration and exceptional catering service.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden
                  ${image.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => handleImageClick(image)}
              >
                <div className={`relative ${image.featured ? 'aspect-[16/9]' : 'aspect-square'}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaExpand className="text-white" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={handleClose}
            >
              <div className="relative max-w-7xl mx-auto" onClick={e => e.stopPropagation()}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaArrowLeft className="text-white text-xl" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaArrowRight className="text-white text-xl" />
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaTimes className="text-white text-xl" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-200">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="btn btn-primary flex items-center gap-2 mx-auto">
            <FaCamera className="text-lg" />
            <span>View Complete Gallery</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;