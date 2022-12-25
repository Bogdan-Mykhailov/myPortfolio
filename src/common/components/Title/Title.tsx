import React from 'react';
import s from "./Title.module.css";
import {Fade} from "react-awesome-reveal";

interface ITitle {
  title: string
}

export const Title = ({title}: ITitle) => {
  return (
    <div className={s.title}>
      <Fade delay={50} cascade damping={1e-1}>
        <h2>{title}</h2>
      </Fade>
    </div>
  );
};
