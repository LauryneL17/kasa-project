import React, { useState } from "react";
import "../styles/Appartement.css";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.length > 1 && (
          <button className="button-change" onClick={goToPreviousSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}
        <img
          className="button-banner"
          src={images[currentImageIndex]}
          alt="images banières"
        />
        {images.length > 1 && (
          <button className="button-change" onClick={goToNextSlide}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div className="image-counter">
          <span>{currentImageIndex + 1}</span>
          <span> / {images.length}</span>
        </div>
      )}
    </div>
  );
};

export default Slider;
