import React from 'react';
import './carousel.css';
import Prod1 from '../imgs/Prod1.jpg';
import Prod2 from '../imgs/Prod2.jpg';

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Prod1} className="d-block w-100" alt="Clothings" />
        </div>
        <div className="carousel-item">
          <img src={Prod2} className="d-block w-100" alt="Gadgets" />
        </div>
        <div className="carousel-item">
          <img src={Prod1} className="d-block w-100" alt="Product 1 description" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}