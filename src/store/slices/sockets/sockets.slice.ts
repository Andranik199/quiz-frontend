import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';


type InitialState = {
    client:  Socket | null;
    isConnected: boolean;
}
const initialState:InitialState = {
    client: null,
    isConnected: false
};

export const socketsSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        setConnectionStatus: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isConnected: action.payload
            }
        },
        setSocketClient: (state, action: PayloadAction<Socket>) => {
            return {
                ...state,
                client: action.payload
            }
        },
    }
})

export const { setSocketClient, setConnectionStatus } = socketsSlice.actions
