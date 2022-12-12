import {questionsSlice} from "./questionsSlice";
import * as selectors from './selectors'
export const questionsActions = {
   ...questionsSlice.actions
}

export const questionsSelector ={
    ...selectors
}