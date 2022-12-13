export enum AppRoutes {
    SIGN_IN ='/sign-in',
    REGISTER ='/register',
    QUESTIONS = '/questions'
}


export const  CreateQuestionModalTitles = {
    '0': 'Please add a title for your question',
    '1': 'Please add {count} answers to your question'
}

export const ZOOM_CLIENT_IO = 'ZtBQ1X_fTJR0BhHKb8Jlw'
export const REDIRECT_URL = 'http%3A%2F%2Flocalhost%3A3000'
export const ZOOM_API_SECRET = 'N4uPq21T9WtHWq8bA3vHQggfkT9eVL1V'
export const ZOOM_GET_CODE_LINK = `https://zoom.us/oauth/authorize?response_type=code&client_id=${ZOOM_CLIENT_IO}&redirect_uri=${REDIRECT_URL}`
