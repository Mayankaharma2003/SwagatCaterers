import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaUtensils, FaCheck } from 'react-icons/fa';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    venue: '',
    preferences: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const features = [
    {
      icon: <FaUtensils />,
      title: 'Customized Menus',
      description: 'Personalized menu planning to match your preferences and dietary requirements'
    },
    {
      icon: <FaUsers />,
      title: 'Professional Staff',
      description: 'Experienced team dedicated to making your event memorable'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Flexible Venues',
      description: 'Service available at your chosen location or our partner venues'
    }
  ];

  return (
    <section className="relative bg-theme-light py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/indian-pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-theme-accent font-cursive text-3xl block mb-4"
          >
            Reserve Your Date
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-theme-primary font-display text-4xl md:text-5xl font-bold"
          >
            Book Your Event
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-theme-primary font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="elegant-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-theme-primary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="elegant-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-theme-primary font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="elegant-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-theme-primary font-medium mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="elegant-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-theme-primary font-medium mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="elegant-input"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="social">Social Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="guestCount" className="block text-theme-primary font-medium mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="elegant-input"
                  required
                  min="1"
                />
              </div>

              <div>
                <label htmlFor="venue" className="block text-theme-primary font-medium mb-2">
                  Venue Address
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="elegant-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="preferences" className="block text-theme-primary font-medium mb-2">
                  Special Preferences
                </label>
                <textarea
                  id="preferences"
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  rows="4"
                  className="elegant-input"
                  placeholder="Dietary requirements, specific dishes, or any special requests"
                ></textarea>
              </div>

              <button type="submit" className="elegant-button w-full">
                Book Now
              </button>
            </form>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="elegant-card">
              <h3 className="text-theme-primary font-display text-2xl mb-8">Why Choose Us</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center">
                      <span className="text-xl text-theme-accent">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-theme-primary font-medium mb-2">{feature.title}</h4>
                      <p className="text-theme-secondary">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="elegant-card">
              <h3 className="text-theme-primary font-display text-2xl mb-8">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'Customized menu planning',
                  'Professional service staff',
                  'Complete setup and cleanup',
                  'Quality equipment and supplies',
                  'Flexible booking options',
                  'Competitive pricing'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex items-center gap-3 text-theme-secondary"
                  >
                    <FaCheck className="text-theme-accent flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute left-10 top-1/4 w-20 h-20 border-2 border-theme-accent/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute right-10 bottom-1/4 w-32 h-32 border-2 border-theme-accent/20 rounded-full"
        />
      </div>
    </section>
  );
};

export default BookNow; 