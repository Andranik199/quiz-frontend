import {RootState} from "../../index";
import {apiInstance} from "../../../api";
import {authSelectors} from "../auth/config";
import {questionsActions} from "./config";

type CreateQuestionArgs = {
    questionTitle: string;
    answers: Array<{ content: string, isCorrectAnswer: boolean}>
}
export const getQuestions = () => async (dispatch: any, getState: () => RootState) => {
    try {
        const token = authSelectors.selectToken(getState())
        const response = await apiInstance.get('/questions', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(questionsActions.setQuestions(response.data))
    } catch(err) {

    }
}


export const createQuesiton = (args: CreateQuestionArgs) => async (dispatch: any, getState: () => RootState) => {
    try {
        const token = authSelectors.selectToken(getState())
        const response = await apiInstance.post('/questions', {
            question: {
                title: args.questionTitle
            },
            answers: args.answers
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(questionsActions.setNewQuestion(response.data))
    } catch(err) {

    }
}

export const removeQuestion = (questionId: string) => async (dispatch: any) => {
    try {
        await apiInstance.delete(`/questions/${questionId}`)
        dispatch(questionsActions.deleteQuestion(questionId))
    } catch(err) {

    }
}

export const toAnswerQuestion = (answerId: string, questionId: string) => async (dispatch: any, getState: () => RootState) => {
    try {
        const token = authSelectors.selectToken(getState())
        const response = await apiInstance.put('/questions', {
            questionId,
            answerId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(questionsActions.updateQuestion(response.data))
    } catch(err) {

    }
}

