import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./Redux/Action";
export default function Add(){
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const home = useNavigate();
    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        const userX = {
            id : id,
            name : name,
            email : email
        }
        // console.log(userX);
        dispatch(addUser(userX));
        home('/')
    }

    function handleGoBack(e){
        e.preventDefault();
        home('/');
    }

    return(
        <Fragment>
            <center>
                <br/>
                <h2>Add User</h2>
                <br/>
                    <button onClick={handleGoBack} className="btn btn-danger">Go Back</button>
                <form onSubmit={handleSubmit}>
                    <br/>
                    <table className="table table-bordered w-50">
                    <tbody>
                    <tr>
                            <td>id : </td>
                            <td><input type='text' onChange={e=>setId(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>name : </td>
                            <td><input type='text' onChange={e=>setName(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>email : </td>
                            <td><input type='text' onChange={e=>setEmail(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input className="btn btn-primary" type='submit' value='ADD'/>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </form>
            </center>
        </Fragment>
    )
}