import React, { Fragment, useState } from "react";
import './crud.css';
import { dir } from "./Data";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
    const [dataStg, setDataStg] = useState(dir);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState('');
    const [valid, setValid] = useState(false); 
    const [url, setUrl] = useState(''); 
    const navigation = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        const person = dir.find((item)=>(item.email == email && item.password == password))
        if(person){
            navigation(`/home/${person.id}`)
        }else{
            setMsgError('ne pas existe');
            navigation('/')
        }
    }

    return (
        <Fragment>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="formParent">
                    <form onSubmit={handleSubmit}>
                        <h3>LOG IN</h3>
                        <p id='message-error-validation'>{msgError}</p>
                        <label htmlFor='email'>EMAIL</label><br /> 
                        <input onChange={e => setEmail(e.target.value)} type="text" id='email' /> <br />
                        <label htmlFor='password'>PASSWORD</label><br /> 
                        <input onChange={e => setPassword(e.target.value)} type="password" id='password' /><br />
                            <input type="submit" value='Connect' id='submit' /><br />
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
