import React from 'react';
import s from './Footer.module.css'
import styles from '../../common/styles/Common.module.css'
import {Title} from "../../common/components/Title/Title";


export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${styles.container} ${s.footerContainer}`}>
        <Title title='Bogdan Mykhailov '/>
        <div className={s.socialWrapper}>
          <div className={s.socialLink}>IN</div>
          <div className={s.socialLink}>GH</div>
          <div className={s.socialLink}>T</div>
          <div className={s.socialLink}>F</div>
        </div>
        <span className={s.footerRights}>© 2022 all rights reserved</span>
      </div>
    </footer>
  );
};
