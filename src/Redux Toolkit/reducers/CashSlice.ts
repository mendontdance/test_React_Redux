import {createSlice} from "@reduxjs/toolkit";

interface CashState {
    cash: number
}

const initialState: CashState = {
    cash: 0
}

export const cashSlice = createSlice({
    name: 'cash',
    initialState,
    reducers: {
        addCash(state, action: any) {
            state.cash+=action.payload
        },
        getCash(state, action: any) {
            state.cash-=action.payload
        }
    }
})

export default cashSlice.reducer