import React from "react";
import Slider from "infinite-react-carousel";
import "./slider.css";

const SimpleSlider = () => (
  <div>
    div>
    {/* Slideshow container */}
    <div className="slideshow-container">
      {/* Full-width slides/quotes */}
      <div className="mySlides">
        <q>
          I love you the more in that I believe you had liked me for my own sake
          and for nothing else
        </q>
        <p className="author">- John Keats</p>
      </div>
      <div className="mySlides">
        <q>
          But man is not made for defeat. A man can be destroyed but not
          defeated.
        </q>
        <p className="author">- Ernest Hemingway</p>
      </div>
      <div className="mySlides">
        <q>I have not failed. I've just found 10,000 ways that won't work.</q>
        <p className="author">- Thomas A. Edison</p>
      </div>
      {/* Next/prev buttons */}
      <a className="prev" onclick="plusSlides(-1)">
        ❮
      </a>
      <a className="next" onclick="plusSlides(1)">
        ❯
      </a>
    </div>
    {/* Dots/bullets/indicators */}
    <div className="dot-container">
      <span className="dot" onclick="currentSlide(1)" />
      <span className="dot" onclick="currentSlide(2)" />
      <span className="dot" onclick="currentSlide(3)" />
    </div>
  </div>
);
export default SimpleSlider;
