import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaImage } from 'react-icons/fa';

const Home = () => {
  const showcaseImages = [
    {
      src: '/images/showcase/dish-1.jpg',
      category: 'Signature Dish',
      title: 'South Indian Thali'
    },
    {
      src: '/images/showcase/setup-1.jpg',
      category: 'Event Setup',
      title: 'Wedding Reception'
    },
    {
      src: '/images/showcase/dish-2.jpg',
      category: 'Special Menu',
      title: 'Festival Delicacies'
    },
    {
      src: '/images/showcase/event-1.jpg',
      category: 'Corporate Event',
      title: 'Business Lunch'
    },
    {
      src: '/images/showcase/dish-3.jpg',
      category: 'Popular Choice',
      title: 'Dosa Varieties'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section section-white"
      >
        {/* Decorative Elements */}
        <div className="decorative-blob bg-orange-50 top-0 left-0"></div>
        <div className="decorative-blob bg-orange-50 bottom-0 right-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5"></div>

        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about-img.jpg"
                  alt="South Indian Cuisine"
                  className="img-cover h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              </div>
              
              {/* Stats Card */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-[var(--color-primary)] text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm">Years of</div>
                  <div className="text-sm">Excellence</div>
                </div>
              </motion.div>

              {/* Chef Card */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="card absolute -bottom-8 -left-8 backdrop-blur-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[var(--color-primary)]/20">
                    <img 
                      src="/images/chef.jpg" 
                      alt="Master Chef" 
                      className="img-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-text)]">Expert Chefs</div>
                    <div className="text-[var(--color-primary)]">Culinary Masters</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="section-badge">
                <span>About Us</span>
              </div>

              <h2 className="section-title">
                Welcome to<br />
                <span className="text-[var(--color-primary)]">Swagat Caterers</span>
              </h2>

              <p className="section-subtitle">
                At Swagat Caterers, we specialize in providing the finest South Indian Catering Service, 
                delivering authentic and traditional flavors to your special events. Our experienced team 
                is dedicated to offering an unforgettable culinary experience that highlights the rich 
                heritage of South Indian cuisine.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card card-hover bg-[var(--color-bg-alt)] p-6"
                >
                  <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">500+</div>
                  <div className="text-[var(--color-text)]">Events Catered</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="card card-hover bg-[var(--color-bg-alt)] p-6"
                >
                  <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">100%</div>
                  <div className="text-[var(--color-text)]">Client Satisfaction</div>
                </motion.div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Authentic South Indian Cuisine',
                    description: 'Traditional recipes with modern presentation'
                  },
                  {
                    title: 'Professional Catering Service',
                    description: 'Experienced staff and impeccable service'
                  },
                  {
                    title: 'Customized Menu Options',
                    description: 'Tailored to your preferences and event theme'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card card-hover p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[var(--color-primary)] flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-text)]">{feature.title}</h3>
                        <p className="text-[var(--color-text-light)]">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Image Showcase Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section section-alt"
      >
        {/* Decorative Elements */}
        <div className="decorative-blob bg-[var(--color-primary)]/10 top-0 left-0"></div>
        <div className="decorative-blob bg-[var(--color-primary)]/10 bottom-0 right-0"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-badge"
            >
              Our Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Culinary Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              A visual feast of our finest creations, event setups, and memorable moments
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="decorative-line"
            ></motion.div>
          </div>

          <div className="grid-auto-fit">
            {showcaseImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card card-hover ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${
                  index === 0 ? 'aspect-w-16 aspect-h-12' : 'aspect-w-16 aspect-h-14'
                }`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="img-cover hover-scale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs rounded-full mb-3 w-fit">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/gallery"
              className="btn btn-primary"
            >
              <FaImage className="text-lg" />
              <span>View Full Gallery</span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;