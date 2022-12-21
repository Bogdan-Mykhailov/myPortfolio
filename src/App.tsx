import React from 'react';
import s from './App.module.css';
import {Header} from "./ui/header/Header";
import {Main} from "./ui/main/Main";
import {Skills} from "./ui/skills/Skills";
import {Portfolio} from "./ui/portfolio/Portfolio";
import {Contacts} from "./ui/contacts/Contacts";
import {Footer} from "./ui/footer/Footer";
import {About} from "./ui/about/About";

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
