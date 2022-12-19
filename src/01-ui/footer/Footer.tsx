import React from 'react';
import s from './Footer.module.css'
import styles from '../../common/styles/Common.module.css'


export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${styles.container} ${s.footerContainer}`}>
        <h2 className={s.title}>Bogdan Mykhailov</h2>

      </div>
    </footer>
  );
};
