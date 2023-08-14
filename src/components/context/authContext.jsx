import { createContext, useContext, useReducer, useEffect } from "react";
import authReducer from "../reducer/authReducer";

const initialState = {
    userName : "",
    password : "",
    token: "",
}

const AuthContext = createContext();
const AuthProvider = ({children})=> {
    useEffect(() => {
        const token = localStorage.getItem("token");
        authDispatch({
            type: "INITIAL_STATE",
            payload: token
        })
    }, [])
    const [{userName, password, token}, authDispatch] = useReducer(authReducer, initialState);
    return(
<AuthContext.Provider value={{userName, password, token, authDispatch}}>
     {children}
</AuthContext.Provider>
)}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}