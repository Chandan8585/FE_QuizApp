import { createContext, useContext, useReducer } from "react";
import authReducer from "../reducer/authReducer";

const initialState = {
    userName : "Chandan",
    password : "LifeisGood"
}

const AuthContext = createContext();
const AuthProvider = ({children})=> {
    const [{userName, password}, authDispatch] = useReducer(authReducer, initialState);
    return(
<AuthContext.Provider value={{userName, password, authDispatch}}>
     {children}
</AuthContext.Provider>
)}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}