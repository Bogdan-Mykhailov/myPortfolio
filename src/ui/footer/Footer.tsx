import React from 'react';
import s from './Footer.module.css'
import styles from '../../common/styles/Common.module.css'
import {Title} from "../../common/components/Title/Title";
import fb from '../../assets/icons/facebook-f.svg'
import telegram from '../../assets/icons/telegram.svg'
import linkedIn from '../../assets/icons/linkedin-in.svg'
import gitHub from '../../assets/icons/square-github.svg'
import {format} from "date-fns";


export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${styles.container} ${s.footerContainer}`}>
        <Title title='Bogdan Mykhailov '/>
        <div className={s.socialWrapper}>
          <a className={s.socialLink} target="_blank" href="https://www.linkedin.com/in/bogdan-mykhailov/">
            <img className={s.icon} src={linkedIn} alt="LinkedIn icon"/>
          </a>
          <a className={s.socialLink} target="_blank" href="https://github.com/Bogdan-Mykhailov">
            <img className={s.icon} src={gitHub} alt="GitHub icon"/>
          </a>
          <a className={s.socialLink} target="_blank" href="https://t.me/bogdan_mykhailov">
            <img className={s.icon} src={telegram} alt="Telegram icon"/>
          </a>
          <a className={s.socialLink} target="_blank" href="https://www.facebook.com/bogdan.mykhailov">
            <img className={s.icon} src={fb} alt="Facebook icon"/>
          </a>
        </div>
        <span className={s.footerRights}>© {format(new Date(), 'yyyy')} all rights reserved</span>
      </div>
    </footer>
  );
};
