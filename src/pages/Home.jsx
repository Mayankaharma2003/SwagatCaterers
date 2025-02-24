import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Swagat Shree - Home</title>
        <meta name="description" content="Savor the Tradition, Taste the Cloud! Your one-stop destination for event management and catering." />
      </Helmet>
      <div className="home">
        {/* Header Section */}
        <header className="header">
          <div className="logo">Swagat Shree</div>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Savor the Tradition, Taste the Cloud!</h1>
            <p>Your one-stop destination for event management and catering.</p>
            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            At Swagat Shree, we specialize in preparing authentic South Indian cuisine for your special events. Whether you're planning a wedding, a corporate gathering, or a birthday celebration, our experienced team is dedicated to offering an unforgettable culinary experience that highlights the rich heritage of South Indian cuisine.
          </p>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Wedding Planning</h3>
              <p>From traditional ceremonies to modern receptions, we handle every detail to make your wedding day unforgettable.</p>
            </div>
            <div className="service-card">
              <h3>Corporate Events</h3>
              <p>We organize seamless corporate events, from conferences to team-building activities.</p>
            </div>
            <div className="service-card">
              <h3>Birthday Parties</h3>
              <p>Celebrate your special day with our customized birthday party packages.</p>
            </div>
            <div className="service-card">
              <h3>Catering</h3>
              <p>From traditional South Indian meals to modern fusion dishes, we cater to all your culinary needs.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img src="/images/gallery1.jpg" alt="Gallery 1" />
            <img src="/images/gallery2.jpg" alt="Gallery 2" />
            <img src="/images/gallery3.jpg" alt="Gallery 3" />
            <img src="/images/gallery4.jpg" alt="Gallery 4" />
            <img src="/images/gallery5.jpg" alt="Gallery 5" />
            <img src="/images/gallery6.jpg" alt="Gallery 6" />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"The food was amazing, and the service was top-notch. Highly recommend Swagat Shree for any event!"</p>
              <p>- Happy Client, 2023</p>
            </div>
            <div className="testimonial-card">
              <p>"Swagat Shree made our wedding day truly special. Everything was perfect!"</p>
              <p>- John & Priya, 2022</p>
            </div>
            <div className="testimonial-card">
              <p>"The best catering service we've ever experienced. Delicious food and professional staff."</p>
              <p>- Corporate Client, 2021</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: info@swagatshree.com</p>
              <p>Phone: +91 1234567890</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <a href="https://facebook.com">Facebook</a>
              <a href="https://instagram.com">Instagram</a>
              <a href="https://twitter.com">Twitter</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Swagat Shree. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { events } from '../data';

// const Home = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="home"
//     >
//       <h1>Welcome to Swagat Shree</h1>
//       <p>Your one-stop destination for event management.</p>
//       <img src="/images/home-banner.jpg" alt="Home Banner" />
//       <div className="events-grid">
//         {events.map((event) => (
//           <motion.div
//             key={event.id}
//             whileHover={{ scale: 1.05 }}
//             className="event-card"
//           >
//             <img src={event.image} alt={event.title} />
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Home;


// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { events } from '../data';

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Swagat Shree - Home</title>
//         <meta name="description" content="Your one-stop destination for event management." />
//       </Helmet>
//       <div className="home">
//         <h1>Welcome to Swagat Shree</h1>
//         <p>Your one-stop destination for event management.</p>
//         <div className="events-grid">
//           {events.map((event) => (
//             <div key={event.id} className="event-card">
//               <img src={event.image} alt={event.title} loading="lazy"/>
//               <h3>{event.title}</h3>
//               <p>{event.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { events } from '../data';

// const Home = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="home"
//     >
//       <h1>Welcome to Swagat Shree</h1>
//       <p>Your one-stop destination for event management.</p>
//       <div className="events-grid">
//         {events.map((event) => (
//           <motion.div
//             key={event.id}
//             whileHover={{ scale: 1.05 }}
//             className="event-card"
//           >
//             <img src={event.image} alt={event.title} />
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Home;






// import React from 'react';

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to Swagat Shree</h1>
//       <p>Your one-stop destination for event management.</p>
//       <img src="/images/home-banner.jpg" alt="Home Banner" />
//       <h1>Welcome to Swagat Shree</h1>
//       <p>Your one-stop destination for event management.</p>
//       <div className="events-grid">
//         {events.map((event) => (
//           <div key={event.id} className="event-card">
//             <img src={event.image} alt={event.title} />
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;