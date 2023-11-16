import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App(){
    const state = useSelector((state) => state.value);
    const dispatch = useDispatch();
    const [nbr, setNbr] = useState(0);
    const inc = () => {
        const action = {type : 'increment', payload : nbr};
        dispatch(action);
    };
    
    const dec = () => {
        const action = {type : 'decremenet', payload : nbr};
        dispatch(action);
    };

    return(
        <div className="App">
            <h1>Hello Redux </h1>
            <div>Counter : {state}</div>
            <div>
                <input type="number" onChange={e=>setNbr(e.target.value)}/>
            </div>
            <div className="Counter">
                <button className="" onClick={inc}>increase</button>
                <button className="" onClick={dec}>decrease</button>
            </div>
            <div>
                <button className="">Hide/SHow counter Number</button>
            </div>
        </div>
    )
}