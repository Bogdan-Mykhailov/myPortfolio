import React from 'react';
import s from './Header.module.css'
import phone from '../../assets/svg/phone-solid.svg'
import {Link} from "react-scroll";

export const Header = () => {
  return (
    <header>
      <div className={s.headerWrapper}>
        <div className={s.mainHeader}>
          <div className={s.container}>
            <div className={s.header}>
              <div className={s.linksWrapper}>
                <Link activeClass={s.active} smooth={true} offset={-50} duration={500} spy={true} to='home'>Home</Link>
                <Link activeClass={s.active} smooth={true} offset={-50} duration={500} spy={true} to='about'>About</Link>
                <Link activeClass={s.active} smooth={true} offset={-50} duration={500} spy={true} to='portfolio'>Portfolio</Link>
                <Link activeClass={s.active} smooth={true} offset={-50} duration={500} spy={true} to='contacts'>Contacts</Link>
                <div className={s.contactsWrapper}>
                  <div className={s.phoneIconWrapper}>
                    <img
                      className={s.phoneIcon}
                      src={phone}
                      alt="phone"
                    />
                  </div>
                  <div className={s.phoneNumber}>
                    <a href='tel:+380930179629'>+380 (93) 017 96 29</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Routs/>*/}
    </header>
  );
};