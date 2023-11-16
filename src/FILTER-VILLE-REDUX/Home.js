import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, filterPerson } from "./Redux/Action";

export default function Home(){

    const dispatch = useDispatch();
    const persons = useSelector(state=>state.person)
    console.log(persons);

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [ville, setVille] = useState();

    const [villeFilter, setVilleFilter] = useState();
    
    function handleSubmit(e){
        e.preventDefault();
        const personX = {
            id : id, 
            name : name, 
            ville : ville
        }
        dispatch(addPerson(personX));
        // console.log(personX);
        setId("");
        setName("");
        setVille("");
    }

    function ShowPersons(){
        if(persons){
            return (persons.map((person)=>(
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.ville}</td>
                </tr>
            )))
        }
    }
    
    const handleFilter = (e) => {
        e.preventDefault();
        dispatch(filterPerson(villeFilter));
        setVilleFilter('');
    }

    return(
        <Fragment>
            <br/>
            <div>
                <center>
                <h2> Add Person</h2>
                <form onSubmit={handleSubmit}>
                    <table className="table table-bordered w-50">
                        <tbody>
                            <tr>
                                <td>ID : </td>
                                <td>
                                    <input type="text" onChange={e=>setId(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>NAME : </td>
                                <td>
                                    <input type="text" onChange={e=>setName(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>VILLE : </td>
                                <td>
                                    <select onChange={e=>setVille(e.target.value)}>
                                        <option value='' selected disabled>Chose ... </option>
                                        <option value='Tangier' >Tangier</option>
                                        <option value='Casablanca'>Casablanca</option>
                                        <option value='Marrakech'>Marrakech</option>
                                        <option value='Agadir'>Agadir</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <input type="submit" value='ADD' className="btn btn-primary"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <form onSubmit={handleFilter}>
                <select onChange={e=>setVilleFilter(e.target.value)} className="bg-warning">
                                        <option value='' selected disabled>Chose ... </option>
                                        <option value='Tangier'>Tangier</option>
                                        <option value='Casablanca'>Casablanca</option>
                                        <option value='Marrakech'>Marrakech</option>
                                        <option value='Agadir'>Agadir</option>
                </select>
                <button type="submit" className="btn btn-warning m-1">Filter</button>
                </form>
                <br />
                <br />
                </center>
            </div>
            <center>
                <div>
                    <table className="table table-bordered bg-light w-50">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>VILLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ShowPersons()}
                        </tbody>
                    </table>
                </div>
                <br/>
                <br/>
            </center>
        </Fragment>
    )
}