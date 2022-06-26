import React from 'react';
import s from './Portfolio.module.css'

export const Portfolio = () => {
  return (
    <section id='portfolio' className={s.portfolioWrapper}>
      <div className={s.container}>
        <div className={s.titleWrapper}>
          <span className={s.title}>Portfolio</span>
          <span className={s.subtitle}>Portfolio</span>
          <hr className={s.yellowLine}/>
          <hr className={s.underYellowLine}/>
        </div>
      </div>
    </section>
  );
};