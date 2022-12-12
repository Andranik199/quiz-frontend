import {authSlice} from "./authSlice";
import * as selectors from './selectors'
export const authActions = {
    ...authSlice.actions
}

export const authSelector ={
    ...selectors
}