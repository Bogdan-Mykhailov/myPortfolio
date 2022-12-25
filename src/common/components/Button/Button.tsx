import React from 'react';
import s from './Button.module.css'

interface IButton {
  title: string
  link: string
}
export const Button = ({link, title}: IButton) => {
  return (
    <div>
      <a target='_blank' className={s.btn} href={link}>{title}</a>
    </div>
  );
};
