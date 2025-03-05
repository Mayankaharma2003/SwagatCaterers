import React, { createContext, useContext, useState } from 'react';

const GalleryContext = createContext();

export const useGallery = () => useContext(GalleryContext);

export const GalleryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = [
    {
      id: 'album-1',
      title: 'Wedding Decor',
      count: 7,
      images: [
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/g12.jpg',
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/g16.jpg',
      ]
    },
    {
      id: 'album-2',
      title: 'Catering Setup',
      count: 6,
      images: [
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/Beautician.jpg',
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/g13.jpg',
      ]
    },
    {
      id: 'album-3',
      title: 'Ceremonial Items',
      count: 7,
      images: [
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/Thamboola-Bags2.jpg',
        'https://www.srinivasanevents.com/wp-content/uploads/2024/09/Angumani-Seer2.jpg',
      ]
    }
  ];

  const openLightbox = (albumId, index = 0) => {
    const album = galleryData.find(item => item.id === albumId);
    if (album) {
      setCurrentAlbum(album);
      setCurrentImage(album.images[index]);
      setCurrentIndex(index);
      setIsOpen(true);
    }
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => {
    if (currentAlbum) {
      const newIndex = (currentIndex + 1) % currentAlbum.images.length;
      setCurrentIndex(newIndex);
      setCurrentImage(currentAlbum.images[newIndex]);
    }
  };

  const prevImage = () => {
    if (currentAlbum) {
      const newIndex = (currentIndex - 1 + currentAlbum.images.length) % currentAlbum.images.length;
      setCurrentIndex(newIndex);
      setCurrentImage(currentAlbum.images[newIndex]);
    }
  };

  return (
    <GalleryContext.Provider value={{ isOpen, currentImage, openLightbox, closeLightbox, nextImage, prevImage }}>
      {children}
    </GalleryContext.Provider>
  );
};