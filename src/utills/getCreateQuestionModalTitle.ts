import { CreateQuestionModalTitles } from 'common/constants'



export const getCreateQuestionModalTitle = (index: number, answersCount: number) => {
    switch(index) {
        case 0: {
            return CreateQuestionModalTitles["0"]
        }

        case 1: {
            return CreateQuestionModalTitles['1'].replace('{count}', `${4 - answersCount}`)
        }
    }
}
