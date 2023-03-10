import React from 'react';
import review_star from '../../assets/review_star.png';
import review_star_grey from '../../assets/review_star_grey.png';
import './Rating.css';

const Rating = ({ rating }) => {
  const ratingArray = Array.from({ length: rating });
  const greyStarsArray = Array.from({ length: 5 - rating });
  console.log(greyStarsArray);
  return (
    <div>
      {ratingArray.map((index) => (
        <img
          key={index}
          src={review_star}
          alt='red star'
          className='rating_star'
        />
      ))}
      {greyStarsArray.map((index) => (
        <img
          key={index}
          src={review_star_grey}
          alt='grey star'
          className='rating_star'
        />
      ))}
    </div>
  );
};

export default Rating;
