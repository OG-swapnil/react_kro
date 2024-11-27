import React, { useState } from 'react';
import './cards.css';
import P1 from '../imgs/1.jpg';
import Review from './review';

export default function Cards() {
  const [text, setText] = useState(" ");

  const generateReview = () => {
    alert("Product Added to Cart")
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={P1} className="card-img-top" alt="dress" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>

        <Review />
        <a className="btn btn-primary mx-3" onClick={generateReview}>Add to Cart</a>
        <a href='/' className='btn btn-primary'>Review</a>
      </div>
    </div>
  );
}