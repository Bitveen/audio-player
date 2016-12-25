import { createStore, combineReducers } from "redux";

import { songsReducer } from "reducers";

export const configureStore = () => {
    let reducers = combineReducers({
        songs: songsReducer
    });

    return createStore(reducers);
};
