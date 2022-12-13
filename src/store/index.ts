import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {authSlice} from './slices/auth/auth.slice'
import {questionsSlice} from './slices/questions/questions.slice'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {socketsSlice} from "./slices/sockets/sockets.slice";


export const store = configureStore({
    reducer: {
        [socketsSlice.name]: socketsSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [questionsSlice.name]: questionsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        [
            ...getDefaultMiddleware({
                serializableCheck: false,
            }),
        ] as ReturnType<typeof getDefaultMiddleware>,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
