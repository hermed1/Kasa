import React from 'react';
import Navbar from '../../components/header/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Logement from '../../components/logement/Logement';

const PageLogement = () => {
  return (
    <div>
      <Navbar />
      <Logement />
      <Footer />
    </div>
  );
};

export default PageLogement;
