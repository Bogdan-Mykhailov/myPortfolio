import React from 'react';
import s from './About.module.css'
import styles from '../../common/styles/Common.module.css'
import {Title} from "../../common/components/Title/Title";
import portfolioImage from "../../assets/img/photo.jpg";

export const About = () => {
  const portfolioImg = {
    backgroundImage: `url(${portfolioImage})`
  };

  return (
    <section id='about' className={s.about}>
      <div className={`${s.aboutContainer} ${styles.container}`}>
        <Title title='About'/>
        <div className={s.wrapper}>
          <div className={s.photo} style={portfolioImg}></div>
          <div className={s.bio}>
            <h2 className={s.title}>Hello, I’m Bogdan Mykhailov</h2>
            <h3 className={s.subTitle}>Full-stack developer</h3>
            <span className={s.description}>
              As a self-motivated and proactive full-stack developer with 1.5 years of experience, I have a solid foundation in React, Redux, and Node.js. I also have experience with RTK-query, PostgreSQL, and common development tools and libraries. I am eager to learn new frameworks like Angular or Vue.js to stay up-to-date with the latest trends and technologies in the industry. Overall, I have a strong skill set and a willingness to continuously learn and grow as a developer.
            </span>
            <div className={s.infoWrapper}>
              <p className={s.infoDesc}>Tel: <a className={s.infoDescLink} href="tel:+380930179629">+380930179629</a></p>
              <p className={s.infoDesc}>LinkedIn: <a className={s.infoDescLink} href="https://www.linkedin.com/in/mykhailov-bogdan/">Bogdan Mykhailov</a></p>
              <p className={s.infoDesc}>GitHub: <a className={s.infoDescLink} href="https://github.com/Bogdan-Mykhailov">GitHub Bogdan Mykhailov</a></p>
              <p className={s.infoDesc}>Location: <span className={s.aboutMe}>Ukraine</span></p>
              <p className={s.infoDesc}>Languages: <span className={s.aboutMe}>English, Ukrainian</span></p>
              <p className={s.infoDesc}>Email: <a className={s.infoDescLink} href="mailto:bogdan.mykhailov.work@gmail.com">bogdan.mykhailov.work@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
