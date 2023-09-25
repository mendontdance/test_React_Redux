import {addManyCustomers} from "../reducers/customerReducer";

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const fetchCustomers = ():any => {
    return function (dispatch: any) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomers(json)))
    }
}