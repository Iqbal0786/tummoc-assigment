import {createStore,combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./RegisteRedux/RegisterReducer";
import { loginReducer } from "./LoginRedux/LoginReducer";

const rootReducers= combineReducers({
    registerReducer,
   loginReducer

});

export const store=  createStore(rootReducers, applyMiddleware(thunk))

