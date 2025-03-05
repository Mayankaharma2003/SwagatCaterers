import React from 'react';

const MuhurthamLunch = () => {
  return (
    <>
      <section className="banner animate__animated animate__fadeIn">
        <div className="inner-banner">
          <div className="inner-banner-con">
            <h2>Muhurtham Lunch - Iyer</h2>
          </div>
        </div>
      </section>

      <section className="content-area">
        <div className="menu-sec py-5">
          <div className="container">
            <div className="mennu-inner d-flex flex-column flex-md-row justify-content-center">
              <div className="menu-con d-flex align-items-center gap-4 w-100 animate__animated animate__fadeInUp">
                <div className="mune-img" style={{ width: '50%' }}>
                  <img src="https://www.srinivasanevents.com/wp-content/uploads/2024/09/food-cat-1.jpg" alt="Muhurtham Lunch" className="w-100" />
                </div>
                <div className="menu-ta" style={{ width: '50%' }}>
                  <h3 className="text-760400 mb-3" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '30px' }}>Muhurtham Lunch - Iyer</h3>
                  <p style={{ fontSize: '16px', textAlign: 'left' }}>A traditional Iyer wedding lunch featuring:</p>
                  <ul className="list-unstyled mt-2">
                    <li className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000', marginBottom: '10px' }}>Sambar</li>
                    <li className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000', marginBottom: '10px', animationDelay: '0.2s' }}>Rasam</li>
                    <li className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000', marginBottom: '10px', animationDelay: '0.4s' }}>Kootu</li>
                    <li className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000', marginBottom: '10px', animationDelay: '0.6s' }}>Poriyal</li>
                    <li className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000', marginBottom: '10px', animationDelay: '0.8s' }}>Payasam</li>
                    <li className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000', marginBottom: '10px', animationDelay: '1s' }}>Rice and Ghee</li>
                  </ul>
                </div>
              </div>
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

export default MuhurthamLunch;