import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./AddProduct";
import Detail from "./Detail";
export default function Accueil(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/addProduct" element={<AddProduct />}/>
                    <Route path="/detail/:id" element={<Detail />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}