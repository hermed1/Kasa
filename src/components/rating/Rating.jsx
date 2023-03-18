import React from 'react';
import review_star from '../../assets/review_star.png';
import review_star_grey from '../../assets/review_star_grey.png';
import './Rating.css';

const Rating = ({ rating }) => {
  // creating an array of length equal to the rating input value
  const ratingArray = Array.from({ length: rating });
  // creating an array of length which is subtraction of 5 minus the rating input value
  const greyStarsArray = Array.from({ length: 5 - rating });
  return (
    <div>
      {ratingArray.map((_, index) => (
        <img
          key={index}
          src={review_star}
          alt='red star'
          className='rating_star'
        />
      ))}
      {greyStarsArray.map((_, index) => (
        <img
          key={`grey-${index}`}
          src={review_star_grey}
          alt='grey star'
          className='rating_star'
        />
      ))}
    </div>
  );
};

export default Rating;
