import React from 'react';
import './project.css';

const Project = ({ title, image, link, github }) => {
  return (
    <div className='project'>
      <div className='project__container'>
        <a className='project__link' href={link} target='_blank'>
          <img className='project__image' src={image} />
          <div className='project__info'>
            <h3 className='project__title'>{title}</h3>
          </div>
        </a>
      </div>
      <a className='project__github' href={github} target='_blank'>
        github code »
      </a>
    </div>
  );
};

export default Project;
