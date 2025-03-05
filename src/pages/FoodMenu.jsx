import React from 'react';

const FoodMenu = () => {
  return (
    <>
      <section className="banner animate__animated animate__fadeIn">
        <div className="inner-banner">
          <div className="inner-banner-con">
            <h2>Food Menu</h2>
          </div>
        </div>
      </section>

      <section className="content-area">
        <div className="cat-con py-5">
          <div className="container">
            <div className="food-para text-center">
              <h5 className="text-8d021f mb-3 animate__animated animate__fadeInUp" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '24px' }}>Our South Indian Delicacies</h5>
              <p className="animate__animated animate__fadeInUp" style={{ fontSize: '16px', color: '#000' }}>Discover the rich flavors of South India with Swagat Shree Caterers. Our menu features authentic Iyer and Iyengar dishes tailored for every occasion.</p>
            </div>
            <div className="cat-con-inner d-flex flex-column flex-md-row align-items-center gap-5 mt-4 animate__animated animate__fadeInUp">
              <div className="con-left" style={{ width: '50%' }}>
                <img src="https://www.srinivasanevents.com/wp-content/uploads/2024/09/food-cat-1.jpg" alt="South Indian Food" className="w-100" />
              </div>
              <div className="con-right" style={{ width: '50%' }}>
                <h3 className="text-760400 mb-3" style={{ fontSize: '30px', lineHeight: '45px', fontWeight: 500 }}>Muhurtham Lunch - Iyer</h3>
                <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '27px', marginBottom: '10px' }}>A traditional Iyer-style lunch menu perfect for wedding ceremonies, featuring a variety of rice dishes, curries, and sweets.</p>
                <div className="button-sec text-center">
                  <a href="/muhurtham-lunch-iyer" className="btn animate__animated animate__fadeInUp" style={{ backgroundColor: '#760400', color: 'white', padding: '10px 34px', fontSize: '20px', textDecoration: 'none' }}>View Menu</a>
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

export default FoodMenu;