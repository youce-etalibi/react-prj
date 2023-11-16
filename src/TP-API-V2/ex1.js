import React, { Fragment, useEffect, useState } from "react";
export default function Ex1(){
    const [user3, setUser3] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(rep=> rep.json())
        .then(data=>setUser3(data.filter(e=>e.id == 3)))
    }, [])
    console.log(user3)
    return(
        <Fragment>
            <div>
                {
                    user3.map((item)=>(
                    <div key={item.id}>
                    <h1>Name : {item.name}</h1>
                    <h1>UserName : {item.username}</h1>
                    <h1>Email : {item.email}</h1>
                    <h1>Street : {item.address.street}</h1>
                    <h1>Phone : {item.phone}</h1>
                    <h1>Website : {item.website}</h1>
                    <h1>Company Name : {item.company.name}</h1>
                    </div>
                    ))
                }
            </div>
        </Fragment>
    )
}