import React, { useState, useEffect } from 'react';
import './review.css';
import {addReview }from '../functions/addReview';

export default function Review() { // Ensure addReview is received as a prop
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (typeof addReview === 'function') {
        addReview(rating, comment, reviews, setReviews); // Call the function to add the review
        // } else {
        //     console.error('addReview is not a function');
        // }
        console.log("SUCESS: " + comment);
        
        setRating('0'); // Reset rating
        setComment(''); // Reset comment
        setIsOpen(false); // Close the modal after submission
    };

    useEffect(() => {
        if (isOpen) {
            const firstFocusableElement = document.querySelector('.modal [autofocus]');
            if (firstFocusableElement) {
                firstFocusableElement.focus();
            }
        }
    }, [isOpen]);

    return (
        <div>
            <div id="modal" className="modal fade" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabel">Leave a Review</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="rating" className="form-label">Rating (1-5):</label>
                                    <input
                                        type="number"
                                        id="rating"
                                        className="form-control"
                                        min="1"
                                        max="5"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="comment" className="form-label">Comment:</label>
                                    <textarea
                                        id="comment"
                                        className="form-control"
                                        rows="3"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}