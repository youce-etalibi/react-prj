import React, { Fragment, useEffect, useState } from "react";
export default function Ex3(){

    const [users, setUsers] = useState([])
    const [posts, setPostes] = useState([])
    const [show, setShow] = useState(false)
    const [userId, setUserId] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(repo=>repo.json())
        .then(data=>setUsers(data))

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(repo=>repo.json())
        .then(data=>setPostes(data))
    }, [])

    function showUsers(){
        if(users){
            function showPosts(){
                if(show){
                    return(
                        <Fragment>
                        <h5 style={{backgroundColor:'black', borderRadius:'10px', padding:'5px'}}> Nombre des posts : {posts.filter((e)=>(e.userId == userId)).length}</h5>
                        {posts.filter((e)=>(e.userId == userId)).map((i)=>(
                            <>
                            
                            <div key={i.id} style={{backgroundColor:'gold', padding:'5px', margin:'10px', borderRadius:'10px'}}>
                                <h3 style={{color:'green'}}>{i.title}</h3>
                                <p style={{margin:'14px', color:'black'}}>{i.body}</p>
                            </div>
                            </>
                        ))}
                        
                        </Fragment>
                    )
                }
            }
            return(
                users.map((item)=>(
                    <div key={item.id} style={{backgroundColor:'green', color:'white', width:'600px', textAlign:'left', padding:'10px', margin:'10px', borderRadius:'10px' }}>
                    <h3 style={{color:'gold'}}>nom : {item.name}</h3>
                    <h6>email : {item.email}</h6>
                    <h6>city {item.address?.city} rue : {item.address?.street}</h6>
                    <button onClick={e => (setShow(!show), setUserId(item.id))} style={{backgroundColor:'gold', color:'black', borderRadius:'10px'}}>Detail Posts</button>
                    <div>
                    
                        {item.id == userId ? showPosts() : null}
                    </div>
                </div>
                ))
            )
        }
    }
    console.log(users)
    console.log(posts)
    return(
        <Fragment>
            <center>
                <br/>
            <h1 style={{color:'green'}}>Nombre d'utilisateur {users.length}</h1>
            {showUsers()}
            </center>
        </Fragment>
    )
}