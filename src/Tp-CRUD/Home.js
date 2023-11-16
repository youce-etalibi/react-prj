import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dir, gardes } from "./Data";

export default function Home() {
    const { id } = useParams();
    const [time, setTime] = useState(new Date().getHours() > 5 && new Date().getHours() < 18 ? 'Bonjour' : 'Bonsoir')
    const [person, setPerson] = useState(dir.find((i)=>i.id==id));
    console.log(person)
    // console.log(new Date().getHours())
    console.log(time)
    return (
        <div>
            <h2>{`${time}, ${person.nom} ${person.prenom}`}</h2>
            {/* <p>User ID: {id}</p> */}
            <div>
                <h1>List des Gardes Generales</h1>
                <div>
                    <table className="table table-bordered bg-dark" style={{color:'white'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>PROFIL</th>
                                <th>NOM</th>
                                <th>PRENOM</th>
                                <th>DATE NAISSANCE</th>
                                <th>LIEU NAISSANCE</th>
                                <th>CENTER</th>
                                <th>EMAIL</th>
                                <th>N &#9990;</th>
                                <th>LOCATION</th>
                                <th>PASSWORD</th>
                                <th>EVENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gardes.map((item, index)=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><img style={{width:'100px'}} src={`/Profiles/${item.image_profile}`}/></td>
                                    <td>{item.nom}</td>
                                    <td>{item.prenom}</td>
                                    <td>{item.date_naissance}</td>
                                    <td>{item.lieu_naissance}</td>
                                    <td>{item.Centre}</td>
                                    <td>{item.email}</td>
                                    <td>{item.numero_telephone}</td>
                                    <td>{item.location}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <Link to={`/updateGardes/${item.id}`}>
                                            <button >Modifie</button>
                                        </Link>
                                        <button>Supprime</button>
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
