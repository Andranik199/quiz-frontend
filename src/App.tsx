import React, {useEffect} from 'react'
import './App.css';
import {RenderRouter} from "./components/Router/RenderRouter";
import {useAppDispatch, useAppSelector} from "./store";
import {authActions, authSelectors} from "./store/slices/auth/config";
import {useLocation, useNavigate} from "react-router-dom";
import {AppRoutes} from "./common/constants";
import {questionsActions} from "./store/slices/questions/config";
import {CreateQuestion} from "./components/Questions/CreateQuestion/CreateQuestion";
import queryParams from 'query-string'
import {connectToClient} from "./store/slices/sockets/actions";

const App = () => {
    const location = useLocation()
    const token = useAppSelector(authSelectors.selectToken);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!token) {
            navigate(AppRoutes.SIGN_IN)
        } else {
            navigate(AppRoutes.QUESTIONS)
            dispatch(questionsActions.getQuestions())
        }
        // eslint-disable-next-line
    }, [token])

    useEffect(() => {
        if (location.search.includes('code')) {
            // @ts-ignore
            const code = (queryParams.parse(location.search).code) as string
            dispatch(authActions.login(code))
        }
        //eslint-disable-next-line
    }, [])


    useEffect(() => {
        dispatch(connectToClient())
        // eslint-disable-next-line
    }, [])
    return (
        <div className='mt-4'>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <CreateQuestion/>
            </div>
            <RenderRouter/>
        </div>
    );
}

export default App;
