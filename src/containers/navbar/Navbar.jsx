import React from 'react';
import './navbar.css';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='navbar section__padding'>
      <div className='navbar__heading'>
        <h1 className='navbar__heading-h1'>Connor Atkins</h1>
        <h2 className='navbar__heading-h2'>Online Portfolio</h2>
      </div>
      <div>
        <a href='#contact-form'>
          <MdOutlineEmail className='navbar__email-icon' />
        </a>
        <a href='https://github.com/CJ-Atkins'>
          <FaGithub className='navbar__github-icon' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
