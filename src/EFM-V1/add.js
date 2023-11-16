import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddEmp } from "./Redux/Actions";
export default function Add(){
    
    const home = useNavigate();
    const dispatch = useDispatch();

    const[nom, setNom] = useState();
    const[prenom, setPrenom] = useState();
    const[fonction, setFonction] = useState();
    const[image, setImage] = useState();

    function handleSubmit(e){
        e.preventDefault();
        const emp = {nom : nom, prenom : prenom, fonction : fonction, image : image};
        dispatch(AddEmp(emp))
        // console.log(emp)
        home('/');
    }

    return(
        <Fragment>
            <div className="bg-info" style={{padding:'20px'}}>
                <center>
                    <form onSubmit={handleSubmit}>
                        <table className="table table-bordered w-25" style={{color:'white'}}>
                            <tbody>
                            <tr>
                                <td>Nom : </td>
                                <td>
                                    <input type="text" onChange={e=>setNom(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Prenom : </td>
                                <td>
                                    <input type="text" onChange={e=>setPrenom(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Fonction : </td>
                                <td>
                                    <input type="text" onChange={e=>setFonction(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>image : </td>
                                <td>
                                    <input type="text" onChange={e=>setImage(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <input type="submit" value='Add' className="btn btn-light"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </center>
            </div>
        </Fragment>
    )
}