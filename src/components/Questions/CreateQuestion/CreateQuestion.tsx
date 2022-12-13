import React, {useState} from 'react';
import {Button, Card, Input, Modal, Radio, RadioChangeEvent, Space, Statistic, Steps} from "antd";
import {getCreateQuestionModalTitle} from "utills/getCreateQuestionModalTitle";
import {useAppDispatch, useAppSelector} from "store";
import {questionsActions} from "store/slices/questions/config";
import {authActions, authSelectors} from "../../../store/slices/auth/config";


export const CreateQuestion: React.FC = () => {
    const token = useAppSelector(authSelectors.selectToken);
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [selectedAnswerAsCorrect, setSelectedAnswerAsCorrect] = useState<null | number>(null);
    const [questionTitle, setQuestionTitle] = useState('');
    const [answerContent, setAnswerContent] = useState('');
    const [answers, setAnswers] = useState<Array<{ id: number; content: string; isCorrectAnswer: boolean }>>([]);
    const handleOpenModal = () => {
        setIsOpen(true)
    };
    const handleCloseModal = () => {
        setIsOpen(false)
    };
    const handleBack = () => {
        setStep(prev => prev - 1)
    };
    const handleNextOrSubmit = () => {
        if (step < 2) {
            setStep(step + 1)
            return
        }

        dispatch(questionsActions.createQuesiton({
            questionTitle,
            answers: answers.map(item => item.id === selectedAnswerAsCorrect ? {
                content: item.content,
                isCorrectAnswer: true
            } : {content: item.content, isCorrectAnswer: false})
        }))
        handleCloseModal()
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (step === 0) {
            setQuestionTitle(e.target.value)
            return;
        }

        if (step === 1) {
            setAnswerContent(e.target.value)
        }
    };

    const checkNextButtonIsDisabled = () => {
        if (step === 0) {
            return !questionTitle.trim()
        }

        if (step === 1) {
            return answers.length < 4
        }

        return false
    };

    const handlePressEnter = () => {
        if (step === 0) {
            handleNextOrSubmit()
        }

        if (step === 1) {
            if (answers.length < 4) {
                setAnswers(prev => prev.concat({
                    id: prev.length,
                    content: answerContent,
                    isCorrectAnswer: false
                }))
                setAnswerContent('')
            }
        }
    };

    const handleSelectCorrectAnswer = (e: RadioChangeEvent) => {
        setSelectedAnswerAsCorrect(e.target.value)
    };
    const handleLogout = () => {
        dispatch(authActions.logout())
    }
    return (
        <>
            {token && (
                <>
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button type="primary" onClick={handleOpenModal}>
                        Create Question
                    </Button>
                </>
                )
            }
            <Modal
                title={getCreateQuestionModalTitle(step, answers.length)}
                open={isOpen}
                footer={null}
                onCancel={handleCloseModal}
            >
                {step === 1 && <Statistic value={answers.length} suffix="/ 4"/>}
                <Steps
                    size="small"
                    current={step}
                    items={[
                        {
                            title: 'Question Title',
                        },
                        {
                            title: 'Answers',
                        },
                        {
                            title: 'Review and finish',
                        },
                    ]}
                />

                {step === 1 && (
                    <>
                        {answers.map(item => {
                            return <p key={item.id}>{item.content}</p>
                        })}
                    </>
                )}
                {(step === 0 || (step === 1 && answers.length !== 4)) && (
                    <Input
                        value={step === 0 ? questionTitle : answerContent}
                        onChange={handleChange}
                        onPressEnter={handlePressEnter}
                        className='mt-4'
                        placeholder={step === 0
                            ? 'Please add a title to your question'
                            : 'Please add answers to your question'}
                    />
                )}

                {step === 2 && <Card title={questionTitle}>
                    <Radio.Group onChange={handleSelectCorrectAnswer} value={selectedAnswerAsCorrect}>
                        <Space direction="vertical">
                            {answers.map(item => (
                                <Radio value={item.id} key={item.id}>
                                    {item.content}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                </Card>}
                <Space className='mt-4'>
                    {step > 0 && (
                        <Button onClick={handleBack} type='primary'>
                            Back
                        </Button>
                    )}
                    <Button onClick={handleNextOrSubmit} type='primary' disabled={checkNextButtonIsDisabled()}>
                        {step < 2 ? 'Next' : 'Save'}
                    </Button>
                </Space>
            </Modal>
        </>
    )
}
