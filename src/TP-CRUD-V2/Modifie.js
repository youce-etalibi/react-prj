import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stg } from "./data";
export default function Modifie(){
    const id = useParams().id
    const [stg, setStg] = useState(Stg.find((item)=>item.id == id))
    const[fullName, setFullName] = useState(stg.fullName)
    const[email, setEmail] = useState(stg.email)
    const[age, setAge] = useState(stg.age)
    const[password, setpassword] = useState(stg.password)
    const[filiere, setFiliere] = useState(stg.filiere)
    const[centre, setCentre] = useState(stg.centre)
    const[profil, setprofil] = useState(stg.profil)
    const[cover, setCover] = useState(stg.cover)
    const[description, setDescription] = useState(stg.desciption)
    const[headline, setheadline] = useState(stg.headline)
    const[hashtags, sethashtags] = useState(stg.hashtags)
    const[locatlisation, setLocalisation] = useState(stg.locatlisation)
    const home = useNavigate();

    function handleSUbmit(){
        const dataUpdated = [{id, fullName, email, age, password, filiere, centre, profil, cover, description, headline, hashtags, locatlisation}, ...Stg.filter((item)=>item.id != id)]
        Stg.length = 0;
        Stg.push(...dataUpdated)
        Stg.sort((a, b)=> a.id - b.id)
        home('/');
    }
    return(
        <Fragment>
            <center>
                <div className="bodyUpdate">
                    <h1>Modifie le Stagaire</h1>
                    <form onSubmit={handleSUbmit}>
                        <table className="table table-bordered">    
                            <tbody>
                                
                            <tr>
                                <td>FULLNAME</td>
                                <td>
                                    <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>AGE</td>
                                <td>
                                    <input type="text" value={age} onChange={e=>setAge(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>EMAIL</td>
                                <td>
                                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>FILIERE</td>
                                <td>
                                    <input type="text" value={filiere} onChange={e=>setFiliere(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>CENTRE</td>
                                <td>
                                    <input type="text" value={centre} onChange={e=>setCentre(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>PASSWORD</td>
                                <td>
                                    <input type="text" value={password} onChange={e=>setpassword(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>PROFIL</td>
                                <td>
                                    <input type="text" value={profil} onChange={e=>setprofil(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <input type="submit" value='MODIFIE'/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </center>
        </Fragment>
    )
}