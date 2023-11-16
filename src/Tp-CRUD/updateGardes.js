import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gardes } from "./Data";

export default function UpdateGardes() {
    const home = useNavigate();
    const { id } = useParams();
    const person = gardes.find((item) => item.id == id);

    // Initialize state with user data
    const [NOM, setNOM] = useState(person.nom || '');
    const [PRENOM, setPRENOM] = useState(person.prenom || '');
    const [DATEN, setDATEN] = useState(person.date_naissance || '');
    const [LIEUN, setLIEUN] = useState(person.lieu_naissance || '');
    const [CENTRE, setCENTRE] = useState(person.Centre || '');
    const [EMAIL, setEMAIL] = useState(person.email || '');
    const [N, setN] = useState(person.numero_telephone || '');
    const [LOCALISATION, setLOCALISATION] = useState(person.location || '');
    const [IMAGE, setIMAGE] = useState(person.image_profile || '');
    const [PASSWORD, setPASSWORD] = useState(person.password || '');

    function handleSubmit(e) {
        e.preventDefault();
    
        const dataUpdated = gardes.map((item) => {
            if (item.id === id) {
                return {
                    ...item, // Spread the properties of the original item
                    "nom": NOM,
                    "prenom": PRENOM,
                    "date_naissance": DATEN,
                    "lieu_naissance": LIEUN,
                    "email": EMAIL,
                    "numero_telephone": N,
                    "location": LOCALISATION,
                    "password": PASSWORD,
                    "image_profile": IMAGE,
                    "Centre": CENTRE
                };
            } else {
                return item;
            }
        });
        gardes.length = 0;
        gardes.push(...dataUpdated)
        home(`/home//${person.id}`);
    }
    
    

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>NOM</td>
                            <td>
                                <input
                                    onChange={(e) => setNOM(e.target.value)}
                                    type="text"
                                    value={NOM}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>PRENOM</td>
                            <td>
                                <input
                                    onChange={(e) => setPRENOM(e.target.value)}
                                    type="text"
                                    value={PRENOM}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>DATE NAISSANCE</td>
                            <td>
                                <input
                                    onChange={(e) => setDATEN(e.target.value)}
                                    type="text"
                                    value={DATEN}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>LIEU NAISSANCE</td>
                            <td>
                                <input
                                    onChange={(e) => setLIEUN(e.target.value)}
                                    type="text"
                                    value={LIEUN}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>CENTRE</td>
                            <td>
                                <input
                                    onChange={(e) => setCENTRE(e.target.value)}
                                    type="text"
                                    value={CENTRE}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>EMAIL</td>
                            <td>
                                <input
                                    onChange={(e) => setEMAIL(e.target.value)}
                                    type="text"
                                    value={EMAIL}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>N</td>
                            <td>
                                <input
                                    onChange={(e) => setN(e.target.value)}
                                    type="text"
                                    value={N}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>LOCATION</td>
                            <td>
                                <input
                                    onChange={(e) => setLOCALISATION(e.target.value)}
                                    type="text"
                                    value={LOCALISATION}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>PASSWORD</td>
                            <td>
                                <input
                                    onChange={(e) => setPASSWORD(e.target.value)}
                                    type="text"
                                    value={PASSWORD}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>IMAGE</td>
                            <td>
                                <input
                                    onChange={(e) => setIMAGE(e.target.value)}
                                    type="text"
                                    value={IMAGE}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="MODIFIER GARDE" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </Fragment>
    );
}
