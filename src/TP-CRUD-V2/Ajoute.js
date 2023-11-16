import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stg } from "./data";
export default function Ajoute(){
    const[id, setId] = useState(Stg.map(item => item.id).slice(-1).join('') - (-1))
    const[fullName, setFullName] = useState('')
    const[email, setEmail] = useState('')
    const[age, setAge] = useState('')
    const[password, setpassword] = useState('')
    const[filiere, setFiliere] = useState('')
    const[centre, setCentre] = useState('')
    const[profil, setprofil] = useState('')
    const[cover, setCover] = useState('')
    const[description, setDescription] = useState('')
    const[headline, setheadline] = useState('')
    const[hashtags, sethashtags] = useState('')
    const[locatlisation, setLocalisation] = useState('')
    const home = useNavigate();
    function handleSUbmit(){
        Stg.push({id, fullName, email, age, password, filiere, centre, description, headline, hashtags, locatlisation});
        home('/')
    }
    function handleBack(e){
        e.preventDefault()
        home('/')
    }
    console.log(id)
    return(
        <Fragment>
            <center>
                <button className="btnGoBack" onClick={handleBack}><i class="fa fa-arrow-circle-left"></i></button>
                <div className="bodyAdd">
                    <h1 style={{fontWeight:'bold'}}>Ajoute Stagaire</h1>
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
                                <td>COVER</td>
                                <td>
                                    <input type="text" value={cover} onChange={e=>setCover(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>HASHTAGS</td>
                                <td>
                                    <input type="text" value={hashtags} onChange={e=>sethashtags(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>HEADLINE</td>
                                <td>
                                    <input type="text" value={headline} onChange={e=>setheadline(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>DESCRIPTION</td>
                                <td>
                                    <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>LOCALISATION</td>
                                <td>
                                    <input type="text" value={locatlisation} onChange={e=>setLocalisation(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <input type="submit" value='AJOUTE'/>
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