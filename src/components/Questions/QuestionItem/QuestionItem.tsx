import React, {useState} from 'react';
import {Avatar, Button, Card, Radio, RadioChangeEvent, Space} from "antd";
import {Question} from "store/slices/questions/questions.slice";
import {useAppDispatch, useAppSelector} from "store";
import {authSelectors} from "store/slices/auth/config";
import {questionsActions} from "store/slices/questions/config";
import {CheckCircleOutlined, CloseCircleFilled} from "@ant-design/icons";


export const QuestionItem: React.FC<Question> = ({title, answers, userId, id, answeredUsers}) => {
    const dispatch = useAppDispatch();
    const correctAnswer = answers.find(item => item.isCorrectAnswer)
    const currentUser = useAppSelector(authSelectors.selectCurrentUser)
    const myAnswer = answeredUsers.find(item => item.userId === currentUser.id)
    const [answeredId, setAnsweredId] = useState('')
    const onChange = (e: RadioChangeEvent) => {
        setAnsweredId(e.target.value)
    }

    const handleRemoveQuestion = () => {
        dispatch(questionsActions.removeQuestion(id))
    }

    const handleAnswerQuestion = () => {
        setAnsweredId('')
        dispatch(questionsActions.toAnswerQuestion(answeredId, id))
    }
    return (
        <Card title={
            <div className='flex-col'>
            <span>
                {title}
            </span>
                {userId === currentUser.id && <p>
                    Created From - You
                </p>}
            </div>}
              bordered={false}
              style={{width: 300}}
        >

            <div className='flex-col'>
                <Radio.Group
                    onChange={onChange}
                    value={myAnswer?.answerId || answeredId}
                    disabled={answeredUsers.some(item => item.userId === currentUser.id)}
                >
                    <Space direction="vertical">
                        {answers.map(item => (
                            <Radio value={item.id} key={item.id}>{item.content}</Radio>
                        ))}
                    </Space>
                </Radio.Group>


                <Avatar.Group
                    maxCount={2}
                    maxPopoverTrigger="click"
                    size="large"
                    maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                >
                    {answeredUsers.map(item => {
                        return <Avatar key={item.userId} src={item.userId === currentUser.id ? JSON.parse(localStorage.user).pic_url: ''} />
                    })}

                    {/*<Tooltip title="Ant User" placement="top">*/}
                    {/*    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />*/}
                    {/*</Tooltip>*/}
                </Avatar.Group>
                {userId === currentUser.id &&
                    <Button type='primary' danger onClick={handleRemoveQuestion} className='mt-4'>
                        Remove
                    </Button>}

                {answeredId && (
                    <Button type='primary' onClick={handleAnswerQuestion} className='mt-4'>
                        Answer
                    </Button>
                )}

                {myAnswer && (
                    <>
                        {correctAnswer?.id === myAnswer.answerId ?
                            <p>
                                <CheckCircleOutlined twoToneColor='green'/> You are right
                            </p>
                            : <p>
                                <CloseCircleFilled/> The correct answer is {correctAnswer?.content}
                            </p>
                        }
                    </>
                )}
            </div>

        </Card>
    )
}
