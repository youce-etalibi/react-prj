import React from "react";

const initState = {
    Employes : []
}

export default function Reducer(state = initState, action){
    switch(action.type){
        case 'add' :
            return {...state, Employes : [...state.Employes, action.payload]}
        default :
            return state;
    }
}