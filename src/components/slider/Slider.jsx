import React, {useState} from "react";
import "./Slider.css";
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import {sliderItems} from "../../data";

const Slider = () => {
  // membuat slider aktif
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      {/* memberikan onclick  */}
      <div
        className="arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <IoMdArrowDropleft className="icon" />
      </div>

      <div
        className="slider-wrapper"
        style={{transform: `translatex(${slideIndex * -100}vw)`}}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="slide"
            style={{backgroundColor: `#${item.bg}`}}
          >
            <div className="img-container">
              <img src={item.img} alt="" className="img" />
            </div>
            <div className="info-container">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="arrow"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <IoMdArrowDropright className="icon" />
      </div>
    </div>
  );
};

export default Slider;
