import { combineReducers } from "redux";

const initStateUser = [];
    function ReducerUsers(state = initStateUser, action){
        switch(action.type){
            case "addUser":
                return [...state, action.payload];
            default :
                return state;
        }
    }

    
const initStatePost = [];
    function ReducerPosts(state = initStatePost, action){
        switch(action.type){
            case "addPost":
                return [...state, action.payload];
            default :
                return state;
        }
    }

const RootReducer = combineReducers({ users : ReducerUsers, posts : ReducerPosts});
export default RootReducer;
