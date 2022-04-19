import React from 'react';
import './footer.css';
import { IoMail } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <a href='https://github.com/CJ-Atkins'>
        <FaGithub className='footer__github-icon' />
      </a>
      <address className='footer__email'>
        <IoMail />
        <a
          className='footer__email-link'
          href='mailto:connoratkins@hotmail.co.uk'
        >
          connoratkins@hotmail.co.uk
        </a>
      </address>
    </div>
  );
};

export default Footer;
