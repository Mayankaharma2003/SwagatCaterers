import React from 'react';

const Home = () => {
  return (
    <>
      <section className="banner animate__animated animate__fadeIn">
        <div className="inner-banner">
          <div className="inner-banner-con">
            <h2>Welcome to Srinivasan Events and Caterers</h2>
          </div>
        </div>
      </section>

      <section className="content-area py-5">
        <div className="container text-center">
          <h3 className="text-760400 mb-3 animate__animated animate__fadeInUp" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '30px' }}>
            South Indian Catering Service in Mumbai
          </h3>
          <p className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000', marginBottom: '20px' }}>
            Experience authentic South Indian Catering Service in Mumbai! Iyer and Iyengar dishes crafted with love. Your top choice for Mumbai's best catering!
          </p>
          <div className="button-sec">
            <a href="/contact" className="btn animate__animated animate__fadeInUp" style={{ backgroundColor: '#760400', color: 'white', padding: '10px 34px', fontSize: '20px', textDecoration: 'none' }}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="homepage-sec-2 py-5" style={{ backgroundImage: `url('/images/hero-bg.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 animate__animated animate__fadeInLeft" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
              <h4 className="text-760400 mb-3" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '24px' }}>Our Services</h4>
              <ul className="list-unstyled" style={{ fontSize: '16px', color: '#000' }}>
                <li className="animate__animated animate__fadeInUp" style={{ marginBottom: '10px' }}>South Indian Catering</li>
                <li className="animate__animated animate__fadeInUp" style={{ marginBottom: '10px', animationDelay: '0.2s' }}>Wedding Planning</li>
                <li className="animate__animated animate__fadeInUp" style={{ marginBottom: '10px', animationDelay: '0.4s' }}>Event Management</li>
                <li className="animate__animated animate__fadeInUp" style={{ marginBottom: '10px', animationDelay: '0.6s' }}>Ceremonial Items</li>
              </ul>
            </div>
            <div className="col-md-6 mb-4 animate__animated animate__fadeInRight" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
              <h4 className="text-760400 mb-3" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '24px' }}>Why Choose Us?</h4>
              <p style={{ fontSize: '16px', color: '#000' }}>
                Since 2012, we’ve been delivering authentic South Indian cuisine and event services with passion and precision. Our commitment to quality and tradition makes us the preferred choice in Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="seo-foo animate__animated animate__fadeIn">
        <div className="container">
          <div className="see-foo-inner">
            <h3 className="text-760400 mb-4" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '36px' }}>Our Services Area</h3>
            <div className="se-se d-flex flex-wrap gap-3">
              <div className="se-leee flex-fill">
                <div className="b"><a href="#" className="text-713c3f text-decoration-none">Our Services in Mumbai</a></div>
                <div className="b"><a href="#" className="text-713c3f text-decoration-none">Our Services in Baroda</a></div>
                <div className="b"><a href="#" className="text-713c3f text-decoration-none">Our Services in Pune</a></div>
                <div className="b"><a href="#" className="text-713c3f text-decoration-none">Our Services in Bengaluru</a></div>
              </div>
              <div className="se-leee flex-fill">
                <div className="b"><a href="#" className="text-713c3f text-decoration-none">Our Services in Chennai</a></div>
                <div className="b"><a href="#" className="text-713c3f text-decoration-none">Our Services in Thirchy</a></div>
                <div className="b"><a href="#" className="text-713c3f text-decoration-none">Our Services in Hyderabad</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;