import {combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";

export const RootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})