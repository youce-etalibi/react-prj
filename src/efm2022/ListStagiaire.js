import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Stagiaire from "./Stagiaire";

function ListStagiaire() {
  const stagiaires = useSelector((state) => state.stagiaires);
  return (
    <div className="bg-info p-1">
      {stagiaires.map((stg) => (
        <Link to={`/${stg.nom}`} key={stg.nom}>
          {/* <Stagiaire {...stagiaire} /> */}
          <div
            style={{
              // display: "flex",
              // flexDirection :'column',
              width: "fit-content",
              backgroundColor: "yellow",
              borderRadius: "10px",
              padding: "10px",
              margin:'20px'
            }}
          >
            <img
              src={stg.image}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div>
              <h2>
                {stg.nom} {stg.prenom}
              </h2>
              <h3>{stg.filiere}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListStagiaire;
