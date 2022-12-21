import React from 'react';
import s from './Portfolio.module.css'
import styles from '../../common/styles/Common.module.css'
import {PortfolioItem} from "./portfolioItem/PortfolioItem";

export const Portfolio = () => {
  return (
    <section id='portfolio' className={s.portfolio}>
      <div className={`${styles.container} ${s.portfolioContainer}`}>
        <h2 className={s.title}>Portfolio</h2>
        <div className={s.portfolioWrapper}>
          <PortfolioItem
            title="Todolist"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto commodi enim harum libero sed, totam. Mollitia nam, necessitatibus!'
            link='https://bogdan-mykhailov.github.io/myTodolist/#/login'
            linkTitle='Todolist →'
          />
          <PortfolioItem
            title="Todolist"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto commodi enim harum libero sed, totam. Mollitia nam, necessitatibus!'
            link='https://bogdan-mykhailov.github.io/myTodolist/#/login'
            linkTitle='Todolist →'
          />
        </div>
      </div>
    </section>
  );
};
