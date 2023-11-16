import React from "react";
const CounterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};
export default CounterReducer;
