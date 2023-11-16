import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail(){
    const home = useNavigate();
    const {nom} = useParams();
    const Employes = useSelector(state => state.Employes)
    const emp = Employes.find((item)=>item.nom == nom)
    // console.log(emp)
    // console.log(Employes)

    function ShowDetails(){
        return(
            <Fragment>
                <div style={{backgroundColor:'blueviolet', display:'flex', flexDirection:'row', width:'fit-content', color:'white', padding:'10px', borderRadius:'10px'}}>
                    <img src={emp.image} style={{width:'200px', height:'200px', objectFit:'cover', borderRadius:'10px'}}/>
                    <div style={{width:"200px", height:'200px'}}>
                        <h2>{emp.nom} {emp.prenom}</h2>
                        <h3>{emp.fonction}</h3>
                    </div>
                </div>
            </Fragment>
        )
    }



    return(
        <Fragment>
            <center>
            <h4>Detail : </h4>
            <button onClick={()=>(home('/'))} className="btn btn-outline-primary">Go Back</button><br/><br/>
            <div>
                {ShowDetails()}
            </div>
            </center>
        </Fragment>
    )
}