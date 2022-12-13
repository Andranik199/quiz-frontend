import {RootState} from "../../index";
import { createSelector } from "@reduxjs/toolkit";

const QuestionsSelector = (state: RootState) => state.questions;
export const selectAllQuestions = createSelector(QuestionsSelector, (state) => {
    return state.items;
})
