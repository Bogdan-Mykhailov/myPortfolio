import React from 'react';
import {Header} from "./01-ui/04-header/Header";
import {Home} from "./01-ui/03-pages/01-Home/Home";
import {About} from "./01-ui/03-pages/02-About/About";
import {Portfolio} from "./01-ui/03-pages/03-Portfolio/Portfolio";
import {Contacts} from "./01-ui/03-pages/04-Contacts/Contacts";

export const Main = () => (
  <div>
    <Header/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contacts/>
    {/*<06-Test/>*/}
  </div>
);