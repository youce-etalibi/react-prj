import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./Redux/Actions";
import { useNavigate } from "react-router-dom";

export default function AddPost(){
    
    const dispatch = useDispatch();
    const home = useNavigate();
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [desc, setDesc] = useState();

    function handleSubmit(e){
        e.preventDefault();
        const postX = {id : id, name : name, desc : desc}
        dispatch(addPost(postX))
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
                                <td>DESC:</td>
                                <td>
                                    <input type="text" onChange={e=>setDesc(e.target.value)}/>
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