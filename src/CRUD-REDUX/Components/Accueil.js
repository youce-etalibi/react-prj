import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Affichage from "./Affichage";
import Ajoute from "./Ajoute";
import Modifie from "./Modifie";
import Detail from "./Detail";
import './Crud.css';
import { Provider } from "react-redux";
import store from "../Store";
export default function Accueil() {
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Affichage />} />
            <Route path='/ajoute' element={<Ajoute />} />
            <Route path='/modifie/:id' element={<Modifie />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}
