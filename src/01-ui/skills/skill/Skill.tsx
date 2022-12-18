import React from 'react'
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
                        skillDescription }: ISkill) => {
  return (
    <div className={s.skill}>
      <img className={s.icon} src={icon} alt={imgDescription}/>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{skillDescription}</p>
    </div>
  );
};
