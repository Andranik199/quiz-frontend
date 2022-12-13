import { questionsSlice } from './questions.slice'
import * as actions from './actions';
import * as selectors from './selectors';


export const questionsActions = {
    ...questionsSlice.actions,
    ...actions,
}

export const questionsSelectors = {
    ...selectors
}
