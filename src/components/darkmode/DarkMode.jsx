import React, { useState } from 'react';
import './darkmode.css';
import { MdOutlineNightlightRound } from 'react-icons/md';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const storedTheme = localStorage.getItem('theme');

const prefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultDark =
  storedTheme === 'dark' || (storedTheme === null) & prefersDark;

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  const [darkOrLight, setDarkOrLight] = useState();

  return (
    <div className='darkmode'>
      <input
        className='input'
        onClick={toggleTheme}
        type='checkbox'
        id='checkbox'
      />
      <label className='toggle' htmlFor='checkbox'>
        <MdOutlineNightlightRound className='moon' />
      </label>
    </div>
  );
};

export default DarkMode;
