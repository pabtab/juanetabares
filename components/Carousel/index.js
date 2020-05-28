import React from "react";

import './styles.scss'

const CarouselCustom = () => {
  return (
    <div id="carousel-demo" class="carousel">
      <div class="item-1">
        <img className="carousel-images" src="assets/images/cons.JPG" />
      </div>
      <div class="item-2">
        <img className="carousel-images" src="assets/images/dr.JPG" />
      </div>
      <div class="item-3">
        <img className="carousel-images" src="assets/images/cons2.JPG" />
      </div>
      <div class="item-4">
        <img className="carousel-images" src="assets/images/cons-outside2.JPG" />
      </div>
    </div>
  );
};

export default CarouselCustom;
