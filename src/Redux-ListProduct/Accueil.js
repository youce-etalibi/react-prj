import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from "./ListProduct";
import Add from "./Add";

export default function  Accueil(){
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' elemenet={<ListProduct/>}/>
                <Route path='/add' elemenet={<Add/>}/> */}
                <Route path="/" element={<ListProduct/>}/>
                <Route path="/add" element={<Add/>}/>
            </Routes>
        </BrowserRouter>
    )
}