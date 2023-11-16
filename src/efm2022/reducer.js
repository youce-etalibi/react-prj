import React from "react";
const initialState = {
    stagiaires: []
  };
  
  function Reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_STAGIAIRE':
        return {...state, stagiaires : [...state.stagiaires, action.payload]}
      default:
        return state;
    }
  }
  
  export default Reducer;
  