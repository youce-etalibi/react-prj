import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Show(){
    const dispatch = useDispatch();

    const users = useSelector(state=>state.users);
    const posts = useSelector(state=>state.posts);

    function showUsers(){
        if(users){
            return (
                users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))
            )
        }
    }

    
    function showPosts(){
        if(posts){
            return (
                posts.map((post)=>(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.desc}</td>
                    </tr>
                ))
            )
        }
    }



    return(
        <Fragment>
            <center>
                <br />
                <h1>Test - CombineUsers</h1>
                <Link to='/addUser'>
                    <button className="btn btn-light">Add user</button><br /><br />
                </Link>
                <table className="table table-bordered w-50 bg-light">
                    <caption>Users</caption>
                    <thead>
                        <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>Users</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showUsers()}
                    </tbody>
                </table>
                {/* <br /> */}
                <Link to='/addPost'>
                    <button className="btn btn-light">Add post</button>
                </Link>
                <br />
                <br />

                <table className="table table-bordered w-50 bg-light">
                    <caption>Posts</caption>
                    <thead>
                        <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>Posts</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showPosts()}
                    </tbody>
                </table>
                <br />
                <br />

            </center>
                
        </Fragment>
    )
}