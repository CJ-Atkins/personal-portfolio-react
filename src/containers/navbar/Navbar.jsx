import React from 'react';
import './navbar.css';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbar section__padding'>
      <div className='navbar__heading'>
        <h1 className='navbar__heading-h1'>Connor Atkins</h1>
        <h2 className='navbar__heading-h2'>Online Portfolio</h2>
      </div>
      <a href='https://github.com/CJ-Atkins'>
        <FaGithub className='navbar__github-icon' />
      </a>
    </div>
  );
};

export default Navbar;
