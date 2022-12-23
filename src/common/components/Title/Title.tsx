import React from 'react';
import s from "./Title.module.css";

interface ITitle {
  title: string
}

export const Title = ({title}: ITitle) => {
  return (
    <div className={s.title}>
      <h2>{title}</h2>
    </div>
  );
};
