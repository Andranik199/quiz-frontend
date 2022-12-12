import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    token:''
}

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        setToken:(state, action)=>{
            return {
                ...state,
                token: action.payload
            }
        }
    }
})