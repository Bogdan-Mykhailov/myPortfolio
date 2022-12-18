import React from 'react';
import s from './Main.module.css'
import styles from '../../common/styles/Common.module.css'

export const Main = () => {
  return (
    <main id='home' className={s.main}>
      <div className={styles.container}>
        <div className={s.myInfo}>
          <span className={s.greeting}>Hi there</span>
          <h1 className={s.name}>I'm Bogdan Mykhailov</h1>
          <p className={s.position}>Frontend developer</p>
        </div>
        <div className={s.photo}></div>
      </div>
    </main>
  );
};
