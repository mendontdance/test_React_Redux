import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    customers: [{
        name: 'David',
        id: 0
    }]
}
export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer(state, action: any) {
            state.customers = [...state.customers, action.payload]
        },
        addManyCustomers(state, action: any) {
            action.payload.forEach((elem: any) => {
                if(!state.customers.find(el => el.id === elem.id)) {
                    state.customers = [...state.customers, elem]
                }
            })
        },
        removeCustomer(state, action: any) {
            state.customers = state.customers.filter(elem => elem.id !== action.payload)
        }
    }
})

export const fetchCustomers = (): any => (dispatch: any) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            const {addManyCustomers}: any = customerSlice.actions
            dispatch(addManyCustomers(json))
        })
}

export default customerSlice.reducer