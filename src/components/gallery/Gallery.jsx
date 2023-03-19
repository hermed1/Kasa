import React from 'react';
import arrowLeft from '../../assets/carousel_arrow_left.png';
import arrowRight from '../../assets/carousel_arrow_right.png';

const Gallery = ({ picture, pictures, setPicture, numberOfPictures }) => {
  // Calculate the current index count of the displayed picture
  const indexCount = pictures && pictures.indexOf(picture) + 1;

  // Define a function to handle the click event for the left arrow
  const handleClickLeft = () => {
    const index = pictures.indexOf(picture);
    if (index > 0) {
      setPicture(pictures[index - 1]);
    } else {
      setPicture(pictures[pictures.length - 1]);
    }
  };

  // Define a function to handle the click event for the right arrow
  const handleClickRight = () => {
    const index = pictures.indexOf(picture);
    if (index < pictures.length - 1) {
      setPicture(pictures[index + 1]);
    } else {
      setPicture(pictures[0]);
    }
  };

  return (
    <div>
      <div className='carousel'>
        {/* Display the current picture */}
        {picture && (
          <img className='carousel__image' src={picture} alt='image_logement' />
        )}
        {/* Display the left arrow if there are more than one picture */}
        {numberOfPictures > 1 ? (
          <img
            className='carousel__arrow carousel__arrow__left'
            src={arrowLeft}
            alt='arrowLeft'
            onClick={() => handleClickLeft()}
          />
        ) : (
          ''
        )}
        {/* Display the right arrow if there are more than one picture */}
        {numberOfPictures > 1 ? (
          <img
            className='carousel__arrow carousel__arrow__right'
            src={arrowRight}
            alt='arrowRight'
            onClick={() => handleClickRight()}
          />
        ) : (
          ''
        )}
        {/* Display the picture index count if there are more than one picture */}
        {numberOfPictures > 1 ? (
          <p className='carousel__count'>
            {indexCount}/{numberOfPictures}
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Gallery;
