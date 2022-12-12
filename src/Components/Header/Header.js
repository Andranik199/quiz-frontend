import {useDispatch} from "react-redux";
import {authActions} from "../../Store/AuthStore/config";


export const Header =()=>{
    const dispatch  =useDispatch()
    const handleLogOut =()=>{
        localStorage.clear()
        dispatch(authActions.setToken(''))
    }


    return(
        <div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}