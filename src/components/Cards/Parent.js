// ParentComponent.js
import React, { useState } from 'react';
import Cards from './Cards';

const ParentComponent = () => {
    const [reviews, setReviews] = useState([]);

    const addReview = (cardId, rating, comment) => {
        // Logic to add the review
        const newReview = { id: Date.now(), rating, comment }; // Example review object
        setReviews(prevReviews => [...prevReviews, newReview]);
    };

    return (
        <div>
            <Cards cardId={1} reviews={reviews} addReview={addReview} />
        </div>
    );
};

export default ParentComponent;