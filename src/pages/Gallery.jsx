import React, { useState } from 'react';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const galleryData = [
    {
      id: 'album-1',
      title: 'Wedding Decor',
      count: 7,
      images: [
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/g12.jpg',
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/g16.jpg'
      ]
    },
    {
      id: 'album-2',
      title: 'Catering Setup',
      count: 6,
      images: [
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/Beautician.jpg',
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/g13.jpg'
      ]
    },
    {
      id: 'album-3',
      title: 'Ceremonial Items',
      count: 7,
      images: [
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/Thamboola-Bags2.jpg',
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/Angumani-Seer2.jpg'
      ]
    }
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <>
      <section className="banner animate__animated animate__fadeIn">
        <div className="inner-banner">
          <div className="inner-banner-con">
            <h2>Gallery</h2>
          </div>
        </div>
      </section>

      <section className="gallery py-4" style={{ backgroundColor: '#f6f0ea' }}>
        <div className="container">
          <div className="aigpl-gallery-album-wrp d-flex flex-wrap gap-3 justify-content-center animate__animated animate__fadeInUp">
            {galleryData.map((album) => (
              <div key={album.id} className="aigpl-cnt-wrp" style={{ width: 'calc(33.33% - 20px)', minWidth: '250px' }}>
                <div className="aigpl-inr-wrp bg-white rounded overflow-hidden shadow-sm position-relative" onClick={() => openLightbox(album.images[0])} style={{ transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className="aigpl-img-wrp">
                    <img src={album.images[0]} alt={album.title} className="w-100 h-100 object-fit-cover" style={{ height: '300px' }} />
                  </div>
                  <div className="aigpl-img-count text-center py-2 text-760400" style={{ fontSize: '14px' }}>{album.count} Photos</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="lightbox position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style={{ zIndex: 1000 }} onClick={closeLightbox}>
          <span className="position-absolute top-3 end-3 text-white fs-1 cursor-pointer" onClick={closeLightbox}>×</span>
          <div className="lightbox-content">
            <img src={currentImage} alt="Gallery Image" className="w-75 h-auto rounded animate__animated animate__zoomIn" />
          </div>
        </div>
      )}

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

export default Gallery;