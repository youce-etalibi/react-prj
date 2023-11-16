import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from "./Show";
import AddUser from "./AddUser";
import AddPost from "./AddPost";

export default function Accueil(){
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Show/>}/>
                    <Route path="/addUser" element={<AddUser />}/>
                    <Route path="/addPost" element={<AddPost/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}