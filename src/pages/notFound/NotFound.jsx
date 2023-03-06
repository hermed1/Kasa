import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notFound'>
      <p className='notFound__404'>404</p>
      <p className='notFound__p'>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className='notFound__link' to='/'>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default NotFound;
