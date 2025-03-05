import React, { useState } from 'react';
import { useGallery } from '../contexts/GalleryContext';

const Lightbox = () => {
  const { isOpen, currentImage, closeLightbox, nextImage, prevImage } = useGallery();

  return (
    <>
      {isOpen && (
        <div className="lightbox position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center animate__animated animate__fadeIn" style={{ zIndex: 1000 }} onClick={closeLightbox}>
          <span className="position-absolute top-3 end-3 text-white fs-1 cursor-pointer" onClick={closeLightbox}>×</span>
          <button className="position-absolute start-0 top-50 translate-middle-y btn btn-link text-white fs-3" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&lt;</button>
          <div className="lightbox-content position-relative">
            <img src={currentImage} alt="Gallery Image" className="w-75 h-auto rounded animate__animated animate__zoomIn" />
          </div>
          <button className="position-absolute end-0 top-50 translate-middle-y btn btn-link text-white fs-3" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&gt;</button>
        </div>
      )}
    </>
  );
};

export default Lightbox;