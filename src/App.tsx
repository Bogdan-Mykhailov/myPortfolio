import React from 'react';
import s from './App.module.css';
import {Header} from "./01-ui/header/Header";
import {Main} from "./01-ui/main/Main";
import {Skills} from "./01-ui/skills/Skills";
import {Portfolio} from "./01-ui/portfolio/Portfolio";
import {Contacts} from "./01-ui/contacts/Contacts";
import {Footer} from "./01-ui/footer/Footer";
import {About} from "./01-ui/about/About";

export const App = () => (
  <div className={s.app}>
    <Header/>
    <Main/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contacts/>
    <Footer/>
  </div>
);
