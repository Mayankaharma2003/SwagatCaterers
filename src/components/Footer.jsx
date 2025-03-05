import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-f6f0ea py-5 mt-5">
      <div className="container">
        <div className="footer-sec-cont d-flex flex-wrap justify-content-between animate__animated animate__fadeIn">
          <div className="footer-sec-left mb-4">
            <div className="footer-logo-section">
              <NavLink to="/">
                <img src="/images/footer-logo.png" alt="Swagat Shree Caterers Footer Logo" className="img-fluid" style={{ width: '60%' }} />
              </NavLink>
            </div>
            <p style={{ fontSize: '16px', color: '#000', marginTop: '20px' }}>
              Swagat Shree Caterers is here to bring the taste of South India to your table. Experience the best in South Indian catering with our service in Mumbai—where tradition meets taste!
            </p>
          </div>
          <div className="footer-sec-right d-flex gap-5 flex-wrap">
            <div className="footer-links">
              <h4 className="text-760400 mb-3" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '24px' }}>Quick Links</h4>
              <div className="footer-link"><NavLink to="/" className="text-dark text-decoration-none animate__animated animate__fadeIn">Home</NavLink></div>
              <div className="footer-link"><NavLink to="/about" className="text-dark text-decoration-none animate__animated animate__fadeIn">About Us</NavLink></div>
              <div className="footer-link"><NavLink to="/food-menu" className="text-dark text-decoration-none animate__animated animate__fadeIn">Menu</NavLink></div>
              <div className="footer-link"><NavLink to="/services" className="text-dark text-decoration-none animate__animated animate__fadeIn">Services</NavLink></div>
              <div className="footer-link"><NavLink to="/gallery" className="text-dark text-decoration-none animate__animated animate__fadeIn">Gallery</NavLink></div>
              <div className="footer-link"><NavLink to="/contact" className="text-dark text-decoration-none animate__animated animate__fadeIn">Contact Us</NavLink></div>
            </div>
            <div className="footer-links">
              <h4 className="text-760400 mb-3" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '24px' }}>Contact Details</h4>
              <div className="footer-link d-flex align-items-center mb-2 animate__animated animate__fadeIn">
                <i className="fa-solid fa-location-dot me-2 text-760400"></i>
                <a href="#" className="text-dark text-decoration-none">Gala No.27, Old Ramgopal Industrial Estate, Mumbai-400 080</a>
              </div>
              <div className="footer-link d-flex align-items-center animate__animated animate__fadeIn">
                <i className="fa-solid fa-phone me-2 text-760400"></i>
                <a href="tel:+918291440922" className="text-dark text-decoration-none">+91 82914 40922</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-sec-bottom d-flex justify-content-between align-items-center mt-4 animate__animated animate__fadeIn">
          <div className="social-links d-flex gap-3">
            <a href="#" className="text-760400 animate__animated animate__fadeIn" style={{ fontSize: '18px', transition: 'transform 0.3s ease, color 0.3s ease' }}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="text-760400 animate__animated animate__fadeIn" style={{ fontSize: '18px', transition: 'transform 0.3s ease, color 0.3s ease' }}><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-760400 animate__animated animate__fadeIn" style={{ fontSize: '18px', transition: 'transform 0.3s ease, color 0.3s ease' }}><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <div className="copyrights-section">
            <p style={{ fontSize: '14px', color: '#000' }}>Copyrights © <a href="#" className="text-760400 text-decoration-none animate__animated animate__fadeIn">Swagat Shree Caterers</a></p>
            <p style={{ fontSize: '14px', color: '#000' }}>Developed By <a href="#" className="text-760400 text-decoration-none animate__animated animate__fadeIn">Byzero Technologies</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;