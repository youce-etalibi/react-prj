import { legacy_createStore } from "redux";
import Accueil from "./Components/Accueil";

const store = legacy_createStore(Accueil);

export default store;