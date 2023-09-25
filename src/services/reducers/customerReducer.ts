import {ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMER} from "../actions/customerAction";
const initialState = {
    customers: [{
        name: 'David',
        id: 0
    }]
}

export const customerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case ADD_MANY_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload]
            }
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(elem => elem.id !== action.payload)
            }
        default: {
            return state
        }
    }
}

export const addCustomer = (payload: any) => ({type: ADD_CUSTOMER, payload: payload})
export const addManyCustomers = (payload: any) => ({type: ADD_MANY_CUSTOMERS, payload: payload})
export const removeCustomer = (payload: any) => ({type: REMOVE_CUSTOMER, payload: payload})