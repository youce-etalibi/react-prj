import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Show from "./Show";
import Add from "./Add";
import Update from "./Update";
import Posts from "./Posts";
export default function Accueil(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Show />}/>
                    <Route path='/add' element={<Add />}/>
                    <Route path='/update/:id' element={<Update />}/>
                    <Route path='/posts/:id' element={<Posts />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}