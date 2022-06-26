import React from 'react';
import s from './Home.module.css'
import {Link} from "react-scroll";
import {Links} from "./Links/Links";

export const Home = () => {
  return (
    <section id='home' className={s.homeWrapper}>
      <div className={s.container}>
        <div className={s.titleWrapper}>
          <span className={s.title}>Hello, I'm</span>
          <span className={s.name}>Bogdan <br/> Mykhailov</span>
          <p>Front-End developer</p>
          <div className={s.contactBtn}>
            <Link className={s.contactBtnStyle} smooth={true} offset={-50} duration={1000} spy={true} to='contacts'>Hire
              me</Link>
          </div>
        </div>
        <div className={s.photoBlock}>
         <div className={s.linksBlock}>
           <Links/>
         </div>
          <div className={s.photoWrapper}>
            <img
              className={s.photo}
              src='https://davis-html.netlify.app/assets/img/section/hero-img.jpg'
              alt="Hero"/>
          </div>

        </div>
      </div>
    </section>
  );
};