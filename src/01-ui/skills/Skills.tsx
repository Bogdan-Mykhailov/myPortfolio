import React from 'react';
import s from './Skills.module.css'
import styles from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
  return (
    <section id='about' className={s.skills}>
      <div className={`${styles.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skillsWrapper}>
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </section>
  );
};
