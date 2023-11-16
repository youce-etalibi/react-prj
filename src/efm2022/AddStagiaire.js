import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStagiaire } from "./actions";
import { useNavigate } from "react-router-dom";

function AddStagiaire() {
  const dispatch = useDispatch();
  const home = useNavigate();
  const [image, Setimage] = useState();
  const [nom, Setnom] = useState();
  const [prenom, Setprenom] = useState();
  const [filiere, Setfiliere] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stg = { image: image, nom: nom, prenom: prenom, filiere: filiere };
    dispatch(addStagiaire(stg));
    home("/");
  };

  return (
    <center>
      <br />
      <br />
      <br />
      <table className="table table-bordered w-25 bg-light">
        <tbody>
          <tr>
            <td>Image URL:</td>
            <td>
              <input
                type="text"
                name="image"
                onChange={(e) => Setimage(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>NOM :</td>
            <td>
              <input
                type="text"
                name="nom"
                onChange={(e) => Setnom(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>PRENOM:</td>
            <td>
              <input
                type="text"
                name="prenom"
                onChange={(e) => Setprenom(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>FILIERE:</td>
            <td>
              <input
                type="text"
                name="filiere"
                onChange={(e) => Setfiliere(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleSubmit} className="w-100 btn btn-primary">
                Ajouter
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default AddStagiaire;
