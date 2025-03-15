import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    guestCount: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Social Gathering',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        phone: '',
        eventType: '',
        guestCount: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 3000);
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Floating Contact Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-110 transform duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Quick Contact Cards */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          >
            Contact Us
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                  <FaPhone className="text-[var(--color-primary)] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <a href="tel:+919876543210" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors block font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[var(--color-primary)] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <a href="mailto:info@swagatcaterers.com" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors block font-medium">
                    info@swagatcaterers.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-[var(--color-primary)] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors block font-medium">
                    Chat with Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Enquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all"
                    >
                      <option value="">Select Type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-all hover:scale-[1.02] transform disabled:opacity-70 disabled:hover:scale-100 font-medium"
                  >
                    {formStatus.loading ? (
                      <>
                        <FaSpinner className="animate-spin inline-block mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>

                  <AnimatePresence>
                    {formStatus.success && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2"
                      >
                        <FaCheckCircle />
                        Thank you! We'll contact you soon.
                      </motion.div>
                    )}
                    {formStatus.error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-4 p-3 bg-red-100 text-red-700 rounded-lg"
                      >
                        {formStatus.error}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] bg-white rounded-lg shadow overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.99!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1635835669"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="absolute inset-0"
              ></iframe>
              
              {/* Address Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[var(--color-primary)] text-xl flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    123 Catering Street, Foodie District, City Name - 123456
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;