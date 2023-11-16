import React from "react";
const initState = {
    users : [],
    posts : []
}
export default function Reducer(state = initState, action){
    switch(action.type){
        case 'addUser' :
            return {...state, users : [...state.users, action.payload]};
            break;
        case 'deleteUser' :
            return {...state, users:  state.users.filter(item=>item.id != action.payload) }
            break;
        case 'updateUser':
            const updatedUsers = state.users.map(item => (item.id !== action.payload.id) ? item : action.payload);
            return {...state, users: updatedUsers.sort((a, b) => (a.id - b.id))};
            break;
        case 'deletePost' :
            return {...state, posts:  state.posts.filter(item=>item.id != action.payload) }
            break;
        case 'addPost' :
            return {...state, posts : [...state.posts, action.payload]};
            break;
            
        default :
            return state;
    }
}
