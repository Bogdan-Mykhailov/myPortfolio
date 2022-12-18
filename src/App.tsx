import React from 'react';
import s from './App.module.css';
import {Header} from "./01-ui/header/Header";
import {Main} from "./01-ui/main/Main";
import {Skills} from "./01-ui/skills/Skills";

export const App = () => (
  <div className={s.app}>
    <Header/>
    <Main/>
    <Skills/>
  </div>
);
