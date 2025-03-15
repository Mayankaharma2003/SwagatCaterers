import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Booking Enquiry*%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Event Date:* ${formData.eventDate}%0A
*Event Type:* ${formData.eventType}%0A
*Guest Count:* ${formData.guestCount}%0A
*Message:* ${formData.message}`;

    // WhatsApp API URL with the formatted message
    const whatsappUrl = `https://wa.me/919229031000?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      guestCount: '',
      message: ''
    });
  };

  return (
    <section className="py-24 bg-theme-light relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-theme-accent font-cursive text-3xl mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-display text-theme-primary mb-6"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-theme-accent mx-auto mb-8"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="elegant-card">
              <h3 className="text-2xl font-display text-theme-primary mb-6">
                Book Your Event
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-theme-primary mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="elegant-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-theme-primary mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="elegant-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-theme-primary mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="elegant-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-theme-primary mb-2">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="elegant-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-theme-primary mb-2">Event Type</label>
                    <select
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
                    </select>
                  </div>
                  <div>
                    <label className="block text-theme-primary mb-2">Guest Count</label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="elegant-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-theme-primary mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="elegant-input"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="royal-button w-full">
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="elegant-card">
              <h3 className="text-2xl font-display text-theme-primary mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+919229031000"
                  className="flex items-center gap-4 text-theme-secondary hover:text-theme-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center">
                    <FaPhone className="text-theme-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div>+91 92290 31000</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919229031000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-theme-secondary hover:text-theme-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center">
                    <FaWhatsapp className="text-theme-accent" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div>+91 92290 31000</div>
                  </div>
                </a>
                <a
                  href="mailto:info@swagatcaterers.com"
                  className="flex items-center gap-4 text-theme-secondary hover:text-theme-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center">
                    <FaEnvelope className="text-theme-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div>info@swagatcaterers.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="elegant-card">
              <h3 className="text-2xl font-display text-theme-primary mb-6">
                Business Hours
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-theme-accent" />
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="font-medium">Monday - Saturday</div>
                    <div className="text-theme-secondary">9:00 AM - 8:00 PM</div>
                  </div>
                  <div>
                    <div className="font-medium">Sunday</div>
                    <div className="text-theme-secondary">10:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="elegant-card">
              <h3 className="text-2xl font-display text-theme-primary mb-6">
                Our Location
              </h3>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-theme-accent" />
                </div>
                <div>
                  <div className="font-medium">Office Address</div>
                  <div className="text-theme-secondary">
                    123, Main Street, City Center,<br />
                    Landmark, City - 123456
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1234567890123!2d75.85772!3d22.71960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 