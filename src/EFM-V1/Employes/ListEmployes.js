import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ListEmployes(){
    const Employes = useSelector(state => state.Employes)
    console.log(Employes);


    function Showlist(){
        return(
            Employes.map((emp)=>(
                <div key={emp.nom} style={{width:'fit-content', border:'2px solid solid', backgroundColor:'aliceblue', padding:'5px', borderRadius:'10px', color:'InfoText', width:'220px'}}>
                    <Link to={`/${emp.nom}`}>
                        <img src={emp.image} style={{width:'200px', height:'200px', objectFit:'cover', border:'2px solid black', borderRadius:'10px'}}/>
                    </Link>
                    <h3>{emp.nom} {emp.prenom}</h3>
                </div>
            ))
        )
    }

    return(
        <Fragment>
            <center>
            <div className="bg-info" style={{color:'white', padding:'10px'}}>
                <h1>List Employes</h1>
                <div style={{display:'flex', flexDirection:'row', gap:'20px', width:'100vh', overflow:'scroll', padding:'10px'}}>
                    {Showlist()}
                </div>
            </div>
            </center>
        </Fragment>
    )
}