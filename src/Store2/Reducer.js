import React from "react";

import { legacy_createStore } from "redux";

// const initState = { value : 0 };
const CounterReducer = (state = {value : 0}, action) => {
    if(action.type == 'increment'){
        return {...state, value :  state.value + 1 + Number(action.payload)};
        // console.log(action)
    }
    if(action.type == 'decremenet'){
        return {...state, value :  state.value - 1};
        // console.log(action)
    }
    console.log(action)
    return state; 
}
export const store = legacy_createStore(CounterReducer);
