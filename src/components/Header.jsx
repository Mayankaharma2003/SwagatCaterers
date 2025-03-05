import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed-top bg-white shadow-sm" style={{ zIndex: 50 }}>
      <div className="header-section container py-3">
        <div className="header-sec-cont d-flex justify-content-between align-items-center">
          <div className="logo-section">
            <NavLink to="/">
              <img src="/images/logo.png" alt="Swagat Shree Caterers Logo" className="img-fluid" style={{ width: '60%' }} />
            </NavLink>
          </div>
          <div className="menu-section d-flex align-items-center flex-wrap">
            <div className="menu-part1 me-5" id="m1">
              <p className="d-flex gap-2 align-items-center animate__animated animate__fadeIn">
                <a href="#" className="for-book btn" style={{ backgroundColor: '#760400', color: 'white', padding: '7px 20px', textDecoration: 'none' }}>For Booking</a>
                <a href="tel:+919821705154" className="mob-book" style={{ fontSize: '18px', color: '#000', textDecoration: 'none', fontWeight: 500 }}>+91 98217 05154,</a>
                <a href="tel:+918291440922" className="mob-book" style={{ fontSize: '18px', color: '#000', textDecoration: 'none', fontWeight: 500 }}>+91 82914 40922</a>
              </p>
            </div>
            <div className="menu-part2">
              <nav id="mega-menu-wrap-max_mega_menu_1">
                <ul className="d-flex list-unstyled gap-4">
                  <li className="mega-menu-item"><NavLink to="/" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-dark active' : 'text-dark'} animate__animated animate__fadeIn`}>Home</NavLink></li>
                  <li className="mega-menu-item"><NavLink to="/about" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-dark active' : 'text-dark'} animate__animated animate__fadeIn`}>About Us</NavLink></li>
                  <li className="mega-menu-item"><NavLink to="/food-menu" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-dark active' : 'text-dark'} animate__animated animate__fadeIn`}>Food Menu</NavLink></li>
                  <li className="mega-menu-item"><NavLink to="/services" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-dark active' : 'text-dark'} animate__animated animate__fadeIn`}>Services</NavLink></li>
                  <li className="mega-menu-item"><NavLink to="/gallery" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-dark active' : 'text-dark'} animate__animated animate__fadeIn`}>Gallery</NavLink></li>
                  <li className="mega-menu-item"><NavLink to="/contact" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-dark active' : 'text-dark'} animate__animated animate__fadeIn`}>Contact Us</NavLink></li>
                </ul>
              </nav>
            </div>
            <div className="menu-part1 d-none" id="m2">
              <p className="d-flex gap-2 align-items-center animate__animated animate__fadeIn">
                <a href="#" className="for-book btn" style={{ backgroundColor: '#760400', color: 'white', padding: '7px 20px', textDecoration: 'none' }}>For Booking</a>
                <a href="tel:+919821705154" className="mob-book" style={{ fontSize: '18px', color: '#000', textDecoration: 'none', fontWeight: 500 }}>+91 98217 05154,</a>
                <a href="tel:+918291440922" className="mob-book" style={{ fontSize: '18px', color: '#000', textDecoration: 'none', fontWeight: 500 }}>+91 82914 40922</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;