import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../assets/logements.json';
import arrowLeft from '../../assets/carousel_arrow_left.png';
import arrowRight from '../../assets/carousel_arrow_right.png';
import './Logement.css';
import Collapse from '../collapse/Collapse';
import review_star from '../../assets/review_star.png';

const Logement = () => {
  const params = useParams();
  const pageId = params.productId;
  const [logement, setLogement] = useState({});
  const [picture, setPicture] = useState(null);
  const [pictures, setPictures] = useState([]);
  const numberOfPictures = pictures && pictures.length;
  const host = logement && logement.host;

  const indexCount = pictures && pictures.indexOf(picture) + 1;

  useEffect(() => {
    fetch(datas)
      .then(setLogement(datas.find((element) => element.id === pageId)))
      .catch((err) => console.log(err));
    logement && setPictures(logement.pictures);
    pictures && setPicture(pictures[0]);
  }, [logement, pictures]);

  const handleClickLeft = () => {
    const index = pictures.indexOf(picture);
    if (index > 0) {
      setPicture(pictures[index - 1]);
    } else {
      setPicture(pictures[pictures.length - 1]);
    }
  };

  const handleClickRight = () => {
    const index = pictures.indexOf(picture);
    if (index < pictures.length - 1) {
      setPicture(pictures[index + 1]);
    } else {
      setPicture(pictures[0]);
    }
  };

  return (
    <div className='carousel__container'>
      <div className='carousel'>
        {picture && (
          <img className='carousel__image' src={picture} alt='image_logement' />
        )}
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
        {numberOfPictures > 1 ? (
          <p className='carousel__count'>
            {indexCount}/{numberOfPictures}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className='housing'>
        <h2 className='housing__title'>{logement.title}</h2>
        <p className='housing__location'>{logement.location}</p>
      </div>
      <div className='host__tags'>
        {logement.tags &&
          logement.tags.map((tag, index) => (
            <p key={index} className='host__tag'>
              {tag}
            </p>
          ))}
      </div>

      {host && (
        <div className='host'>
          <div className='host'>
            <p className='host__name'>{host.name}</p>
            <img className='host__picture' src={host.picture} alt='' />
          </div>
          <div>
            <img src={review_star} alt='note' />
          </div>
        </div>
      )}
      <div className='collapse__container'>
        <Collapse
          title='Description'
          content={logement.description}
          className='collapse__logement'
        />
        {logement.equipments && (
          <Collapse
            title='Equipements'
            content={logement.equipments.map((item, index) => (
              <p key={index} className='housing__equipments'>
                {item}
              </p>
            ))}
            className='collapse__logement'
          />
        )}
      </div>
    </div>
  );
};

export default Logement;
