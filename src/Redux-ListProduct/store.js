import { createStore } from 'redux';
import { ProductReducer } from './Reducer';

const store = createStore(ProductReducer);

export default store;
