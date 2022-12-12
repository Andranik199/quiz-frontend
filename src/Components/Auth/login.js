import TextField from '@mui/material/TextField';
import {useState} from "react";
import Button from "@mui/material/Button";
import {authActions} from "../../Store/AuthStore/config";
import {useDispatch} from "react-redux";
import {tokenGenarator} from "../../helpers/tokenGenerator";


export const  Login   =()=>{
    const [name, setName ] =useState()
    const dispatch= useDispatch()
    const handleChange =(e)=>{
        setName(e.target.value)
    }

    const handleLogin =()=>{
        const token  =tokenGenarator()
        dispatch(authActions.setToken(token))
        localStorage.setItem('token', token)
    }
    return (
        <>
            <TextField
    id="outlined-name"
    label="Name"
    value={name}
    onChange={(e)=>handleChange(e)}
    />
            <TextField
                id="outlined-name"
                label="Email"
                value={name}
                onChange={(e)=>handleChange(e)}
            />
            <TextField
                id="outlined-name"
                label="Password"
                type='password'
                value={name}
                onChange={(e)=>handleChange(e)}
            />
            <Button  onClick={handleLogin}>Submit</Button>
        </>
    )
}