import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type Answer = {
    id: string;
    content: string;
    questionId: string;
    isCorrectAnswer: boolean;
}
type AnsweredUsers = {
    userId: string;
    answerId: string;
};

export type Question = {
    id: string;
    title: string;
    userId: string;
    answeredUsers: Array<AnsweredUsers>;
    answers: Array<Answer>
}

type InitialState = {
    items: Array<Question>
}
const initialState: InitialState = {
    items: [],
}
export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        updateQuestion: (state, action: PayloadAction<Question>) => {
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
            }
        },
        deleteQuestion: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        },
        setNewQuestion: (state, action: PayloadAction<Question>) => {
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        },
        setQuestions: (state, action:PayloadAction<Array<Question>>) => {
            return {
                ...state,
                items: action.payload
            }
        }
    }
})
