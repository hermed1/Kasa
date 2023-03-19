import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import datas from '../../assets/logements.json';
import './CardContainer.css';
import { Link } from 'react-router-dom';

const CardContainer = () => {
  const [listeLogements, setListLogements] = useState([]);
  useEffect(() => {
    fetch(datas)
      .then(setListLogements(datas))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='card__container'>
      {/* renvoie la valeur de l'opérande de droite si les deux valeurs sont true. 
      = ici le résultat du map */}
      {listeLogements.length > 0 &&
        listeLogements.map((logement) => (
          <Link key={logement.id} to={`logement/${logement.id}`}>
            <Card
              id={logement.id}
              title={logement.title}
              image={logement.cover}
            />
          </Link>
        ))}
    </div>
  );
};

export default CardContainer;
