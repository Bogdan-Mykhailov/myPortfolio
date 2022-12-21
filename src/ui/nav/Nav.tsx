import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <a className={s.navLink} href="#home">Home</a>
      <a className={s.navLink} href="#about">About</a>
      <a className={s.navLink} href="#portfolio">Portfolio</a>
      <a className={s.navLink} href="#skills">Skills</a>
      <a className={s.navLink} href="#contacts">Contacts</a>
    </nav>
  );
};
