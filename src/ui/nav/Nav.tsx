import React from 'react';
import s from './Nav.module.css'
import {Link} from "react-scroll";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <Link className={s.navLink} to="home" smooth={true} offset={1} duration={500}>Home</Link>
      <Link className={s.navLink} to="about" smooth={true} offset={1} duration={500}>About</Link>
      <Link className={s.navLink} to="portfolio" smooth={true} offset={1} duration={500}>Portfolio</Link>
      <Link className={s.navLink} to="skills" smooth={true} offset={1} duration={500}>Skills</Link>
      <Link className={s.navLink} to="contacts" smooth={true} offset={1} duration={500}>Contact</Link>
    </nav>
  );
};
