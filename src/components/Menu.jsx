import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaFire, FaStar, FaHeart } from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'starters', name: 'Starters' },
    { id: 'main-course', name: 'Main Course' },
    { id: 'rice-breads', name: 'Rice & Breads' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Masala Dosa",
      category: "starters",
      price: "₹120",
      description: "Crispy rice crepe filled with spiced potato, served with sambar and chutneys",
      image: "/images/menu/masala-dosa.jpg",
      isVeg: true,
      isPopular: true,
      tags: ["Breakfast", "South Indian"]
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      category: "main-course",
      price: "₹220",
      description: "Cottage cheese cubes in rich tomato gravy with butter and cream",
      image: "/images/menu/paneer-butter-masala.jpg",
      isVeg: true,
      isSpicy: true,
      tags: ["Chef's Special", "North Indian"]
    },
    {
      id: 3,
      name: "Hyderabadi Biryani",
      category: "rice-breads",
      price: "₹250",
      description: "Aromatic rice layered with vegetables and authentic spices",
      image: "/images/menu/veg-biryani.jpg",
      isVeg: true,
      isSpicy: true,
      isPopular: true,
      tags: ["Signature Dish"]
    },
    {
      id: 4,
      name: "Gulab Jamun",
      category: "desserts",
      price: "₹100",
      description: "Sweet milk dumplings soaked in rose flavored sugar syrup",
      image: "/images/menu/gulab-jamun.jpg",
      isVeg: true,
      tags: ["Sweet", "Traditional"]
    },
    {
      id: 5,
      name: "Idli Sambar",
      category: "starters",
      price: "₹100",
      description: "Steamed rice cakes served with lentil soup and chutneys",
      image: "/images/menu/idli-sambar.jpg",
      isVeg: true,
      tags: ["Breakfast", "South Indian"]
    },
    {
      id: 6,
      name: "Dal Makhani",
      category: "main-course",
      price: "₹180",
      description: "Creamy black lentils slow-cooked with butter and spices",
      image: "/images/menu/dal-makhani.jpg",
      isVeg: true,
      isPopular: true,
      tags: ["North Indian"]
    },
    {
      id: 7,
      name: "Butter Naan",
      category: "rice-breads",
      price: "₹40",
      description: "Soft Indian bread brushed with butter",
      image: "/images/menu/butter-naan.jpg",
      isVeg: true,
      tags: ["Bread", "North Indian"]
    },
    {
      id: 8,
      name: "Rasmalai",
      category: "desserts",
      price: "₹120",
      description: "Soft cottage cheese patties in sweetened, cardamom-flavored milk",
      image: "/images/menu/rasmalai.jpg",
      isVeg: true,
      isPopular: true,
      tags: ["Sweet", "Bengali"]
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">Our Menu</span>
          <h2 className="section-title">Delicious Offerings</h2>
          <div className="decorative-line"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of authentic dishes, crafted with love and tradition. 
            Each dish is prepared using the finest ingredients and secret family recipes.
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

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.isVeg && (
                      <span className="flex items-center gap-1 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs">
                        <FaLeaf className="text-xs" /> Veg
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="flex items-center gap-1 bg-red-500/90 text-white px-2 py-1 rounded-full text-xs">
                        <FaFire className="text-xs" /> Spicy
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="flex items-center gap-1 bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs">
                        <FaStar className="text-xs" /> Popular
                      </span>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-2 rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                  >
                    <FaHeart className="text-sm" />
                    <span>Add to Favorites</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            This is just a sample of our extensive menu. Download our full menu to explore more options.
          </p>
          <button className="btn btn-primary">
            Download Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;