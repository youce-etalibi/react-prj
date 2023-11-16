import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Action";
export default function Affichage() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteUser(id));
  }
  function ShowUser() {
    if (!users) return null;
    return users.map((user) => (
      <tr key={user.id} className="tr-table">
        <td>{user.id}</td>
        <td>
            <Link to={`/detail/${user.id}`}>
                <img src={URL.createObjectURL(user.profil)} className="img-profil" alt="Profile" />
            </Link>
        </td>
        <td>{user.fullname}</td>
        <td>{user.email}</td>
        <td colSpan='2'>
          <Link to={`modifie/${user.id}`}>
            <button className="updateBtn">modifie</button>
          </Link>
          <button
            className="deleteBtn"
            onClick={() => {
              if (window.confirm('Delete User?')) {
                handleDelete(user.id);
              }}}>Supprime</button>
        </td>
      </tr>
    ));}
  return (
    <Fragment>
      <center>
        <br />
        <div className="bodyCrud">
          <center>
            <br />
            <h1>Users</h1>
            <h6 style={{backgroundColor:'yellow', color:'black', borderRadius:'5px'}}>Click On The Profile Picture To view The Details</h6>
            <Link to={`/ajoute`}>
              <button className="addBtn">Add User</button>
            </Link>
            <br />
            <br />
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PROFIL</th>
                    <th>FULLNAME</th>
                    <th>EMAIL</th>
                    <th>EVENT</th>
                  </tr>
                </thead>
                <tbody>{ShowUser()}</tbody>
              </table>
              <br />
            </div>
          </center>
        </div>
      </center>
    </Fragment>
  );
}
