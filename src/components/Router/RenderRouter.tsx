import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../common/constants";
import {SignIn} from "../SignIn/SignIn";
import {Questions} from "../Questions/Questions";


export const RenderRouter: React.FC = () => {
    return (
        <Routes>
            <Route path={AppRoutes.SIGN_IN} element={<SignIn/>}/>
            <Route path={AppRoutes.QUESTIONS} element={<Questions />}/>
        </Routes>
    )
}
