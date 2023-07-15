import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Gallery from "./Gallery";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [selected, setSelected] = useState(false);

  const nextSlide = () => {
    setSlide(slide === data.length-1 ? 0 : slide+1)
}

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length-1 : slide-1)
  }

  const handleClick = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  const handleNext = () => {
    setShowGallery(true);
  };

  const imageStyle = {
    border: selected ? "5px solid yellow" : "none",
  };

  if (showGallery) {
    return <Gallery />;
  }

  return (
    <>
    <h1>Tell us your favourite moment of this event!</h1>
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
            style={imageStyle}
        onClick={handleClick}
          />
        );
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button className={slide === idx ? "indicator" : "indicator indicator-inactive"} key={idx} onClick={() => {
                setSlide(idx)
            }}></button>
          );
        })}
      </span>

       

    </div>
    <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Carousel;
