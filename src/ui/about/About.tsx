import React from 'react';
import s from './About.module.css'
import styles from '../../common/styles/Common.module.css'
import {Title} from "../../common/components/Title/Title";


export const About = () => {
  return (
    <section id='about' className={s.about}>
      <div className={`${s.aboutContainer} ${styles.container}`}>
        <Title title='About'/>
        <div className={s.wrapper}>
          <div className={s.photo}></div>
          <div className={s.bio}>
            <h2>Hello, I’m Bogdan Mykhailov</h2>
            <h3>Frontend developer</h3>
            <span>
              I am a Front End developer with a year of practice in Web development with React/Redux/TS technical stack.
              I also have experience working with RTK-query, Styled-components, popular dev tools and libraries.
            </span>
            <p>Tel: <a href="tel:+380930179629">+380930179629</a></p>
            <p>Email: <a href="mailto:bogdan_mykhailov@icloud.com">bogdan_mykhailov@icloud.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/bogdan-mykhailov/">Bogdan Mykhailov</a></p>
            <p>Location: Ukraine, Vinnytsia</p>
            <p>Languages: English, Ukrainian, Russian</p>
          </div>
        </div>
      </div>
    </section>
  );
};
