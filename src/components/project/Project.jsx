import React from 'react';
import './project.css';

const Project = ({ title, description, image, link }) => {
  return (
    <div className='project'>
      <a className='project__link' href={link}>
        <img className='project__image' src={image} />
        <div className='project__info'>
          <h3 className='project__title'>{title}</h3>
          <p className='project__description'>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
