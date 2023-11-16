import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, addUser } from "./Redux/Actions";
import { useNavigate } from "react-router-dom";

export default function AddPost(){
    
    const dispatch = useDispatch();
    const home = useNavigate();
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();

    function handleSubmit(e){
        e.preventDefault();
        const userX = {id : id, name : name, age : age}
        dispatch(addUser(userX))
        home('/');
    }

    return(
        <Fragment>
            <center>
                <br />
                <form onSubmit={handleSubmit}>
                    <table className="table table-bordered w-50">
                        <tbody>
                            <tr>
                                <td>ID:</td>
                                <td>
                                    <input type="text" onChange={e=>setId(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>NAME:</td>
                                <td>
                                    <input type="text" onChange={e=>setName(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>AGE:</td>
                                <td>
                                    <input type="text" onChange={e=>setAge(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <input type="submit" value='ADD POST' className="btn btn-primary"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </center>
        </Fragment>
    )
}