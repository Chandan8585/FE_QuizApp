import { createContext, useContext, useReducer } from "react"
import {authReducer} from "../reducer/authReducer"

const initialState = {

    name: "",
    mobile: "",
    password:"",
    email: "",
    confirmPassword:"",
    accessToken:"",
    userName:"",
}

const AuthContext = createContext(initialState);

const AuthProvider = ({children})=> {
    const [{accessToken ,userName,selectedTab ,confirmPassword, name, email, password, mobile, isUserModalOpen}, authDispatch] = useReducer( authReducer, initialState);
    return (
        <AuthContext.Provider value={{ accessToken ,userName, confirmPassword, selectedTab, name, email, password, mobile, isUserModalOpen, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = ()=> useContext(AuthContext);

export {useAuth, AuthProvider}