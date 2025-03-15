import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Wedding Reception",
    image: "/images/testimonials/client1.jpg",
    rating: 5,
    text: "Swagat Caterers made our wedding reception truly memorable. The food was exceptional, and their service was impeccable. Every guest praised the variety and taste of dishes.",
    event: "Wedding Reception at Brilliant Convention Center"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Corporate Event",
    image: "/images/testimonials/client2.jpg",
    rating: 5,
    text: "Outstanding corporate event catering! The live counters were a huge hit, and the presentation was top-notch. Professional staff and excellent coordination throughout the event.",
    event: "Annual Corporate Gala"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Birthday Celebration",
    image: "/images/testimonials/client3.jpg",
    rating: 5,
    text: "The birthday party was a grand success thanks to Swagat Caterers. The themed food setup and special arrangements for kids were perfect. Highly recommended!",
    event: "25th Birthday Celebration"
  },
  {
    id: 4,
    name: "Meera Desai",
    role: "Family Function",
    image: "/images/testimonials/client4.jpg",
    rating: 5,
    text: "We've used Swagat Caterers for multiple family functions, and they never disappoint. Their attention to detail and quality of food is consistently excellent.",
    event: "House Warming Ceremony"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
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
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="decorative-line"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Swagat Caterers.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 transform"
          >
            <FaArrowLeft className="text-xl" />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 transform"
          >
            <FaArrowRight className="text-xl" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200, rotateY: direction > 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -200 : 200, rotateY: direction > 0 ? 30 : -30 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.5 
                }}
                className="absolute inset-0 perspective-1000"
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 h-full transform-gpu transition-transform duration-500 hover:scale-[1.02] shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.2)] border border-gray-100">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden transform rotate-3 shadow-lg">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl text-[var(--color-text)]">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-[var(--color-text-light)]">
                          {testimonials[currentIndex].role}
                        </p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 drop-shadow" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow relative">
                      <FaQuoteLeft className="absolute -top-4 -left-2 text-6xl text-[var(--color-primary)]/10" />
                      <p className="text-lg md:text-xl text-gray-600 italic relative z-10 pl-8">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-sm text-[var(--color-primary)] font-medium">
                        {testimonials[currentIndex].event}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex
                    ? 'bg-[var(--color-primary)] w-6 shadow-[0_0_10px_rgba(var(--color-primary-rgb),_0.5)]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 