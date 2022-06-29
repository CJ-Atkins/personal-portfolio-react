import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about section__padding'>
      <p className='about__paragraph'>
        Hello welcome to my website, I am a self-taught front-end web developer.
        Checkout some of my work below.
      </p>
      <ul className='about__skills-list'>
        <li className='about__heading'>Languages</li>
        <li className='about__skills-item'>React</li>
        <li className='about__skills-item'>HTML</li>
        <li className='about__skills-item'>CSS</li>
        <li className='about__skills-item'>JavaScript</li>
        <li className='about__skills-item'>WordPress</li>
      </ul>
      <ul className='about__tools-list'>
        <li className='about__heading'>Tools</li>
        <li className='about__tools-item'>Visual Studio Code</li>
        <li className='about__tools-item'>GitHub</li>
        <li className='about__tools-item'>Affinity Photo</li>
        <li className='about__tools-item'>Figma</li>
      </ul>

      <div className='about__bottom-border'></div>
    </div>
  );
};

export default About;
