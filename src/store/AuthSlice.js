import {createSlice} from "@reduxjs/toolkit";
import {counterSlice} from "../CounterSlice.js";

const storedRole = localStorage.getItem("role");
const initialRole = storedRole ? JSON.parse(storedRole) : false;

const storedToken = localStorage.getItem("token");
const initialToken = storedToken ? JSON.parse(storedToken) : false;

const initialState = {
    isAuthRole: initialRole,
    isAuthToken: initialToken
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus: (state, action) => {
            state.isAuthRole = action.payload;
            localStorage.setItem("role", JSON.stringify(state.isAuthRole));
        },
        setAuthToken: (state, action) => {
            state.isAuthToken = action.payload
            localStorage.setItem("token", JSON.stringify(state.isAuthToken));
        },
        setLogOut: (state) => {
            state.isAuthRole = false;
            state.isAuthToken = false;
            localStorage.removeItem('role');
            localStorage.removeItem('token');
        },
    }
})

export const {setAuthStatus, setAuthToken, setLogOut } = authSlice.actions

export default authSlice.reducer