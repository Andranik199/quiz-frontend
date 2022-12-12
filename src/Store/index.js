import { configureStore } from "@reduxjs/toolkit"
import {questionsSlice} from "./Questions/questionsSlice";
import {authSlice} from "./AuthStore/authSlice";

export const store = configureStore({
    reducer:{
        [questionsSlice.name]:questionsSlice.reducer,
        [authSlice.name]:authSlice.reducer
    }
})