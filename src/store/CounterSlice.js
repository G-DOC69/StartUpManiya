import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:12
    },
    reducers:{
        plus:state =>{
            state.value +=1
        },
        minus:state =>{
            state.value -=1
        },
    }
})
export const { plus , minus} = counterSlice.actions
export default counterSlice.reducer