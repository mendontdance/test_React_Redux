import {ADD_CASH, GET_CASH} from "../actions/cashAction";

const initialState = {
    cash: 0
}

export const cashReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                cash: state.cash + action.payload
            }
        case GET_CASH:
            return {
                ...state,
                cash: state.cash - action.payload
            }
        default: {
            return state
        }
    }
}

export const addCash = (payload: any) => ({type: ADD_CASH, payload: payload})
export const getCash = (payload: any) => ({type: GET_CASH, payload: payload})