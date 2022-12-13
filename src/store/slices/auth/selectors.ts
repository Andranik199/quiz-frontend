import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../index";
import {User} from "./auth.slice";

export const AuthSelector = (state: RootState) => state.auth;

export const selectToken = createSelector(AuthSelector, (state) => {
    return state.token || localStorage.token
});


export const selectCurrentUser = createSelector(AuthSelector, state => {
    return (state.currentUser || localStorage.user ? JSON.parse(localStorage.user) : {}) as User
})
