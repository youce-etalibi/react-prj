import { legacy_createStore } from "redux";
import UserReducer from "./Reducer";
const store = legacy_createStore(UserReducer);
export default store;
