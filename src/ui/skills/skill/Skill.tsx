import React from 'react'
import { Fade } from 'react-awesome-reveal';
import s from './Skill.module.css';

interface ISkill {
  title: string
  icon: string
  imgDescription: string
  skillDescription: string
}

export const Skill = ({
                        title,
                        icon,
                        imgDescription,
                        skillDescription
                      }: ISkill) => {
  return (
    <div className={s.skill}>
        <div className={s.iconWrapper}>
          <img className={s.icon} src={icon} alt={imgDescription}/>
        </div>
      <h3 className={s.title}>{title}</h3>
      <span className={s.description}>{skillDescription}</span>
    </div>
  );
};
