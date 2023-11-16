import React, { Fragment, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Affichage from "./Affichage";
import Modifie from "./Modifie";
import Ajoute from "./Ajoute";
import './Crud.css';
import Detail from "./detail";
export default function Accueil(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Affichage />}/>
                <Route path='/modifie/:id' element={<Modifie />}/>
                <Route path='/ajoute' element={<Ajoute />}/>
                <Route path='detail/:id' element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}