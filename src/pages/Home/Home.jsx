import React from 'react';
import Banner from '../../components/banner/Banner';
import CardContainer from '../../components/card_container/CardContainer';
import './Home.css';

const Home = () => {
  return (
    <div className='home__container'>
      <Banner />
      <CardContainer />
    </div>
  );
};

export default Home;
