import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../assets/logements.json';
import NotFound from '../../pages/notFound/NotFound';
import './Logement.css';
import Collapse from '../collapse/Collapse';
import Gallery from '../gallery/Gallery';
import Rating from '../rating/Rating';

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
  }, [pageId, logement, pictures]);

  return logement ? (
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
              <Rating rating={logement.rating} />
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
          className='collapse__logement collapse__logement__button '
          classNameButton='collapse__logement__button'
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
            classNameButton='collapse__logement__button'
          />
        )}
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default Logement;
