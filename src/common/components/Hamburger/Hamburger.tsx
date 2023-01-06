import React, { useState } from 'react';
import s from './Hamburger.module.css'
import { Link } from "react-scroll";

export const Hamburger = () => {
  const [open, setOpen] = useState(false)

  const isOpenMenu = () => {
    setOpen(open => !open)
  }

  return (
    <label>
      <span className={open ? `${s.checkbox}` : `${s.isHidden}`}/>
        <span onClick={isOpenMenu} className={s.menu}> <span className={s.hamburger}></span> </span>
        <nav className={s.nav}>
          <label className={s.menuItem}>
            <Link onClick={isOpenMenu} className={s.navLink} to="home" smooth={true} offset={1} duration={500}>
              Home
              <span className={s.mask}>
                <span>Home</span>
              </span>
              <span className={s.mask2}>
                <span>Home</span>
              </span>
            </Link>
          </label>
          <label className={s.menuItem}>
            <Link onClick={isOpenMenu} className={s.navLink} to="about" smooth={true} offset={1} duration={500}>
              About
              <span className={s.mask}>
                <span>About</span>
              </span>
              <span className={s.mask2}>
                <span>About</span>
              </span>
            </Link>
          </label>
          <label className={s.menuItem}>
            <Link onClick={isOpenMenu} className={s.navLink} to="portfolio" smooth={true} offset={1} duration={500}>
              Portfolio
              <span className={s.mask}>
                <span>Portfolio</span>
              </span>
              <span className={s.mask2}>
                <span>Portfolio</span>
              </span>
            </Link>
          </label>
          <label className={s.menuItem}>
            <Link onClick={isOpenMenu} className={s.navLink} to="skills" smooth={true} offset={1} duration={500}>
              Skills
              <span className={s.mask}>
                <span>Skills</span>
              </span>
              <span className={s.mask2}>
                <span>Skills</span>
              </span>
            </Link>
          </label>
          <label className={s.menuItem}>
            <Link onClick={isOpenMenu} className={s.navLink} to="contacts" smooth={true} offset={1} duration={500}>
              Contact
              <span className={s.mask}>
                <span>Contact</span>
              </span>
              <span className={s.mask2}>
                <span>Contact</span>
              </span>
            </Link>
          </label>
        </nav>
    </label>
  );
};
