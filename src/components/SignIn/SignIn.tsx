import React from 'react';
import {Button} from 'antd';
import {ZOOM_GET_CODE_LINK} from "../../common/constants";
import {useAppDispatch} from "../../store";


export const SignIn: React.FC = () => {
    const dispatch = useAppDispatch();
    const handleConnect = () => {
        window.open(ZOOM_GET_CODE_LINK)
    }
    return <div className='flex-center mt-4'>
       <Button type='primary' onClick={handleConnect}>
           Connect Zoom
       </Button>
    </div>
}
