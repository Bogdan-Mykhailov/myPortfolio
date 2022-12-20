import React from 'react';
import s from './Footer.module.css'
import styles from '../../common/styles/Common.module.css'


export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${styles.container} ${s.footerContainer}`}>
        <h2 className={s.title}>Bogdan Mykhailov</h2>
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
