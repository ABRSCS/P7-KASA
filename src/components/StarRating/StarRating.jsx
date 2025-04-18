import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="star-rating">
            {stars.map((star) => (
                <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : 'empty'}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating; 