import React from 'react';
import s from './Portfolio.module.css'
import styles from '../../common/styles/Common.module.css'
import {PortfolioItem} from "./portfolioItem/PortfolioItem";
import {Title} from "../../common/components/Title/Title";
import todoImg from '../../assets/img/todo.jpg'
import memoryImg from '../../assets/img/memory.jpg'

export const Portfolio = () => {

  const memory = {
    backgroundImage: `url(${memoryImg})`
  };

  const todo = {
    backgroundImage: `url(${todoImg})`
  };

  return (
    <section id='portfolio' className={s.portfolio}>
      <div className={`${styles.container} ${s.portfolioContainer}`}>
        <Title title='My Projects'/>
        <div className={s.portfolioWrapper}>
          <PortfolioItem
            style={todo}
            title="Todolist"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto commodi enim harum libero sed, totam. Mollitia nam, necessitatibus!'
            link='https://bogdan-mykhailov.github.io/myTodolist/#/login'
            linkTitle='Todolist →'
          />
          <PortfolioItem
            style={memory}
            title="Memory Game"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit harum libero sed, totam. Mollitia nam, necessitatibus!'
            link='https://dro5zd.github.io/friday-memory-cards-project/#/login'
            linkTitle='Memory Game →'
          />
        </div>
      </div>
    </section>
  );
};
