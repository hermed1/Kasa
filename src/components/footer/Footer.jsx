import React from 'react';
import logofooter from '../../assets/LOGO_footer.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logofooter} alt='logo_footer' className='footer__img' />
      <p className='footer__p'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
