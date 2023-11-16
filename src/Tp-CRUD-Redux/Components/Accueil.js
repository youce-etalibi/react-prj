import React, { useState, useEffect, Fragment } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Affichage from "./Affichage";
// import Modifie from "./Modifie";
// import Ajoute from "./Ajoute";
// import Detail from "./Detail";

export default function Accueil(){
    return(
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path='/' element={<Affichage />}/>
                        <Route path='/modifie' element={<Modifie />}/>
                        <Route path='/ajoute' element={<Ajoute />}/>
                        <Route path='/detail' element={<Detail/>}/> */}
                    </Routes>
                </BrowserRouter>
            </Fragment>
    );
}