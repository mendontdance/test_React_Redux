import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import cashReducer from "./reducers/CashSlice";
import customerReducer from "./reducers/CustomerSlice";

const rootReducer  = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;