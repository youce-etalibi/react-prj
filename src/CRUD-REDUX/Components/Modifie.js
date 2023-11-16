import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Action";
export default function Modifie() {
  const home = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentUser = users.find((user) => user.id === id);
  const [fullName, setFullName] = useState(currentUser ? currentUser.fullname : '');
  const [email, setEmail] = useState(currentUser ? currentUser.email : '');
  const [profil, setProfil] = useState(null);
  function handleSUbmit(e) {
    e.preventDefault();
    const updatedUser = {
      id,
      fullname: fullName,
      email: email,
      profil: profil,
    };
    console.log(updateUser)
    dispatch(updateUser(updatedUser));
    home('/');
}
  return (
    <Fragment>
      <center>
        <div className="bodyUpdate">
          <h1>UPDATE USERS</h1>
          <form onSubmit={handleSUbmit} encType="multipart/form-data">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>FULLNAME</td>
                  <td>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>EMAIL</td>
                  <td>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>PROFIL</td>
                  <td>
                    <input
                      type="file"
                      onChange={(e) => setProfil(e.target.files[0])}/>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input type="submit" value="UPDATE" />
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
