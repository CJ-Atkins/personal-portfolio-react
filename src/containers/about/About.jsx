import React from 'react';
import './about.css';

import { IoMail } from 'react-icons/io5';

const About = () => {
  return (
    <div className='about section__padding'>
      <p className='about__paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        eligendi impedit. Incidunt eius laboriosam dolor sapiente labore fugit
        vitae atque mollitia ipsa nesciunt, deserunt omnis suscipit.
      </p>
      <ul className='about__skills-list'>
        <li className='about__skills-item'>HTML</li>
        <li className='about__skills-item'>CSS</li>
        <li className='about__skills-item'>JavaScript</li>
        <li className='about__skills-item'>React</li>
        <li className='about__skills-item'>WordPress</li>
        <li className='about__skills-item'>GitHub</li>
        <li className='about__skills-item'>Affinity Photo / Designer</li>
        <li className='about__skills-item'>Figma</li>
      </ul>
      <address className='about__email'>
        <IoMail />
        <a
          className='about__email-link'
          href='mailto:connoratkins@hotmail.co.uk'
        >
          connoratkins@hotmail.co.uk
        </a>
      </address>
      <div className='about__bottom-border'></div>
    </div>
  );
};

export default About;
