import {createSlice} from "@reduxjs/toolkit";
import {quizQestions} from "../../quizQestions/data";


const initialState = {
    questions:quizQestions
}

export const questionsSlice = createSlice({
    name:'questionsSlice',
    initialState,
    reducers:{
      getQuestions:(state, action)=>{
          return {
              ...state,
              questions: initialState.questions
          }
      }
    }
})