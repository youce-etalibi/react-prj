import React, { Fragment, useEffect, useState } from "react";
export default function Ex2(){
  const [id, setId] = useState();
  const [error, setError] = useState('')
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(repo=>repo.json())
    .then(data=>setUser(data))
  }, [id])
  console.log(id)
  console.log(user)
  function result() {
    if (user) {
      return (
        <div style={{ backgroundColor: 'green', textAlign: 'left', width: 'fit-content', padding: '10px', margin: '10px', color: 'white', borderRadius: '10px' }}>
          <h1 style={{ color: 'gold' }}>id : {user.id} name : {user.name}</h1>
          <h2>email : {user.email}</h2>
          <h2>telephone : {user.phone}</h2>
          <h2>site : {user.website}</h2>
          <h2>rue : {user.address?.street}</h2>
          <h2>city : {user.address?.city}</h2>
        </div>
      );
    } else {
      return null;
    }
  }
  
  return (
    <Fragment>
      <center>
        <div className="form">
          <h2>Detail Utilisateur</h2>
          <form>
            donner le id : <br />
            <input type="number" onChange={e => setId(e.target.value)} />
          </form>
          {id != null && id > 0 ? null : <div style={{ color: 'red' }}>svp choisir un id valide</div>}
        </div>
        <div className="Result">
          {id != null && id > 0 ? result() : null}
        </div>
      </center>
    </Fragment>
  );
  }  