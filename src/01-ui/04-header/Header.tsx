import React from 'react';
import {PATH, Routs} from "../02-routes/Routs";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<Routs/>*/}
    </header>
  );
};