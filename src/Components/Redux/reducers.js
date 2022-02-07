import {combineReducers} from "redux";
import {shoppingReducer} from "./shoppingReducer";

export const reducer = combineReducers({
    shopping: shoppingReducer,
})