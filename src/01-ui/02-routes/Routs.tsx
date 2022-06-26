import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../03-pages/01-Home/Home";
import {Contacts} from "../03-pages/04-Contacts/Contacts";
import {Portfolio} from "../03-pages/03-Portfolio/Portfolio";
import {About} from "../03-pages/02-About/About";
import {Error404} from "../03-pages/05-Error/Error404";

export const PATH = {
  HOME: '/home',
  ABOUT: '/about',
  PORTFOLIO: '/portfolio',
  CONTACTS: '/contacts',
  ERROR_404: '/error-404'
}

export const Routs = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate replace to={PATH.HOME}/>}/>
        <Route path={PATH.HOME} element={<Home/>}/>
        <Route path={PATH.ABOUT} element={<About/>}/>
        <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
        <Route path={PATH.CONTACTS} element={<Contacts/>}/>
        <Route path='/*' element={<Navigate to={PATH.ERROR_404}/>}/>
        <Route path={PATH.ERROR_404} element={<Error404/>}/>
      </Routes>
    </div>
  );
};
