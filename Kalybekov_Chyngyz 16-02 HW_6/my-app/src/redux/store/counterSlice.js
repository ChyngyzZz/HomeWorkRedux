import {createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counterSlice',
    initialState: {
        count:0
    },
    reducers: {
        changeNumberIncrement: (state, action) => {
            state.count += 1
        }, changeNumberDecrement: (state, action) => {
            state.count -= 1
        }
    }
})

export const {changeNumberIncrement,changeNumberDecrement} = counterSlice.actions
export default counterSlice.reducer