import React, { useState } from "react";
import "./Carousel.css";
import img from "../../../assets/images/pic-copy.jpg";
const images = [img, "img", img, "img", img, "img", img, "img", img];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="carousel-button"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className="carousel-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
