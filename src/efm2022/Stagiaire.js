import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


function Stagiaire() {

    const home = useNavigate()
    const {nom} = useParams();
    const stagiaires = useSelector(state => state.stagiaires)
    const stg = stagiaires.find((item)=>item.nom == nom);

  return (
    <center>
      <br/>
      <button onClick={()=>(home('/'))} className='btn btn-outline-warning'>Go back</button>
      <br/>
      <br/>
    <div style={{display:'flex', width:'fit-content', backgroundColor:'yellow', borderRadius:'10px', padding:'10px'}}>
      <img src={stg.image} style={{width:'200px', height:'200px', objectFit:'cover', borderRadius:'10px'}}/>
      <div>
        <h2>{stg.nom} {stg.prenom}</h2>
        <h3>{stg.filiere}</h3>
      </div>
    </div>
    </center>
  );
}

export default Stagiaire;