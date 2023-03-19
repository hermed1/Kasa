import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import datas from '../../assets/logements.json';
import './CardContainer.css';
import { Link } from 'react-router-dom';

const CardContainer = () => {
  // Declare a state variable to hold the list of logements
  const [listeLogements, setListLogements] = useState([]);

  // Fetch the logements data and set it to the state variable when the component mounts
  useEffect(() => {
    fetch(datas)
      .then(setListLogements(datas))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='card__container'>
      {/* Check if the listeLogements array has elements */}
      {listeLogements.length > 0 &&
        // Map through the listeLogements array and create a Card component for each logement
        listeLogements.map((logement) => (
          // Use the Link component to navigate to the logement's detail page
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
