import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import ListEmployes from "./Employes/ListEmployes";
import Add from "./add";
import Detail from "./Employes/Detail";
export default function Accueil(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><Header/><ListEmployes/></>} />
                    <Route path="/add" element={<><Header/><Add/></>} />
                    <Route path="/:nom" element={<><Detail/></>} />
                    {/* <Route path="" element={}> */}
                    {/* <Route path="" element={}> */}
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}