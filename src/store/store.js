import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import lineReducer from './lineSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        line: lineReducer,
    }
});