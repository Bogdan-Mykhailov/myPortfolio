import React from 'react';
import s from './App.module.css';
import {Main} from "./ui/main/Main";
import {Skills} from "./ui/skills/Skills";
import {Portfolio} from "./ui/portfolio/Portfolio";
import {Contacts} from "./ui/contacts/Contacts";
import {Footer} from "./ui/footer/Footer";
import {About} from "./ui/about/About";
import {Link} from "react-scroll";
import arrow from './assets/icons/arrowUp.svg'
import {Hamburger} from "./common/components/Hamburger/Hamburger";

export const App = () => {

  return (
    <div className={s.app}>
      <Hamburger />
      {/*<Header/>*/}
      <Main/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contacts/>
      <Footer/>
      <Link
        className={s.goTopBtn}
        to="home"
        smooth={true}
        offset={-100}
        duration={500}
      >
        <img
          className={s.icon}
          src={arrow}
          alt="Go top icon"
        />
      </Link>
    </div>
  )
};
