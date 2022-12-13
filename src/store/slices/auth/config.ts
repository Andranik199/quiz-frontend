import { authSlice } from './auth.slice'
import * as actions from './actions';
import * as selectors from './selectors';

export const authActions = {
    ...authSlice.actions,
    ...actions
}


export const authSelectors = {
    ...selectors
}
