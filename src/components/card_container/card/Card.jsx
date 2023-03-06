import React from 'react';
import './Card.css';

const Card = ({ id, title, image }) => {
  return (
    <div className='card'>
      <img src={image} id={id} alt={title} className='card__image' />
      <p className='card__title'>{title}</p>
    </div>
  );
};

export default Card;
