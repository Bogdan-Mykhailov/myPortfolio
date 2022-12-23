import React from 'react';
import s from './Skills.module.css'
import styles from '../../common/styles/Common.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/Title/Title";
import css from '../../assets/icons/css.svg'
import html from '../../assets/icons/html5.svg'
import react from '../../assets/icons/react.svg'
import redux from '../../assets/icons/redux.svg'
import mui from '../../assets/icons/mui.svg'
import npm from '../../assets/icons/npm.svg'
import ts from '../../assets/icons/typescript.svg'
import js from '../../assets/icons/javascript.svg'
import git from '../../assets/icons/git.svg'

export const Skills = () => {
  return (
    <section id='skills' className={s.skills}>
      <div className={`${styles.container} ${s.skillsContainer}`}>
        <Title title='Skills'/>
        <div className={s.skillsWrapper}>
          <Skill
            title='HTML'
            icon={html}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='CSS'
            icon={css}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='Javascript'
            icon={js}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='Typescript'
            icon={ts}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='React'
            icon={react}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='Redux'
            icon={redux}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='Mui'
            icon={mui}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='NPM'
            icon={npm}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
          <Skill
            title='GIT'
            icon={git}
            imgDescription='Skill icon'
            skillDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum laborum laudantium modi quo voluptates.'
          />
        </div>
      </div>
    </section>
  );
};
