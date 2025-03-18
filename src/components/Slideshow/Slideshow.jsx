import React, { useState } from 'react';
import './Slideshow.css'; 


const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Si il n'y a qu'une seule image, on ne montre ni les flèches ni la numérotation
  if (images.length <= 1) {
    return <div className="slideshow-container">
      <img src={images[0]} alt="Slide" className="slide-image" />
    </div>;
  }

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      
      <button type="button" className="prev" onClick={goToPrevious}>
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-left fa-4x"><path fill="currentColor" d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z" class=""></path></svg>
      </button>
      <button type="button" className="next" onClick={goToNext}>
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-right fa-4x"><path fill="currentColor" d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z" class=""></path></svg>
      </button>
      
      <div className="slideshow-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Slideshow;
