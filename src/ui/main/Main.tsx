import React from 'react';
import s from './Main.module.css'
import styles from '../../common/styles/Common.module.css'
import mainPhoto from "../../assets/img/photo.jpg";
import {Particle} from "../../common/components/Particle/Particle";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';


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
        <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
              gyroscope={true}>
          <div className={s.photoWrapper}>
            <Tilt tiltMaxAngleX={9}
                  tiltMaxAngleY={9}
                  perspective={800}
                  transitionSpeed={1500}
                  scale={1.02}
                  gyroscope={true}>
              <div className={s.photo} style={photo}></div>
            </Tilt>
          </div>
        </Tilt>
      </div>
    </main>
  );
};
