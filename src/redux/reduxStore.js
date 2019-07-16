import {combineReducers, createStore} from "redux";
import {mainPageReducer} from "./MainPageReducer.jsx";

let reducers = combineReducers({
    mainPage: mainPageReducer
});

export let store = createStore(reducers);