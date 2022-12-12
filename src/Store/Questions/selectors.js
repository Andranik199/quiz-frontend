import {createSelector} from "reselect";


const questionsSelectors = (store) => store.questionsSlice;
export const quizQuestionsSelector = createSelector(questionsSelectors, (state) => {
    return state.questions;
});