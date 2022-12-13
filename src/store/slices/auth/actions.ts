import {authActions} from "./config";
import {apiInstance} from "../../../api";

export const login = (zoomAuthCode: string) => async (dispatch: any) => {
    try {

        const response = await apiInstance.post(`/auth/login?zoomCode=${zoomAuthCode}`)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        dispatch(authActions.setUser(response.data.user))
        dispatch(authActions.setToken(response.data.token))
    } catch (err) {
    }
}

export const logout = () => (dispatch: any) => {
    localStorage.clear()
    dispatch(authActions.setToken(''))
    dispatch(authActions.setUser({}))
}
