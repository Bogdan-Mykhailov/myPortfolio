import React from 'react';
import s from './Skills.module.css'
import styles from '../../common/styles/Common.module.css'
import {Skill} from "./skill/Skill";
import tel from '../../assets/img/phone-solid.svg'

export const Skills = () => {
  return (
    <section id='skills' className={s.skills}>
      <div className={`${styles.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skillsWrapper}>
          <Skill
            title='React'
            icon={tel}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='React'
            icon={tel}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='React'
            icon={tel}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
        </div>
      </div>
    </section>
  );
};
