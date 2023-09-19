import axios from 'axios'
// import { useAuth } from '../context/authContext';


export const LoginHandler = async (userName, password) => {
    // const {authDispatch } = useAuth();
    try { 
        const response = await axios.post("http://localhost:8080/auth/login", {
            userName: userName,
            password: password 
        });
        const {token} = response.data;
        if(response.status === 200){
            localStorage.setItem("token", token);
            return token;  
        }
    } catch (error) {
        console.log(error);
    }

};



