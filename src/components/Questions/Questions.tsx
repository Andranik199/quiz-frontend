import React from 'react';
import {useAppSelector} from "../../store";
import {questionsSelectors} from "../../store/slices/questions/config";
import {QuestionItem} from "./QuestionItem/QuestionItem";
import {Space, Typography} from "antd";
import {Empty} from 'antd';

export const Questions: React.FC = () => {
    const questions = useAppSelector(questionsSelectors.selectAllQuestions)
    return (
        <div className='flex-center m-20 flex-col'>
            <Typography.Title className='text-center'>Questions</Typography.Title>
            {questions.length > 0 ? (
                <Space className='flex-center flex-wrap'>
                    {questions.map(question => (
                        <QuestionItem key={question.id} {...question} />
                    ))}
                </Space>
            ) : <Empty/>}

        </div>
    )
}
