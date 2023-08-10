import React from 'react'
import axios from 'axios'
import { useAuth } from '../context/authContext';


export const LoginHandler = async (userName, password) => {
    const {authDispatch } = useAuth();
    try { const response = await axios.post("https://express-sgam.onrender.com/auth/login", {
            userName: userName,
            password: password });
        const {token} = response.data;
        if(response.status === 200){
            localStorage.setItem("token", token);
            authDispatch({
                type: "TOKEN",
                payload: token
            })
            console.log(userName);
            return token;  
        }
    } catch (error) {
        console.log(error);
    }

}


