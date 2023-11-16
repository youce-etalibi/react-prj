import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Action';

export default function Counter() {
    const [inputValue, setInputValue] = useState(0); 
    const count = useSelector((state) => state.count - (-inputValue));
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(inputValue));
    };

    const handleDecrement = () => {
        dispatch(decrement(inputValue));
    };

    return (
        <center>
        <div style={{backgroundColor : 'blueviolet', color : 'white', fontFamily:'verdana', padding : '20px', width : 'fit-content', margin:'20px', borderRadius:'10px'}}>
            <h1>Counter: <span style={{backgroundColor:'gold', padding:'3px', color:'blueviolet', fontWeight:'bold', borderRadius:'5px'}}>{count}</span></h1>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{backgroundColor:'gold', color:'blueviolet', fontWeight:"bold", width:'100px', borderRadius:'10px', border : '2px solid white', padding:'4px', margin:'5px'}}/>
            <br />
            <button style={{backgroundColor : 'gold', fontWeight:'bold', borderRadius:'10px', margin:'5px'}} onClick={handleIncrement}>Increment + 1</button>
            <button style={{backgroundColor : 'gold', fontWeight:'bold', borderRadius:'10px', margin:'5px'}} onClick={handleDecrement}>Decrement - 1</button>
        </div>
        </center>
    );
}
