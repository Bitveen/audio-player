import { createStore, combineReducers } from "redux";


export const configureStore = () => {
    let reducers = combineReducers({
        val: function(state = "", action) {
            return state;
        }
    });

    return createStore(reducers);
};
