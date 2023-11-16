import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <Fragment>
            <div className="bg-warning p-1">
                <Link to='/'>
                    <button className="btn btn-primary m-1">List Employes</button>
                </Link>
                <Link to='/add'>
                    <button className="btn btn-success">Add Employes</button>
                </Link>
            </div>
        </Fragment>
    )
}