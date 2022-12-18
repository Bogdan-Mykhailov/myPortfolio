import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
  return (
    <div className={s.nav}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contacts">Contacts</a>
    </div>
  );
};
