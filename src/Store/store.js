import { legacy_createStore } from 'redux';
import CounterReducer from './Reducer';

const store = legacy_createStore(CounterReducer);

export default store;
