import React from 'react';
import './projects.css';
import { Project } from '../../components';
import { projectData } from './data';

const Projects = () => {
  return (
    <div id='projects' className='projects section__padding'>
      {projectData.map((item, index) => (
        <Project
          title={item.title}
          github={item.github}
          image={item.image}
          link={item.link}
          key={item.title + index}
        />
      ))}
    </div>
  );
};

export default Projects;
