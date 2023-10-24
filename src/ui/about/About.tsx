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
             I am a developer, with over two years of experience. My areas of expertise encompass React, Next.js, Vue.js, Redux, and Node.js. Additionally, I have had the opportunity to work with RTK-query, PostgreSQL, and various development tools and libraries. I am constantly seeking to expand my knowledge and skills by learning new frameworks and technologies to stay up to date with the latest industry trends. In general, I possess a strong skill set that is coupled with a passion for continuous improvement as a developer. I am committed to maintaining a high level of professionalism, and I would be honored to bring my expertise to any business.
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
