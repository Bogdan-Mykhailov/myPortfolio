import React from 'react';
import s from './Main.module.css'
import styles from '../../common/styles/Common.module.css'
import mainPhoto from "../../assets/img/photo.jpg";
import {Particle} from "../../common/components/Particle/Particle";
import ReactTypingEffect from "react-typing-effect";


export const Main = () => {
  const photo = {
    backgroundImage: `url(${mainPhoto})`
  };


  return (
    <main id='home' className={s.main}>
      <Particle/>
      <div className={styles.container}>
        <div className={s.myInfo}>
          <span className={s.greeting}>Hi there</span>
          <h1 className={s.text}>I am <br/>
            <span className={s.myName}>Bogdan Mykhailov</span>
          </h1>
          <ReactTypingEffect
            className={s.role}
            text={['Frontend developer.']}
            speed={200}
            eraseDelay={3000}
            typingDelay={1000}
          />
        </div>
        <div className={s.photoWrapper}>
          <div className={s.photo} style={photo}></div>
        </div>
      </div>
    </main>
  );
};
