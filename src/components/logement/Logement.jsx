import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../assets/logements.json';

import './Logement.css';
import Collapse from '../collapse/Collapse';
import review_star from '../../assets/review_star.png';
import Gallery from '../gallery/Gallery';

const Logement = () => {
  const params = useParams();
  const pageId = params.productId;
  const [logement, setLogement] = useState({});
  const [picture, setPicture] = useState(null);
  const [pictures, setPictures] = useState([]);
  const numberOfPictures = pictures && pictures.length;

  const host = logement && logement.host;

  useEffect(() => {
    fetch(datas)
      .then(setLogement(datas.find((element) => element.id === pageId)))
      .catch((err) => console.log(err));
    logement && setPictures(logement.pictures);
    pictures && setPicture(pictures[0]);
  }, [logement, pictures]);

  return (
    <div className='carousel__container'>
      <Gallery
        pictures={pictures}
        picture={picture}
        setPicture={setPicture}
        numberOfPictures={numberOfPictures}
      />
      <div className='housing__container'>
        <div className='housing'>
          <div>
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
        </div>
        {host && (
          <div className='host'>
            <div className='host__infos'>
              <p className='host__name'>{host.name}</p>
              <img className='host__picture' src={host.picture} alt='' />
            </div>
            <div className='host__stars'>
              <img src={review_star} alt='note' />
            </div>
          </div>
        )}
      </div>
      <div className='collapse__container'>
        <Collapse
          title='Description'
          content={
            <p className='housing__description'>{logement.description}</p>
          }
          // content={logement.description}
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
