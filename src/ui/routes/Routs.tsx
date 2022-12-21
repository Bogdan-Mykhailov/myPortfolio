import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {Contacts} from "../pages/Contacts/Contacts";
import {Portfolio} from "../pages/Portfolio/Portfolio";
import {About} from "../pages/About/About";
import {Error404} from "../pages/Error/Error404";

export const PATH = {
  HOME: '/home',
  ABOUT: '/about',
  PORTFOLIO: '/portfolio',
  CONTACTS: '/contacts',
  ERROR_404: '/error-404'
}

export const Routs = () => {

  return (
      <Routes>
        <Route path='/' element={<Navigate replace to={PATH.HOME}/>}/>
        <Route path={PATH.HOME} element={<Home/>}/>
        <Route path={PATH.ABOUT} element={<About/>}/>
        <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
        <Route path={PATH.CONTACTS} element={<Contacts/>}/>

        <Route path='/*' element={<Navigate to={PATH.ERROR_404}/>}/>
        <Route path={PATH.ERROR_404} element={<Error404/>}/>
      </Routes>
  );
};
