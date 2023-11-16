import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from "./ListProduct";
import Detail from "./Detail";

export default function Accueil(){


    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListProduct />}/>
                    <Route path='detail/:id' element={<Detail />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}