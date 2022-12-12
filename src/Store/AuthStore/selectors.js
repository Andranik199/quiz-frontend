import {createSelector} from "reselect";



const authSelectors = (store) => store.authSlice;
export const tokenSelector = createSelector(authSelectors, (state) => {
    return state.token;
});