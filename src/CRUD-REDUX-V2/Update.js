import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./Redux/Action";

export default function Update(){
    const dispatch = useDispatch();
    const home = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    function handleSubmit(e){
        e.preventDefault();
        const userUpdated = {
            id : id,
            name : name,
            email : email
        }
        dispatch(updateUser(userUpdated));
        home('/');
    }

    function handleGoBack(e){
        e.preventDefault();
        home('/');
    }


    return(
        <Fragment>
            <center>
            <div>
                <br/>
                <h1>Update User</h1>
                <button onClick={handleGoBack} className="btn btn-danger">Go Back</button>
                <br/>
            <form onSubmit={handleSubmit}>
                    <br/>
                    <table className="table table-bordered w-50">
                    <tbody>
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
                                <input className="btn btn-primary" type='submit' value='UPDATE'/>
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