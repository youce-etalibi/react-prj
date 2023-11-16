import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./Redux/Action";
export default function Show(){
    const users = useSelector(state => state.users )
    const dispatch = useDispatch();

    // console.log(users);


    // function DeleteUser(idUserX){
    //     window.confirm(' Delete User ? ') ? dispatch(deleteUser(idUserX)) : null ;
    // }

    function ShowUsers(){
        if(users){
            return(
                users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`}>
                                <button className="btn btn-success w-25">UPDATE</button>
                            </Link>
                                <button 
                                onClick={()=>(
                                    window.confirm('Delete User ?') ? dispatch(deleteUser(user.id)) : null
                                )}
                                className="btn btn-danger w-25">DELETE</button>
                            <Link to={`/posts/${user.id}`}>
                                <button className="btn btn-warning w-50">POSTS</button>
                            </Link>
                        </td>
                    </tr>
                ))
            )
        }
    }
    return(
        <Fragment>
            <br/>
            <center>
            <h1>list Users</h1>
            <Link to='/add'>
                <button className="btn btn-primary">Add User</button>
            </Link>
            <div>
            <br/>
                <table className="table table-bordered w-50 bg-light" border='2'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>EVENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ShowUsers()}
                    </tbody>
                </table>
            </div>
            </center>
        </Fragment>
    )
}