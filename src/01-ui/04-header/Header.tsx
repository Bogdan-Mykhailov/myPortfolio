import React from 'react';
import {PATH} from "../02-routes/Routs";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import phone from '../../assets/img/phone-solid.svg'

export const Header = () => {
  return (
    <header>
      <div className={s.headerWrapper}>
        <div className={s.mainHeader}>
          <div className={s.container}>
            <div className={s.header}>
              <div className={s.linksWrapper}>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to={PATH.HOME}>Home</NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to={PATH.ABOUT}>About</NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to={PATH.PORTFOLIO}>Portfolio</NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to={PATH.CONTACTS}>Contacts</NavLink>
                <div className={s.phoneIconWrapper}>
                  <img className={s.phoneIcon} src={phone} alt="phone"/>
                </div>
                <div className={s.phoneNumber}>
                  <a href='tel:+380930179629'>+380 (93) 017 96 29</a>
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