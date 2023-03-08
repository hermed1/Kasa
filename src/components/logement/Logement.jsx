import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import datas from '../../assets/logements.json';
import arrowLeft from '../../assets/carousel_arrow_left.png';
import arrowRight from '../../assets/carousel_arrow_right.png';
import './Logement.css';
import Collapse from '../collapse/Collapse';
// import review_star from '../../assets/review_star.png';

const Logement = () => {
  const params = useParams();
  const pageId = params.productId;
  const [logement, setLogement] = useState({});
  const [picture, setPicture] = useState(null);
  // const [pictures, setPictures] = useState([]);
  const numberOfPictures =
    logement && logement.pictures && logement.pictures.length;
  const indexCount =
    logement && logement.pictures && logement.pictures.indexOf(picture) + 1;

  // useEffect(() => {
  //   setPicture(pictures[0]);
  // }, [pictures]);
  //pourquoi pas au chargement de la page ?
  //récupération de toutes les données du logement
  useEffect(() => {
    fetch('./logements.json')
      .then((response) => response.json())
      .then((logements) => {
        console.log(logements);
        const logementInfos = logements.find(
          (element) => element.id === pageId
        );
        setLogement(logementInfos);
        setPicture(logementInfos.pictures[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  //récupération de toutes les photos du logement
  // useEffect(() => {
  //   fetch(datas)
  //     .then(
  //       setPictures(datas.find((element) => element.id === pageId).pictures)
  //     )
  //     .catch((err) => console.log(err));
  // }, []);

  const handleClickLeft = () => {
    const index = logement.pictures.indexOf(picture);
    if (index > 0) {
      setPicture(logement.pictures[index - 1]);
    } else {
      setPicture(logement.pictures[logement.pictures.length - 1]);
    }
  };

  const handleClickRight = () => {
    const index = logement.pictures.indexOf(picture);
    if (index < logement.pictures.length - 1) {
      setPicture(logement.pictures[index + 1]);
    } else {
      setPicture(logement.pictures[0]);
    }
  };

  return (
    Object.keys(logement).length > 0 && (
      <div className='carousel__container'>
        <div className='carousel'>
          {picture && (
            <img
              className='carousel__image'
              src={picture}
              alt='image_logement'
            />
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
        {/* <div className='host'>
        <div className='host'>
          <p className='host__name'>{logement.host.name}</p>
          <img className='host__picture' src={logement.host.picture} alt='' />
        </div>
        <div><img src={review_star} alt='note' /></div>
      </div> */}
        {/* marche pas sans le "&&"" */}
        <div className='host__tags'>
          {logement.tags &&
            logement.tags.map((tag) => (
              <p key={tag} className='host__tag'>
                {tag}
              </p>
            ))}
        </div>
        <div className='collapse__container'>
          <Collapse
            title='Description'
            content={logement.description}
            className='collapse__logement'
          />
          {logement.equipments && (
            <Collapse
              title='Equipements'
              content={logement.equipments.map((item) => (
                <p className='housing__equipments'>{item}</p>
              ))}
              className='collapse__logement'
            />
          )}
        </div>
      </div>
    )
  );
};

export default Logement;
