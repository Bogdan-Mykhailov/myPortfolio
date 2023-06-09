import React from 'react';
import s from './Portfolio.module.css'
import styles from '../../common/styles/Common.module.css'
import {PortfolioItem} from "./portfolioItem/PortfolioItem";
import {Title} from "../../common/components/Title/Title";
import todoImg from '../../assets/img/todo.jpg'
import memoryImg from '../../assets/img/memory.jpg'
import boseImg from '../../assets/img/bose.jpg'
import chatImg from '../../assets/img/chat.jpg'
import productCatalogImg from '../../assets/img/productCatalog.jpg'
import hounterImg from '../../assets/img/hounter.jpg'

export const Portfolio = () => {

  const memory = {
    backgroundImage: `url(${memoryImg})`
  };

  const todo = {
    backgroundImage: `url(${todoImg})`
  };

  const bose = {
    backgroundImage: `url(${boseImg})`
  };

  const chat = {
    backgroundImage: `url(${chatImg})`
  };

  const productCatalog = {
    backgroundImage: `url(${productCatalogImg})`
  };

  const hounter = {
    backgroundImage: `url(${hounterImg})`
  };

  return (
    <section id='portfolio' className={s.portfolio}>
      <div className={`${styles.container} ${s.portfolioContainer}`}>
        <Title title='My Projects'/>
        <div className={s.portfolioWrapper}>
          <PortfolioItem
            style={productCatalog}
            title="Nice Gadgets 👌"
            description='The Nice Gadgets web site is an e-commerce platform for purchasing phones, tablets, and accessories. The site is designed to provide a user-friendly and intuitive shopping experience for customers, while also providing detailed information about each product.'
            link='https://fe-jan23-cyber-sapiens.github.io/products_catalog/'
            linkTitle='Nice Gadgets'
          />

          <PortfolioItem
            style={bose}
            title="Bose Landing"
            description='This is the Bose brand landing page, designed with a modern minimalist aesthetic and features.'
            link='https://bogdan-mykhailov.github.io/bose_landing/'
            linkTitle='Bose'
          />

          <PortfolioItem
            style={todo}
            title="Todolist"
            description='This todolist is a simple and efficient way to manage your tasks and increase productivity.
             It is a digital tool that allows you to create a list of things that you need to do,
             and mark items as complete when they are finished.'
            link='https://Bogdan-Mykhailov.github.io/react_todo-app-with-api/'
            linkTitle='Todolist'
          />

          <PortfolioItem
            style={chat}
            title="Online chat"
            description='This chat application built with React and Socket.io is a real-time communication tool that allows users to connect with each other instantly over the internet. It provides a smooth and seamless user experience, with features such as real-time messaging and user authentication.'
            link='https://socket-online-chat.netlify.app/'
            linkTitle='Online chat'
          />

          <PortfolioItem
            style={hounter}
            title="Hounter rental app"
            description='The Hounter is an innovative web application designed to assist users in finding their ideal rental or purchase property, be it apartments, houses, or villas.'
            link='https://bogdan-mykhailov.github.io/landing_test/'
            linkTitle='Hounter'
          />

          <PortfolioItem
            style={memory}
            title="Memory Game"
            description='A memory card game is a digital version of educational game.
            The game usually consists of a deck of cards with questions and the goal is to provide an answer.
            Memory card games can be played on a phone or computer, and they can help improve memory, concentration,
            and problem-solving skills.'
            link='https://dro5zd.github.io/friday-memory-cards-project/#/login'
            linkTitle='Memory Game'
          />
        </div>
      </div>
    </section>
  );
};
