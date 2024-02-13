import { configureStore } from "@reduxjs/toolkit";
import lineReducer from './lineSlice';

export const store = configureStore({
    reducer:{
        line: lineReducer,
    }
});