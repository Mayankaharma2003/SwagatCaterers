import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HomeGallery from './components/HomeGallery';
import HomeMenu from './components/HomeMenu';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import WeddingEvents from './pages/WeddingEvents';
import CorporateEvents from './pages/CorporateEvents';
import BirthdayParties from './pages/BirthdayParties';
import SpecialOccasions from './pages/SpecialOccasions';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-theme-light">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <HomeGallery />
              <Services />
              <Testimonials />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/wedding" element={<WeddingEvents />} />
          <Route path="/services/corporate" element={<CorporateEvents />} />
          <Route path="/services/birthday" element={<BirthdayParties />} />
          <Route path="/services/special" element={<SpecialOccasions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;