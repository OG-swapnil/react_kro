import React, { useState } from 'react';
import './cards.css';
import P1 from '../imgs/1.jpg';
import Review from '../Review';
import { Link } from 'react-router-dom';

export default function Cards({ cardId, reviews, addReview }) {
    // Cards.defaultProps = {
    //     addReview: () => {}, // Default to an empty function
    // };
    const [text, setText] = useState("Add to Cart");
    const [init, setInit] = useState(0);

    const generateReview = () => {
        setInit(prevInit => prevInit + 1);
        setText("Cart " + (init + 1));
    };

    const handleAddReview = (rating, comment) => {
        console.log('addReview prop:', addReview);
        addReview(cardId, rating, comment);
    };

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={P1} className="card-img-top" alt="dress" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <Review addReview={handleAddReview} />
                {/* Button for adding to cart */}
                <button className="btn btn-primary mx-3" onClick={generateReview}>
                    {text}
                </button>
                {/* Link to navigate to the Review component */}
                <Link 
                    to="/Review" 
                    className='btn btn-primary' 
                    data-bs-toggle="modal" 
                    data-bs-target="#modal"
                >
                    Review
                </Link>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <h5>Rating: {review.rating}</h5>
                            <p>{review.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}