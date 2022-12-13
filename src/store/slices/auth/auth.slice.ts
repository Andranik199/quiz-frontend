import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type User = {
    id: string;
    username: string;
    email: string;
}

type InitialState = {
    token: string;
    currentUser: User | {},
}

const initialState: InitialState = {
    token: '',
    currentUser: {}
}
export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                token: action.payload
            }
        },

        setUser: (state, action: PayloadAction<User | {}>) => {
            return {
                ...state,
                currentUser: action.payload
            }
        }
    },
})
