import {createStore,combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./RegisteRedux/RegisterReducer";
const rootReducers= combineReducers({
    registerReducer,

});

export const store=  createStore(rootReducers, applyMiddleware(thunk))

