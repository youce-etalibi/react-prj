import React, { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import LogIn from './LogIn';
import Home from './Home';
import UpdateGardes from './updateGardes';
import { dir } from "./Data";
export default function Accueil(){
    const [data, setData] = useState(dir);
    const {id} = useParams();
    console.log(id)
    const person = data.filter(i => i.id == id)
    console.log(person)
    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn/>}/>
                    <Route path="/home/:id" element={<Home/>}/>
                    <Route path='/updateGardes/:id' element={<UpdateGardes/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}