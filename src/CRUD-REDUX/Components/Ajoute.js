// ajoute.js
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { adduser } from "../Action";

export default function Ajoute() {
  const [id, setId] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profil, setProfil] = useState('');
  const dispatch = useDispatch();
  const home = useNavigate();
  function handleSUbmit(e) {
    e.preventDefault();
    const newUser = { id, profil, fullname: fullName, email };
    dispatch(adduser(newUser));
    home('/');
  }
  function handleBack(e) {
    e.preventDefault();
    home('/');
  }
  return (
    <Fragment>
      <center>
        <button className="btnGoBack" onClick={handleBack}>
          <i className="fa fa-arrow-circle-left"></i>
        </button>
        <div className="bodyAdd">
          <h1 style={{ fontWeight: 'bold' }}>Add User</h1>
          <form onSubmit={handleSUbmit}>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>
                    <input type="text" onChange={(e) => setId(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td>FULLNAME</td>
                  <td>
                    <input type="text" onChange={(e) => setFullName(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td>EMAIL</td>
                  <td>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td>PROFIL</td>
                  <td>
                    <input type="file" onChange={(e) => setProfil(e.target.files[0])} />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input type="submit" value="ADD" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </center>
    </Fragment>
  );
}
