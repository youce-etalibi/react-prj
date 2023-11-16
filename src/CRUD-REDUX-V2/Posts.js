import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPost, deletePost } from "./Redux/Action";

export default function Posts(){
    const home = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const posts = useSelector(state => state.posts)
    const postsUser = posts.filter(post => post.userId == id)

    const [idPost, setIdPost] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    
    function handleAddPosts(e){
        e.preventDefault();
        const postX = {
            id : idPost,
            userId : id,
            title : title,
            description : description
        }
        dispatch(addPost(postX));
        // home (`/posts/${id}`);
    }
    function ShowPosts(){
        return(
            postsUser.map((post)=>(
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>
                        <button
                        onClick={()=>(
                            window.confirm('Delete Posts ? ') ? dispatch(deletePost(post.id)) : null
                        )}
                        className="btn btn-light">DELETE POST</button>
                    </td>
                </tr>
            ))
        )
    }

    function handleGoBack(e){
        e.preventDefault();
        home('/');
    }

    // console.log(postsUser)

    return(
        <Fragment>
            <br/>
            <center>
                <h1>Posts</h1>
                <button onClick={handleGoBack} className="btn btn-danger">Go Back</button>
                <br/>
                <br/>
                <div>
                <form onSubmit={handleAddPosts}>
                <table className="table table-bordered bg-light w-50" style={{border:'4px solid gold'}}>
                    <tbody>
                        <tr>
                            <td>ID POSTS : </td>
                            <td>
                                <input type="text" onChange={e=>setIdPost(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>TITLE : </td>
                            <td>
                                <input type="text" onChange={e=>setTitle(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>DESCRIPTION : </td>
                            <td>
                                <input type="text" onChange={e=>setDescription(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input type="submit" value='Add Post' className="btn btn-warning"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
                </div>
                
                <table className="table table-bordered bg-warning w-75">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>EVENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ShowPosts()}
                    </tbody>
                </table>

            </center>
        </Fragment>
    )
}