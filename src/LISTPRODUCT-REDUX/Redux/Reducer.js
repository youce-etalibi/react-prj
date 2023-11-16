import React from "react";
const initState = {
    product : [
        //  
    ]
}
export default function Reducer(state = initState, action){
    switch(action.type){
        case "addProduct" :
            return {...state, product : [...state.product, action.payload]}
        default :
            return state
    }
}