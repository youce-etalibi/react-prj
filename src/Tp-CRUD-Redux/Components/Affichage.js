import React, { Fragment, useState } from "react";
// import { Stg } from "./data";
import { Link } from "react-router-dom";
export default function Affichage(){
    // const [stg, setStg] = useState(Stg);
    // function handleDelete(e, idx){
    //     e.preventDefault()
    //     if(window.confirm('Supprime le Stagaire ?')){
    //         const dataDeleted = stg.filter((item)=> item.id != idx)
    //         console.log(dataDeleted)
    //         setStg(dataDeleted)
    //     }}
    // function affichageStg(){
    //     if(stg){
    //         return(
    //             stg.map((item)=>(
    //                 <tr className="tr-table">
    //                     <td>{item.id}</td>
    //                     <Link to={`detail/${item.id}`}>
    //                         <td><img src={`/Profiles/${item.profil}`} className="img-profil"/></td>
    //                     </Link>
    //                     <td>{item.fullName}</td>
    //                     <td>{item.age}</td>
    //                     <td>{item.email}</td>
    //                     <td>{item.filiere}</td>
    //                     <td>{item.centre}</td>
    //                     <td colSpan='2'>
    //                             <Link to={`modifie/${item.id}`}>
    //                                 <button className="updateBtn">modifie</button>
    //                             </Link>
    //                             <button className="deleteBtn" onClick={e => handleDelete(e, item.id)}>Supprime</button>     
    //                     </td>
    //                 </tr>
    //             ))
    //         )
    //     }
    // }
    return(
        <Fragment>
            <center>
                <br/>
            <div className="bodyCrud">
                <center>
                    <br/>
                <h1>List Des stagaires</h1>
                <Link to={`/ajoute`}>
                    <button className="addBtn">Ajouter Stagaires</button>
                </Link>
                <br/><br/>
                <div>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>PROFIL</th>
                                <th>FULLNAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>FILIERE</th>
                                <th>CENTRE</th>
                                <th>EVENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* { affichageStg() } */}
                        </tbody>
                    </table>
                    <br/>
                </div>
                </center>
            </div>
            </center>
        </Fragment>
    )
}