import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/450'
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === currentImage ? 'active' : ''}
            src={image}
            alt="slider"
          />
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevImage} disabled={currentImage === 0} className={currentImage === 0 ? 'disabled' : ''}>
          Prev
        </button>
        <button onClick={nextImage} disabled={currentImage === images.length - 1} className={currentImage === images.length - 1 ? 'disabled' : ''}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
