export const addReview = (rating, comment, reviews, setReviews) => {
    setReviews([...reviews, { rating, comment }]);
};