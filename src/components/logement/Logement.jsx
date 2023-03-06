import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../assets/logements.json';
import arrowLeft from '../../assets/carousel_arrow_left.png';
import arrowRight from '../../assets/carousel_arrow_right.png';
import './Logement.css';

const Logement = () => {
  const params = useParams();
  const pageId = params.productId;
  const [logement, setLogement] = useState([]);
  const [picture, setPicture] = useState(null);
  const numberOfPictures = logement.length;
  const indexCount = logement.indexOf(picture) + 1;

  useEffect(() => {
    setPicture(logement[0]);
  }, [logement]);
  //pourquoi pas au chargement de la page ?
  useEffect(() => {
    fetch(datas)
      .then(
        setLogement(datas.find((element) => element.id === pageId).pictures)
      )
      .catch((err) => console.log(err));
  }, []);

  const handleClickLeft = () => {
    const index = logement.indexOf(picture);
    if (index > 0) {
      setPicture(logement[index - 1]);
    } else {
      setPicture(logement[logement.length - 1]);
    }
  };

  const handleClickRight = () => {
    const index = logement.indexOf(picture);
    if (index < logement.length - 1) {
      setPicture(logement[index + 1]);
    } else {
      setPicture(logement[0]);
    }
  };

  return (
    <div className='carousel__container'>
      <div className='carousel'>
        {picture && (
          <img className='carousel__image' src={picture} alt='image_logement' />
        )}
        <img
          className='carousel__arrow carousel__arrow__left'
          src={arrowLeft}
          alt='arrowLeft'
          onClick={() => handleClickLeft()}
        />
        <img
          className='carousel__arrow carousel__arrow__right'
          src={arrowRight}
          alt='arrowRight'
          onClick={() => handleClickRight()}
        />
        <p className='carousel__count'>
          {indexCount}/{numberOfPictures}
        </p>
      </div>
      <h2>{logement.title}</h2>
    </div>
  );
};

export default Logement;
