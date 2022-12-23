import React from 'react';
import s from './Main.module.css'
import styles from '../../common/styles/Common.module.css'
import mainPhoto from "../../assets/img/photo.jpg";

export const Main = () => {
  const photo = {
    backgroundImage: `url(${mainPhoto})`
  };

  return (
    <main id='home' className={s.main}>
      <div className={styles.container}>
        <div className={s.myInfo}>
          <span className={s.greeting}>Hi there</span>
          <h1 className={s.text}>I am <br/>
            <span className={s.myName}>Bogdan Mykhailov</span>
          </h1>
          <p className={s.role}>Frontend developer</p>
        </div>
        <div className={s.photo} style={photo}></div>
      </div>
    </main>
  );
};
