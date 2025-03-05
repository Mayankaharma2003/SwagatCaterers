import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="banner animate__animated animate__fadeIn">
        <div className="inner-banner">
          <div className="inner-banner-con">
            <h2>Contact Us</h2>
          </div>
        </div>
      </section>

      <section className="content-area">
        <div className="contact-recr py-5 animate__animated animate__fadeIn" style={{ backgroundImage: `url('https://www.srinivasanevents.com/wp-content/uploads/2024/10/07-3.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="container">
            <div className="inner-contact-recr d-flex justify-content-end">
              <div className="contact-box2 p-4 animate__animated animate__fadeInRight" style={{ background: '#eaeaea', maxWidth: '600px', marginLeft: '15%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '10px' }}>
                <h3 className="text-a52a2a text-center mb-4" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '30px' }}>Send Us a Message</h3>
                <form className="contact-form-static">
                  <div className="tw-dis d-flex gap-3 mb-3">
                    <div className="fst-hf animate__animated animate__fadeInUp" style={{ width: '50%' }}>
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Name</h5>
                      <input type="text" name="your-name" placeholder="Your Name" required className="w-100 p-3 rounded-pill border-0" />
                    </div>
                    <div className="fst-hf animate__animated animate__fadeInUp" style={{ width: '50%' }}>
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>What is the occasion?</h5>
                      <input type="text" name="occasion" placeholder="Occasion" required className="w-100 p-3 rounded-pill border-0" />
                    </div>
                  </div>
                  <div className="tw-dis d-flex gap-3 mb-3">
                    <div className="fst-hf animate__animated animate__fadeInUp" style={{ width: '50%' }}>
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Email</h5>
                      <input type="email" name="your-email" placeholder="Your Email" required className="w-100 p-3 rounded-pill border-0" />
                    </div>
                    <div className="fst-hf animate__animated animate__fadeInUp" style={{ width: '50%' }}>
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Date of the occasion</h5>
                      <input type="text" name="date" placeholder="Date" required className="w-100 p-3 rounded-pill border-0" />
                    </div>
                  </div>
                  <div className="tw-dis d-flex gap-3 mb-3">
                    <div className="fst-hf animate__animated animate__fadeInUp" style={{ width: '50%' }}>
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Phone</h5>
                      <input type="number" name="phone" placeholder="Your Phone" required className="w-100 p-3 rounded-pill border-0" />
                    </div>
                    <div className="fst-hf animate__animated animate__fadeInUp" style={{ width: '50%' }}>
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>No. of guests</h5>
                      <input type="text" name="guests" placeholder="Number of Guests" required className="w-100 p-3 rounded-pill border-0" />
                    </div>
                  </div>
                  <div className="subject animate__animated animate__fadeInUp">
                    <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Subject</h5>
                    <input type="text" name="your-subject" placeholder="Subject" required className="w-100 p-3 rounded border-0" style={{ borderRadius: '19px' }} />
                  </div>
                  <p><input type="submit" value="Send Enquiry" className="submit-btn btn w-auto mt-3 animate__animated animate__fadeInUp" style={{ background: '#760400', color: 'white', padding: '10px 20px', borderRadius: '50px' }} onClick={(e) => { e.preventDefault(); alert('This is a static demo. Form submission is not functional.'); }} /></p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="con-sec-2 py-5 animate__animated animate__fadeIn" style={{ background: '#f7f0eb' }}>
          <div className="container">
            <div className="inn-con-sec-2 d-flex flex-column flex-md-row gap-4">
              <div className="con-sec2-left animate__animated animate__fadeInLeft" style={{ width: '50%' }}>
                <h3 className="text-770401 mb-3" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '39px', lineHeight: '40px' }}>Get an answer to your catering question</h3>
                <p className="animate__animated animate__fadeInLeft" style={{ fontSize: '16px', color: '#000' }}>We’d love to hear from you. Please tell us about the event you would like us to create.</p>
              </div>
              <div className="con-sec2-right animate__animated animate__fadeInRight" style={{ width: '50%' }}>
                <div className="contact-details-content py-3">
                  <h4 className="text-a52b2b mb-3" style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '24px' }}>Contact</h4>
                  <div className="social d-flex gap-3 mb-3 animate__animated animate__fadeInUp">
                    <div className="soc-icon"><i className="fa-solid fa-location-pin" style={{ color: '#ebc6a4', background: '#fff', padding: '13px 15px', fontSize: '18px', borderRadius: '50px' }}></i></div>
                    <div className="soc-icon">
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}>Office</h5>
                      <a href="#" className="text-gray text-decoration-none" style={{ fontSize: '16px' }}>Gala No.27, Old Ramgopal Industrial Estate, Mumbai-400 080</a>
                    </div>
                  </div>
                  <div className="social d-flex gap-3 mb-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                    <div className="soc-icon"><i className="fa-solid fa-phone-volume" style={{ color: '#ebc6a4', background: '#fff', padding: '13px 15px', fontSize: '18px', borderRadius: '50px' }}></i></div>
                    <div className="soc-icon">
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}>Phone</h5>
                      <a href="tel:+919821705154" className="text-gray text-decoration-none" style={{ fontSize: '16px' }}>+91 98217 05154, +91 82914 40922</a>
                    </div>
                  </div>
                  <div className="social d-flex gap-3 mb-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <div className="soc-icon"><i className="fa-solid fa-envelope" style={{ color: '#ebc6a4', background: '#fff', padding: '13px 15px', fontSize: '18px', borderRadius: '50px' }}></i></div>
                    <div className="soc-icon">
                      <h5 style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}>Email</h5>
                      <a href="mailto:service@swagatshreecaterers.com" className="text-gray text-decoration-none" style={{ fontSize: '16px' }}>service@swagatshreecaterers.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="google-map d-flex justify-content-center mt-3 pb-5 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.436575712505!2d72.9527701!3d19.1795098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c617c955556b%3A0xd0f7235b5969fa7f!2sSrinivasan%20Events%20%26%20Caterers!5e0!3m2!1sen!2sin!4v1730794909874!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;