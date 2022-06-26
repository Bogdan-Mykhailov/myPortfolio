import React from 'react';
import s from './About.module.css'
import {Link} from "react-scroll";

export const About = () => {
  return (
    <section id='about' className={s.aboutWrapper}>
      <div className={s.container}>
        <div className={s.titleWrapper}>
          <span className={s.title}>About Me</span>
          <span className={s.subtitle}>About Me</span>
            <hr className={s.yellowLine}/>
            <hr className={s.underYellowLine}/>
        </div>
       <div className={s.infoWrapper}>
         <div className={s.photoWrapper}></div>
         <div className={s.information}>
           <span className={s.infoTitle}>Hi There! I'm Bogdan Mykhailov</span>
           <span className={s.infoSubtitle}>Frontend developer</span>
           <p className={s.text}>
             I am a Visual Designer with a strong focus on digital branding. Visual design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.
           </p>
           <div className={s.contacts}>
             <span>Birthday : 10 March 1991</span>
             <span>Phone : +380 (93) 017 96 29</span>
             <span>Email : bogdan_mykhailov@icloud.com</span>
             <span>From : Ukraine, Vinnitsia</span>
             <span>Language : Ukrainian, English</span>
           </div>
           <div className={s.contactBtn}>
             <Link className={s.contactBtnStyle} smooth={true} offset={-50} duration={1000} spy={true} to='contacts'>Download CV</Link>
           </div>
         </div>
       </div>
      </div>
    </section>
  );
};